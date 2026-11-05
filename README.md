# Pick Daddy’s Mobile Locksmith website

Marketing site for Pick Daddy’s Mobile Locksmith LLC (“The Loc Doc”, North Alabama). Static [Astro](https://astro.build) site with one Vercel function for the service request form. It replaces the WordPress/Elementor site at pickdaddyslocksmith.com, keeps its page URLs and copy, and restyles it in our house style. The transfer brief is in `docs/Pick_Daddy_Locksmith_Website_Transfer.pdf`.

```sh
npm install
npm run dev     # local site
npm test        # contact form endpoint tests
npm run build   # output for Vercel
```

## Editing content

Everything lives in `src/data/site.ts`: phone, email, hours, nav, the six services, price lists, reasons, reviews, FAQ, form dropdown, ticker, stats and service areas. Photos are in `src/assets/img/` and referenced by file name.

Adding a town to `towns` creates `/service-areas/<slug>/` and adds it to the area lists, the “Do we cover your town?” checker, the footer, the sitemap and the schema.

## Pages

- `/`, `/about/`, `/contact/`, `/privacy-policy/`
- `/locksmith-services/` (same URL as before) with the price lists at `#pricing`, `#auto`, `#residential`, `#commercial`, and the FAQ at `#faq`
- `/service-areas/` and one page per town
- `/sitemap-index.xml` and `/llms.txt` are generated at build time
- `vercel.json` redirects the old site’s broken `/services/` link, `/wp-sitemap.xml` and the WordPress feeds

## Service request form

Every form posts to `src/pages/api/contact.ts`, which emails the request through [Resend](https://resend.com) with Reply-To set to the customer. The recipient is fixed in code to `pickdaddysllc@gmail.com` (`business.formTo` in `src/data/site.ts`), as the brief requires, and never appears in page HTML. A hidden honeypot field drops bot submissions.

Until both settings below exist, the form tells visitors their request wasn’t sent and asks them to call or text. Copy `.env.example` to `.env` for local use; add the same values in the Vercel project for production.

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `Pick Daddy’s Website <requests@pickdaddyslocksmith.com>` |

Google Analytics uses the original site’s property (`G-BGPBEV5C0B`), so history carries over.

## Launch

The site is canonical to `https://pickdaddyslocksmith.com`. Once GoDaddy access arrives, add the domain to the Vercel project and change only the web records (`A` for the root, `CNAME` for `www`). Leave `MX` and other email records alone: `help@pickdaddyslocksmith.com` depends on them. Then send a test request from the live domain and submit `/sitemap-index.xml` in Google Search Console.
