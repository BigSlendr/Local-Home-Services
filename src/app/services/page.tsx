import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-400">Services</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Handyman and light remodeling services that fit real NYC homes.</h1>
          <p className="mt-4 max-w-3xl text-slate-300">From quick repairs to multi-day improvement projects, we focus on clean workmanship, clear scope, and dependable timelines.</p>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading title="What we do" description="Each service includes straightforward communication and professional cleanup before we leave." />
        <div className="space-y-6">
          {services.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 text-slate-600">{service.description}</p>
              <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-slate-700 sm:grid-cols-2">
                {service.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-700"><span className="font-semibold">Typical timeline:</span> {service.timeline}</p>
                <Button href="/contact">Get Quote for {service.title}</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <h3 className="text-2xl font-bold text-slate-900">Service Area</h3>
          <p className="mt-3 text-slate-700">Primary coverage includes all Staten Island neighborhoods and South Brooklyn communities including Bay Ridge, Sunset Park, Bensonhurst, and surrounding ZIP codes.</p>
          <p className="mt-2 text-slate-700">Not sure if you’re in range? Call <a href="tel:+17185550199" className="font-semibold text-slate-900">(718) 555-0199</a> and we’ll confirm immediately.</p>
        </div>
      </section>
    </>
  );
}
