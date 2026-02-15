export const services = [
  { icon: "🛠️", title: "Handyman", description: "Punch lists, repairs, trim fixes, and those lingering to-dos." },
  { icon: "🧱", title: "Drywall", description: "Patch, skim coat, seamless texture blending, and wall restoration." },
  { icon: "🎨", title: "Painting", description: "Interior walls, ceilings, trim, and clean color refreshes." },
  { icon: "🪵", title: "Flooring", description: "Laminate and LVP installation, baseboards, and transitions." },
  { icon: "🏠", title: "Minor Remodels", description: "Bathroom refreshes, accent walls, and practical upgrades." },
  { icon: "📺", title: "Mounting & TV Install", description: "Secure TV mounting, cable concealment, and shelf installs." },
  { icon: "🚰", title: "Light Plumbing", description: "Fixture swaps, faucet replacement, and leak troubleshooting." },
  { icon: "💡", title: "Light Electrical", description: "Fan/light fixture replacement and outlet/switch updates." },
];

export const neighborhoods = [
  "St. George",
  "Great Kills",
  "Tottenville",
  "New Dorp",
  "Bay Ridge",
  "Dyker Heights",
  "Bensonhurst",
  "Sunset Park",
];

export const faqs = [
  {
    question: "How quickly can you start?",
    answer: "Most estimates happen within 1–2 business days, with same-week starts for many jobs.",
  },
  { question: "Are you licensed and insured?", answer: "Yes. We are fully licensed and insured for residential service work." },
  {
    question: "Do you provide materials?",
    answer: "We can supply common materials or work with materials you already selected.",
  },
  {
    question: "How are estimates handled?",
    answer: "Share your project details and photos, then we schedule an on-site quote for accuracy.",
  },
  {
    question: "What payment options are available?",
    answer: "We accept major payment methods and provide clear milestone billing on larger projects.",
  },
];

export const projects = [
  { id: 1, title: "Bay Ridge Condo Paint Refresh", category: "Painting", scope: "Two-bedroom repaint with trim updates.", timeframe: "3 days", testimonial: "Showed up on time and left everything spotless." },
  { id: 2, title: "Great Kills Drywall Repair", category: "Drywall", scope: "Ceiling leak patch and full-room skim coat.", timeframe: "2 days", testimonial: "The wall looks like the damage never happened." },
  { id: 3, title: "Sunset Park LVP Upgrade", category: "Flooring", scope: "Installed 900 sq ft of LVP and baseboards.", timeframe: "4 days", testimonial: "Fast, clean, and great attention to detail." },
  { id: 4, title: "Tottenville Guest Bath Refresh", category: "Remodel", scope: "Vanity swap, paint, and fixture upgrades.", timeframe: "1 week", testimonial: "Excellent communication from start to finish." },
  { id: 5, title: "Dyker Heights Media Wall", category: "Mounting", scope: "TV mount, cable concealment, and shelving.", timeframe: "1 day", testimonial: "It looks premium and feels secure." },
  { id: 6, title: "New Dorp Accent Wall + Paint", category: "Painting", scope: "Feature wall design and repaint for living room.", timeframe: "2 days", testimonial: "Helped us pick colors and nailed the result." },
] as const;
