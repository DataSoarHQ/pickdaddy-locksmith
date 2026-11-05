import type { APIRoute } from 'astro';
import { business as b, faqs, hours, pricing, services, towns, townHref } from '../data/site';

// A plain-text summary of the business for AI assistants and text-only readers.
export const GET: APIRoute = () => {
  const body = `# ${b.name}

> Mobile locksmith ("${b.nickname}") serving North Alabama, from the Shoals to Huntsville. Home, business and automotive locksmithing. ${b.warrantyDays}-day service warranty. 10% discount for military and police.

## Contact

- Phone (call or text): ${b.phoneDisplay}
- Email: ${b.email}
- Hours: ${hours.map((h) => `${h.days} ${h.time}`).join('; ')}; emergencies 24/7
- Request service: ${b.url}/contact/

## Services

${services.map((s) => `- ${s.name}: ${s.text}`).join('\n')}

## Pricing

${pricing.map((g) => `### ${g.title}\n\n${g.items.map((p) => `- ${p.name}: ${p.from ? 'service call ' : ''}${p.price}${p.lines ? ` (${p.lines.filter((l) => l !== 'Service call').join('; ')})` : ''}`).join('\n')}`).join('\n\n')}

## Service areas

${towns.map((t) => `- [${t.name}, AL](${b.url}${townHref(t.slug)}), ${t.county} County`).join('\n')}

## Common questions

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
