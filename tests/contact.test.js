import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { handleContact } from '../src/lib/contact.js';

const req = (body) => new Request('http://x/api/contact', { method: 'POST', body: typeof body === 'string' ? body : JSON.stringify(body) });
const good = { service: 'Rekey Service', name: 'Pat Lee', phone: '(256) 555-0100', email: 'pat@example.com', street: '12 Oak St', city: 'Decatur', zip: '35601', page: '/service-areas/decatur-al/', message: 'Three doors\nfront and back' };
const env = { key: 'k', to: 'pickdaddysllc@gmail.com', from: 'site@x.com' };
const POST = (request, config = env) => handleContact(request, config);
const realFetch = globalThis.fetch;
const realError = console.error;
let sent;

beforeEach(() => {
  sent = [];
  console.error = () => {};
  globalThis.fetch = async (url, init) => { sent.push({ url, body: JSON.parse(init.body) }); return new Response('{}', { status: 200 }); };
});
afterEach(() => { globalThis.fetch = realFetch; console.error = realError; });

test('the endpoint delivers to the address in the transfer brief', () => {
  assert.match(readFileSync(new URL('../src/data/site.ts', import.meta.url), 'utf8'), /formTo: 'pickdaddysllc@gmail\.com'/);
  assert.match(readFileSync(new URL('../src/pages/api/contact.ts', import.meta.url), 'utf8'), /to: business\.formTo/);
});

test('sends a valid request to the owner inbox only', async () => {
  const res = await POST(req(good));
  assert.equal(res.status, 200);
  assert.equal(sent[0].url, 'https://api.resend.com/emails');
  assert.deepEqual(sent[0].body.to, ['pickdaddysllc@gmail.com']);
  assert.equal(sent[0].body.reply_to, 'pat@example.com');
  assert.match(sent[0].body.subject, /Rekey Service in Decatur from Pat Lee/);
  assert.match(sent[0].body.text, /Phone: \(256\) 555-0100/);
  assert.match(sent[0].body.text, /Address: 12 Oak St, Decatur, AL 35601/);
  assert.match(sent[0].body.text, /Sent from: \/service-areas\/decatur-al\//);
  assert.match(sent[0].body.text, /Three doors\nfront and back/);
});

test('rejects bad input without sending', async () => {
  for (const body of [{ ...good, name: ' ' }, { ...good, phone: '12345' }, { ...good, email: 'nope' }, { ...good, street: '' }, { ...good, city: '' }, 'not json', 'null']) {
    assert.equal((await POST(req(body))).status, 400);
  }
  assert.equal(sent.length, 0);
});

test('drops honeypot submissions silently', async () => {
  const res = await POST(req({ ...good, website: 'spam.example' }));
  assert.equal(res.status, 200);
  assert.equal(sent.length, 0);
});

test('strips line breaks from the subject', async () => {
  await POST(req({ ...good, name: 'Pat\r\nBcc: x@y.com' }));
  assert.ok(!/[\r\n]/.test(sent[0].body.subject));
});

test('reports failure when email is not configured', async () => {
  for (const missing of ['key', 'to', 'from']) {
    assert.equal((await POST(req(good), { ...env, [missing]: undefined })).status, 503);
  }
  assert.equal(sent.length, 0);
});

test('reports failure when the email provider rejects or is unreachable', async () => {
  globalThis.fetch = async () => new Response('nope', { status: 422 });
  assert.equal((await POST(req(good))).status, 502);
  globalThis.fetch = async () => { throw new Error('down'); };
  assert.equal((await POST(req(good))).status, 502);
});
