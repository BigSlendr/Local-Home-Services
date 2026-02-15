import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { faqs, neighborhoods, services } from "@/data/content";

const testimonials = [
  { quote: "Repaired drywall and painted in one visit. Super professional.", name: "S. Romano", area: "Staten Island" },
  { quote: "Quick estimate, fair price, and flawless flooring install.", name: "K. Ahmed", area: "Bay Ridge" },
  { quote: "Mounted two TVs perfectly and cleaned up every bit of dust.", name: "M. Chen", area: "Sunset Park" },
];

export default function Home() {
  return (
    <>
      <section className="section-pad bg-gradient-to-b from-brand-50 to-slate-50">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Staten Island + South Brooklyn</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-brand-900 sm:text-5xl">Premium Home Repairs & Upgrades Without the Headache</h1>
            <p className="mt-4 text-lg text-slate-700">From quick fixes to full room refreshes, North Peak delivers clean workmanship and reliable communication.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="tel:+17185550199">Call Now</CTAButton>
              <CTAButton href="/contact" variant="secondary">Request a Quote</CTAButton>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-600">Licensed & Insured • Same-week availability</p>
          </div>
          <div className="h-80 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-500/40 p-6">
            <p className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700">Trusted by local homeowners</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <h2 className="text-2xl font-bold">⭐ 4.9/5 average rating from local clients</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{testimonials.map((item) => <TestimonialCard key={item.name} {...item} />)}</div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold">Services Built for Busy Homeowners</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["1) Request", "2) Estimate", "3) Done"].map((step) => (
              <div key={step} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{step}</h3>
                <p className="mt-2 text-sm text-slate-600">Simple updates, fast communication, and clear next steps at every stage.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Service Area</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
              {neighborhoods.map((n) => (
                <li key={n} className="rounded-lg bg-slate-100 px-3 py-2">{n}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-100 p-8 text-sm text-slate-600">Map placeholder (Staten Island + South Brooklyn coverage)</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <h2 className="text-3xl font-bold">Project Highlights</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="h-44 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300" />
                <p className="mt-2 text-xs font-semibold text-brand-700">Before/After</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-6"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      <section className="section-pad bg-brand-900 text-white">
        <div className="container flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold">Ready to cross home projects off your list?</h2>
            <p className="mt-2 text-white/80">Fast response. Detailed estimate. No pressure.</p>
          </div>
          <div className="flex gap-3">
            <CTAButton href="/contact">Request a Quote</CTAButton>
            <CTAButton href="tel:+17185550199" variant="secondary">Call Now</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
