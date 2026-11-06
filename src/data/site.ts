// Business facts and page copy used across the site. Change them here and every page follows.
// Copy is carried over from the original pickdaddyslocksmith.com unless noted.

export const business = {
  name: 'Pick Daddy’s Mobile Locksmith',
  shortName: 'Pick Daddy’s',
  legalName: 'Pick Daddy’s Mobile Locksmith LLC',
  nickname: 'The Loc Doc',
  url: 'https://pickdaddyslocksmith.com',
  phoneDisplay: '(256) 905-5255',
  phoneHref: 'tel:+12569055255',
  smsHref: 'sms:+12569055255',
  phoneSchema: '+1-256-905-5255',
  // Shown on the site for customers to write to.
  email: 'help@pickdaddyslocksmith.com',
  // Website form requests are delivered here and nowhere else (from the transfer brief).
  formTo: 'pickdaddysllc@gmail.com',
  region: 'North Alabama',
  warrantyDays: 60,
  facebook: 'https://www.facebook.com/people/Pick-Daddys-Mobile-Locksmith/100083030161115/',
  instagram: 'https://www.instagram.com/pickdaddyslocksmith/',
  // Google Analytics property already used by the original site.
  gaId: 'G-BGPBEV5C0B',
};

// Regular hours from the original contact block. Emergency calls are taken around the clock.
export const hours = [
  { days: 'Monday – Saturday', time: '8:00 AM – 6:00 PM', schema: { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '18:00' } },
  { days: 'Sunday', time: '12:00 PM – 8:00 PM', schema: { dayOfWeek: ['Sunday'], opens: '12:00', closes: '20:00' } },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/locksmith-services/' },
  { label: 'Pricing', href: '/locksmith-services/#pricing' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'Contact', href: '/contact/' },
];

// The six services from the original Services page. `anchor` points at the matching price list.
export const services = [
  { name: 'Car Door Unlocking', img: 'car-door', alt: 'Locksmith picking a white car door lock', anchor: '#auto', text: 'Locked out of your car or truck? Stuck in the parking lot at work? We can get you back on the road in no time!' },
  { name: 'Automotive Key Cutting & Programming', img: 'key-cutter', alt: 'Key cutting machine cutting a car key', anchor: '#auto', text: 'Need a new key for your vehicle? Need your electronic key reprogrammed? We can reprogram key fobs, transponder keys, or chip keys.' },
  { name: 'Residential Re-Keys', img: 'lock-pins', alt: 'Tray of colored lock pins used for rekeying', anchor: '#residential', text: 'Need a new key for your front or back door? Give us a call today!' },
  { name: 'Commercial Building Re-Keys', img: 'business-door', alt: 'Locksmith working on a business door lock', anchor: '#commercial', text: 'Need a new key for your business or office? Just purchased a new office building and need new keys? We do that too. Call us today!' },
  { name: 'Doorknob & Deadbolt Installs', img: 'deadbolt-install', alt: 'Locksmith installing a deadbolt on a front door', anchor: '#residential', text: 'Purchased a new home? Need to replace a broken doorknob? Call us when you need new door hardware installed.' },
  { name: 'Emergency Gas & Diesel Delivery', img: '', alt: '', anchor: '', text: 'Stranded and need gas or diesel to get you back on the road? We’ll bring it to you! Call us and we’ll be on our way!' },
];

// Short list used by the home page checklist.
export const quickServices = [
  'Car Door Unlocking',
  'Automotive Key Cutting',
  'Car Key Chip Programming',
  'Residential Re-keys',
  'Commercial Re-keys',
  'Doorknob & Deadbolt Installation',
];

// Scrolling ticker under the home hero.
export const ticker = [
  { label: 'Locked out? Call or text', href: business.phoneHref },
  { label: 'Car keys cut & programmed', href: '/locksmith-services/#auto' },
  { label: 'Key fobs & push to start', href: '/locksmith-services/#auto' },
  { label: 'Home & business rekeys', href: '/locksmith-services/#residential' },
  { label: 'Knob & deadbolt installs', href: '/locksmith-services/#residential' },
  { label: '$10 off for military & police', href: '/locksmith-services/#faq' },
  { label: `${business.warrantyDays}-day service warranty`, href: '/about/' },
];

// Stats bar. Digits spin on key-pin reels.
export const stats = [
  { value: '60', label: 'Day service warranty' },
  { value: '7', label: 'Days a week, emergencies 24/7' },
  { value: '$10', label: 'Off for military & police' },
  { value: '$65', label: 'Car door unlocking' },
];

// Price lists from the original Services page (#pricing).
export type Price = { name: string; price: string; from?: boolean; lines?: string[] };
export const pricing: { id: string; title: string; items: Price[] }[] = [
  {
    id: 'auto',
    title: 'Automotive',
    items: [
      { name: 'Car Door Unlocking', price: '$65' },
      { name: 'Key Cutting & Programming', price: '$100', lines: ['Mechanical keys'] },
      { name: 'Basic Transponder & Chip Keys', price: '$150' },
      { name: 'Remote Head Key', price: '$200', lines: ['Key with buttons'] },
      { name: 'Push To Start / Key Fob', price: '$250' },
      { name: 'Ignition Replacement / Rebuild', price: '$225 – $350' },
      { name: 'Door / Lock Rebuild', price: '$175 – $350' },
    ],
  },
  {
    id: 'residential',
    title: 'Residential',
    items: [
      { name: 'Residential Rekeying', price: '$69', from: true, lines: ['Service call', 'Plus $10 per key hole', 'Each job comes with 4 new keys', 'Each additional key $5'] },
      { name: 'New Knob & Deadbolt Installation', price: '$69', from: true, lines: ['Service call', 'Plus $75 for parts'] },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial',
    items: [
      { name: 'Commercial Service Call', price: '$75', from: true, lines: ['Service call', '$50 per hour plus parts'] },
      { name: 'Commercial Rekey', price: '$75', from: true, lines: ['Service call', 'Plus $15 per key hole'] },
    ],
  },
];

// Why Choose Us, from the original home page.
export const reasons = [
  { title: 'Satisfaction Guarantee', text: `You can count on us at Pick Daddy’s to get the job done right. No matter the service you need, our work is backed by our ${business.warrantyDays}-day service warranty.` },
  { title: 'Fast, Fair, & Friendly Service', text: 'We offer competitive pricing on all of our locksmith services while providing fast and friendly communication en route to your location.' },
  { title: 'Convenient Availability', text: 'At Pick Daddy’s we know life can happen anytime and anywhere. That’s why we’re available when you need us, 7 days a week, with emergency service around the clock.' },
];

// Testimonials from the original site. `town` matches a service area slug.
export const reviews = [
  { name: 'Rosa M.', place: 'Florence, AL', town: 'florence-al', text: 'Satisfied with the price and the service and the maintenance man was very accommodating and patient he did what he had to do to make sure it was fixed properly I appreciate them and I highly recommend them' },
  { name: 'Daniel D.', place: 'Tanner, AL', town: 'tanner-al', text: 'Exceptional service & excellent prices! Jonathan is a man that does what he promises to do. He is the locksmith that I will use from now on & I recommend him to everyone else.' },
  { name: 'Raven S.', place: 'Decatur, AL', town: 'decatur-al', text: 'Very professional and helpful. Went above and beyond to ensure my issue was taken care of.' },
  { name: 'Zachary S.', place: 'Madison, AL', town: 'madison-al', text: 'The guy was very friendly and had me back driving again within 20 minutes. I would recommend them to everyone I know.' },
  { name: 'Ben M.', place: 'Mount Hope, AL', town: 'mount-hope-al', text: 'Jon was excellent to work with. He came out after hours as soon as our project was complete to make sure we had everything we needed. We value excellence and he did an excellent job! We would definitely recommend Jon!' },
];

// FAQ from the original Services page.
export const faqs = [
  { q: 'Do you make car and house keys even if I’ve lost all of them?', a: 'Yes! We can make car or house keys if you’ve lost your current keys.' },
  { q: 'Do you cut and program keys?', a: 'Yes, we can cut and program whatever keys you need!' },
  { q: 'Do you program key fobs and push to start keys?', a: 'Yes, we can program those too!' },
  { q: 'Do you give discounts to military & police officers?', a: 'Yes, we’re glad to give a $10 discount to our military and police officers!' },
  { q: 'Can you get me in my house if I’m locked out?', a: 'Yes! Give us a call if you’re locked out of your home. We can help you get back in fast!' },
  { q: 'Do you remove high security puck locks?', a: 'Yes, we can remove high security puck locks.' },
];

// Options for the form's service dropdown (the original form's four, plus "Other").
export const formServices = ['Emergency Service', 'Automotive Key Make Service', 'Rekey Service', 'Installation Service', 'Other'];

// Service areas. The original site names Decatur, Florence, Madison, Huntsville and "The Shoals",
// and its reviews come from Tanner and Mount Hope. Adding an entry creates /service-areas/<slug>/,
// and adds the town to the area lists, the town checker, the sitemap and the schema.
export const towns = [
  { slug: 'huntsville-al', name: 'Huntsville', county: 'Madison', near: ['madison-al', 'decatur-al', 'tanner-al'] },
  { slug: 'madison-al', name: 'Madison', county: 'Madison', near: ['huntsville-al', 'tanner-al', 'decatur-al'] },
  { slug: 'decatur-al', name: 'Decatur', county: 'Morgan', near: ['tanner-al', 'madison-al', 'mount-hope-al'] },
  { slug: 'tanner-al', name: 'Tanner', county: 'Limestone', near: ['decatur-al', 'madison-al', 'huntsville-al'] },
  { slug: 'mount-hope-al', name: 'Mount Hope', county: 'Lawrence', near: ['decatur-al', 'tuscumbia-al', 'muscle-shoals-al'] },
  { slug: 'florence-al', name: 'Florence', county: 'Lauderdale', near: ['muscle-shoals-al', 'sheffield-al', 'tuscumbia-al'] },
  { slug: 'muscle-shoals-al', name: 'Muscle Shoals', county: 'Colbert', near: ['florence-al', 'sheffield-al', 'tuscumbia-al'] },
  { slug: 'sheffield-al', name: 'Sheffield', county: 'Colbert', near: ['florence-al', 'muscle-shoals-al', 'tuscumbia-al'] },
  { slug: 'tuscumbia-al', name: 'Tuscumbia', county: 'Colbert', near: ['sheffield-al', 'muscle-shoals-al', 'florence-al'] },
];
export type Town = (typeof towns)[number];
export const townHref = (slug: string) => `/service-areas/${slug}/`;
export const townBySlug = (slug: string) => towns.find((t) => t.slug === slug)!;
