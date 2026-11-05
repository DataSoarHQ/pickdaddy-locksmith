import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { handleContact } from '../../lib/contact.js';
import { business } from '../../data/site';

export const prerender = false;

// The recipient is fixed in code so every form delivers to the owner's inbox only.
export const POST: APIRoute = ({ request }) =>
  handleContact(request, {
    key: getSecret('RESEND_API_KEY'),
    to: business.formTo,
    from: getSecret('CONTACT_FROM_EMAIL'),
  });
