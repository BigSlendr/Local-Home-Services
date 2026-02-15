import { CTAButton } from "@/components/CTAButton";
import { FAQAccordion } from "@/components/FAQAccordion";

const details = [
  { title: "Handyman + Repair Visits", includes: ["Door and trim repairs", "Hardware installs", "Minor carpentry fixes"], timeline: "1 day", starting: "$249" },
  { title: "Drywall + Paint Prep", includes: ["Patch and skim coat", "Crack and seam repair", "Prime-ready finish"], timeline: "1-2 days", starting: "$399" },
  { title: "Interior Painting", includes: ["Walls and ceilings", "Trim and doors", "Clean masking and prep"], timeline: "2-4 days", starting: "$799" },
  { title: "Flooring Install", includes: ["LVP/Laminate install", "Baseboard reset", "Transition strip fitting"], timeline: "2-5 days", starting: "$1,499" },
  { title: "Minor Remodels", includes: ["Bathroom refreshes", "Accent wall builds", "Fixture upgrades"], timeline: "1-2 weeks", starting: "$2,900" },
  { title: "Mounting + Utility Services", includes: ["TV and shelf mounting", "Light plumbing fixture swap", "Light electrical fixture replacement"], timeline: "Same day", starting: "$179" },
];

const faqs = [
  { question: "Can I bundle services in one project?", answer: "Yes. Many clients combine drywall, painting, and mounting in one visit." },
  { question: "Do you provide itemized estimates?", answer: "Absolutely. You’ll receive a clear scope, timeline, and pricing breakdown." },
  { question: "What if I’m not sure which service I need?", answer: "Tell us your goal and we’ll recommend the right scope during estimate." },
  { question: "Do you work in occupied homes?", answer: "Yes, we protect surfaces and keep a clean workspace during active living." },
  { question: "Do you offer weekend appointments?", answer: "Limited weekend slots are available based on project type." },
];

export default function ServicesPage() {
  return (
    <div className="container section-pad">
      <section className="mb-12 rounded-2xl bg-brand-50 p-8">
        <h1 className="text-4xl font-bold text-brand-900">Services</h1>
        <p className="mt-3 max-w-2xl text-slate-700">Smart upgrades and reliable repairs for Staten Island + South Brooklyn homeowners. Built around clear timelines and strong communication.</p>
      </section>

      <section className="space-y-8">
        {details.map((service, idx) => (
          <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-600">Typical timeline: {service.timeline}</p>
            <p className="text-sm font-semibold text-brand-700">Starting at: {service.starting}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {(idx + 1) % 2 === 0 && (
              <div className="mt-6 rounded-lg bg-slate-100 p-4">
                <p className="text-sm font-medium">Need this service done soon?</p>
                <div className="mt-2 flex gap-3">
                  <CTAButton href="/contact">Request a Quote</CTAButton>
                  <CTAButton href="tel:+17185550199" variant="secondary">Call Now</CTAButton>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-3xl font-bold">Service FAQ</h2>
        <div className="mt-5"><FAQAccordion items={faqs} /></div>
      </section>
    </div>
  );
}
