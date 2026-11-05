// Validates a service request from the website form and emails it to the owner through Resend.
const json = (body, status) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const clean = (value, max) => String(value ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

export async function handleContact(request, { key, to, from }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'The request could not be read.' }, 400);
  }
  if (!data || typeof data !== 'object') return json({ error: 'The request could not be read.' }, 400);

  // Bots fill the hidden field. Report success so they don't retry.
  if (clean(data.website, 200)) return json({ ok: true }, 200);

  const service = clean(data.service, 120);
  const name = clean(data.name, 120);
  const phone = clean(data.phone, 30);
  const email = clean(data.email, 200);
  const street = clean(data.street, 200);
  const city = clean(data.city, 120);
  const zip = clean(data.zip, 12);
  const page = clean(data.page, 200);
  const message = String(data.message ?? '').trim().slice(0, 4000);

  if (!name) return json({ error: 'Enter your name so we know who to ask for.' }, 400);
  if (phone.replace(/\D/g, '').length < 10) return json({ error: 'Enter a 10-digit phone number so we can reach you.' }, 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Enter a valid email address.' }, 400);
  if (!street || !city) return json({ error: 'Enter the street address and city where you need us.' }, 400);

  if (!key || !to || !from) {
    console.error('Contact form is not configured: missing email settings.');
    return json({ error: 'not_configured' }, 503);
  }

  const address = `${street}, ${city}, AL${zip ? ` ${zip}` : ''}`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New website request: ${service || 'Locksmith service'} in ${city} from ${name}`,
      text: [
        `Service: ${service || 'not given'}`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Address: ${address}`,
        `Sent from: ${page || 'website'}`,
        '',
        message || '(no message)',
      ].join('\n'),
    }),
  }).catch((err) => {
    console.error('Contact email request failed:', err);
    return null;
  });

  if (!res || !res.ok) {
    if (res) console.error('Resend rejected the contact email:', res.status, await res.text());
    return json({ error: 'send_failed' }, 502);
  }
  return json({ ok: true }, 200);
}
