export const studio = {
  name: 'LC Landscaping & Services',
  short: 'LC Landscaping',
  tagline: 'Lawns, hedges, gardens — sorted.',
  email: 'info@lclandscaping.com.au',
  phone: '',
  area: 'Belconnen · Gungahlin · Woden · Tuggeranong · Inner North · Inner South',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'How it works' },
  { href: '/portfolio', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Book a free quote' },
];

export const home = {
  hero: {
    eyebrow: 'Canberra landscaping & garden care',
    title: 'Lawns, hedges, gardens — sorted.',
    sub: 'Friendly, reliable garden care and landscaping across Canberra. Lawn mowing, hedge trimming, garden makeovers and ongoing maintenance — done properly, every time.',
  },
  intro:
    'We are Carter and Lucas — two Canberra locals who started LC Landscaping because we believe your garden deserves the same attention to detail as the inside of your home. We show up on time, do the job right, clean up after ourselves, and charge a fair price. No shortcuts, no surprises.',
  pullQuote:
    'A tidy garden is not a luxury — it is the baseline.',
  stats: [
    { value: '13', label: 'Five-star reviews' },
    { value: '100+', label: 'Gardens maintained' },
    { value: '4.8', label: 'Google rating' },
  ],
  testimonial: {
    quote:
      "It is marvellous how these young men employ so much professionalism and reliability within their work. A small business (with a bright future ahead of them) that I would gladly recommend to anyone!",
    author: 'Joey Minogue',
    project: 'Canberra — garden maintenance',
  },
};

export const coreServices = [
  { id: 'mowing', title: 'Lawn Mowing & Edging', body: 'Regular lawn mowing, whipper snipping, edging and blowing — leaving your lawn striped and sharp every visit.', icon: 'mowing' as const },
  { id: 'hedges', title: 'Hedge Trimming', body: 'Precision hedge trimming and shaping for all species — from formal box hedges to fast-growing photinia and lilly pilly.', icon: 'hedges' as const },
  { id: 'cleanup', title: 'Garden Cleanup', body: 'Full garden cleanups — weeding, pruning, green waste removal and mulching. We take overgrown spaces and make them presentable.', icon: 'cleanup' as const },
  { id: 'makeover', title: 'Garden Makeovers', body: 'New garden beds, planting, mulching, edging and feature areas — turning tired gardens into something you actually want to look at.', icon: 'makeover' as const },
  { id: 'planting', title: 'Planting & Mulching', body: 'Native and ornamental planting, seasonal colour, mulch top-ups and soil improvement — species chosen for Canberra conditions.', icon: 'planting' as const },
  { id: 'maintain', title: 'Ongoing Maintenance', body: 'Fortnightly or monthly visits — mow, edge, hedge, weed, prune. Consistent care so your garden never gets away from you.', icon: 'maintain' as const },
];

export type CoreServiceIcon = (typeof coreServices)[number]['icon'];

export const services = [
  { id: 'mowing', title: 'Lawn Mowing & Edging', body: 'We mow, edge, whipper snip and blow every visit. Whether it is a small courtyard or a half-acre block in Gungahlin, we leave the lawn looking sharp and clean. We adjust the cut height for the season and the grass type — buffalo, couch, kikuyu or cool-season rye. Canberra lawns need different care in summer heat versus winter frosts.', image: 'service_design' as const },
  { id: 'hedges', title: 'Hedge Trimming & Pruning', body: 'Hedges grow fast in Canberra. We trim them back to shape, clean up underneath, and haul the clippings. We handle photinia, lilly pilly, box, viburnum, murrayas and anything else you have growing along the fence line. Regular trimming keeps hedges dense and healthy — leave them too long and they go leggy.', image: 'service_hardscape' as const },
  { id: 'cleanup', title: 'Garden Cleanup & Waste Removal', body: 'Overgrown gardens, post-tenant cleanup, end-of-lease preparation or just a garden that got away from you over winter. We clear the weeds, prune back the growth, remove all green waste and leave it looking managed. We bring the trailer and take everything with us — you do not have to deal with the tip.', image: 'service_planting' as const },
  { id: 'makeover', title: 'Garden Makeovers', body: 'When the garden needs more than a tidy-up. We redesign garden beds, install new edging, add feature planting, lay mulch and create something that looks intentional. We work with what is already there where we can and start fresh where we need to. New builds, established homes, rental properties — we have done them all.', image: 'service_irrigation' as const },
  { id: 'planting', title: 'Planting & Mulching', body: 'We choose plants that actually work in Canberra — frost-tolerant natives, low-water ornamentals, and seasonal colour that handles the temperature swings. We prepare the soil, plant properly, mulch to retain moisture and suppress weeds, and give you a care guide so you know what to water and when. No point planting things that will not survive the first winter.', image: 'service_outdoor' as const },
  { id: 'maintain', title: 'Ongoing Maintenance', body: 'Most of our clients book us on a regular cycle — fortnightly or monthly. We mow, edge, hedge, weed, prune and keep everything tidy. You do not have to think about the garden or remember to book anyone. We just show up, do the work, send a photo of the finished job, and leave. Simple.', image: 'service_maintain' as const },
];

export const process = [
  { n: '01', title: 'Get in Touch', body: 'Fill out the form or send us a message. Tell us what you need — a one-off cleanup, regular mowing, hedge work, a full garden makeover. We reply within 24 hours.', image: 'process_visit' as const },
  { n: '02', title: 'Free Quote', body: 'We come to the property, look at what needs doing, and give you a price on the spot or within the day. No obligation, no call-out fee. The quote is the quote — no extras tacked on later.', image: 'process_design' as const },
  { n: '03', title: 'We Do the Work', body: 'We show up on the day, do the job properly, clean up after ourselves and take all the waste. We send you a photo of the finished job so you can see the result even if you are not home.', image: 'process_build' as const },
  { n: '04', title: 'Ongoing Care', body: 'If you want regular maintenance, we set up a schedule that works for you. Same crew, same standard, every visit. Your garden stays on top of itself, year-round.', image: 'process_handover' as const },
];

export const portfolio = [
  { id: 'belconnen', title: 'Full garden makeover', location: 'Belconnen, ACT', year: '2025', image: 'portfolio_1' as const },
  { id: 'gungahlin', title: 'Lawn & hedge maintenance', location: 'Gungahlin, ACT', year: '2025', image: 'portfolio_2' as const },
  { id: 'woden', title: 'Garden cleanup & mulching', location: 'Woden, ACT', year: '2024', image: 'portfolio_3' as const },
  { id: 'tuggeranong', title: 'Backyard transformation', location: 'Tuggeranong, ACT', year: '2025', image: 'portfolio_4' as const },
];

export const recentJobs = [
  { image: 'slider_1' as const, caption: 'Belconnen — garden bed install' },
  { image: 'slider_2' as const, caption: 'Gungahlin — hedge trimming' },
  { image: 'slider_3' as const, caption: 'Woden — native planting' },
  { image: 'slider_4' as const, caption: 'Braddon — courtyard cleanup' },
  { image: 'slider_5' as const, caption: 'Tuggeranong — lawn & edging' },
  { image: 'slider_6' as const, caption: 'Curtin — garden makeover' },
  { image: 'portfolio_1' as const, caption: 'Belconnen — full makeover' },
  { image: 'portfolio_2' as const, caption: 'Gungahlin — maintenance' },
];

export const beforeAfters = [
  { id: 'ba1', label: 'Belconnen — backyard garden transformation', before: 'ba1_before' as const, after: 'ba1_after' as const },
  { id: 'ba2', label: 'Gungahlin — hedge and lawn restoration', before: 'ba2_before' as const, after: 'ba2_after' as const },
  { id: 'ba3', label: 'Woden — front garden cleanup and mulching', before: 'ba3_before' as const, after: 'ba3_after' as const },
];

export const about = {
  lead: "LC Landscaping & Services is Carter and Lucas — two Canberra locals building a landscaping business the right way. We started because we noticed people in Canberra were paying good money for average work. We figured if we showed up on time, did the job properly, and charged a fair price, word would get around. It did.",
  body: [
    "We are university students who turned a weekend mowing gig into a proper business. Every job we take, we treat it like it is our own backyard. We are not trying to be the biggest landscaping company in Canberra — we are trying to be the one people actually recommend to their friends.",
    "We do lawn mowing, hedge trimming, garden cleanups, planting, mulching and full garden makeovers. We bring our own gear, haul the waste, and leave the place better than we found it. Most of our work comes from word of mouth — people who tried us once and came back. That is the best advertising there is.",
  ],
  pullQuote: 'Show up. Do it right. Let the work speak.',
  values: [
    { title: 'Reliable, every time', body: 'We show up when we say we will. If something changes, we call you first. No ghosting, no rescheduling the day before. Your time matters as much as ours.' },
    { title: 'Fair pricing, no games', body: 'The quote is the price. We do not lowball to win the job and then add extras. If something comes up on site, we talk to you before we charge for it.' },
    { title: 'Quality over speed', body: 'We could rush through three extra jobs a day if we cut corners. We do not. We would rather do fewer jobs properly than more jobs badly. That is how you build a reputation.' },
  ],
};

export const contact = {
  title: 'Book a free quote',
  lead: "Tell us about the property and what you need done. We reply within 24 hours. If the job is outside our scope, we will tell you upfront and point you to someone who can help.",
};

// Google reviews — 5 stars first
export const googleReviews = [
  { name: 'Ben Sherrard', stars: 5, text: 'Was told about LC from a friend. I called and booked my lawn and garden to be attended to. They were very friendly and gave a fair price. Safe to say I will be a returning customer. Do recommend!', initial: 'B' },
  { name: 'Joey Minogue', stars: 5, text: 'It is marvellous how these young men employ so much professionalism and reliability within their work. A small business (with a bright future ahead of them) that I would gladly recommend to anyone!', initial: 'J' },
  { name: 'Xavier Boucher', stars: 5, text: 'Great service boys trimmed the hedge very well.', initial: 'X' },
  { name: 'Henry Jackson', stars: 5, text: 'Had them come by to sort out some lawns and hedging work, where they did a fantastic job. Heard about them from some friends of mine who said similar things. Great job boys see you next week.', initial: 'H' },
  { name: 'Joshua Poulson', stars: 5, text: 'Amazing blokes that do an amazing Job. Both very polite and great with communication. Their attention to detail was superb and they really showed excellence in their work.', initial: 'J' },
  { name: 'Ali', stars: 5, text: 'Quick, effective, and efficient. Did a great job and all around friendly blokes as well. Will definitely be using them again.', initial: 'A' },
  { name: 'Hugh Taylor', stars: 5, text: 'Incredibly friendly with great service and attention to detail, did a wonderful job on my garden and will definitely be using these guys long term.', initial: 'H' },
  { name: 'dane danedane', stars: 5, text: 'Perfect hedge trimming and pruning, great service from Carter and Lucas.', initial: 'D' },
  { name: 'Pineappledwb', stars: 5, text: 'Good service, good price.', initial: 'P' },
  { name: 'Laurent Asciak', stars: 5, text: 'Lucas and Carter did an amazing job mowing our front and back lawns. They were very friendly, competent and professional. Would highly recommend.', initial: 'L' },
  { name: 'Adi Tuer', stars: 4, text: "Very good job with my bush at my parents place. 4 stars. Can't wait to see you boys back next Thursday.", initial: 'A' },
  { name: 'Kit', stars: 4, text: 'Had these university boys do the whole front. Took a few hours but overall good job! Always nice to see some nice young lads out working and building a business.', initial: 'K' },
  { name: 'Harvey Dempster', stars: 4, text: 'Lovely blokes and did an amazing job on my backyard. Very quick and efficient. Will definitely be calling them back next time.', initial: 'H' },
];
