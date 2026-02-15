import Image from "next/image";
import { Button } from "@/components/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { faqs, projects, services, testimonials, trustItems } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-amber-50/70 to-slate-100">
        <div className="container grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">Serving Staten Island + South Brooklyn</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Fast, clean, professional home repairs—done right.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">North Peak Home Services handles handyman work and light remodeling with clear communication, fair pricing, and clean job sites.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="tel:+17185550199" variant="secondary">Call Now</Button>
              <Button href="/contact">Request a Quote</Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-300/40">
            <Image src="/projects/project-1.svg" alt="Handyman team at work" width={1200} height={900} className="h-auto w-full rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="rounded-lg bg-amber-100 p-2 text-amber-700"><Icon size={18} /></span>
                <p className="text-sm font-semibold text-slate-700">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading eyebrow="Core Services" title="Reliable help for the jobs that keep piling up" description="From drywall patches to fixture swaps, we bring pro-level finish work without the big-contractor hassle." centered />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </section>

      <section className="bg-white">
        <div className="container section-pad">
          <SectionHeading eyebrow="How It Works" title="Simple process, zero runaround" centered />
          <div className="grid gap-4 md:grid-cols-3">
            {["Tell us the job", "Get clear pricing", "We complete it cleanly"].map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-amber-700">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{step}</h3>
                <p className="mt-2 text-sm text-slate-600">{index === 0 ? "Share photos and your ZIP code." : index === 1 ? "We send options with timeline and scope." : "Our crew arrives on time and leaves the space tidy."}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading eyebrow="Featured Projects" title="Recent work across Staten Island + South Brooklyn" centered />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <div key={project.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image src={project.image} alt={project.title} width={800} height={500} className="h-36 w-full object-cover" />
              <p className="p-3 text-sm text-slate-700">{project.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="container section-pad">
          <SectionHeading eyebrow="Reviews" title="Trusted by local homeowners" centered />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading eyebrow="FAQ" title="Common questions" centered />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-12">
          <h2 className="text-3xl font-bold">Need it fixed this week?</h2>
          <p className="mt-3 max-w-2xl text-slate-300">Call now or send a quick request. We’ll follow up with a clear quote and schedule window.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="tel:+17185550199" variant="primary">Call (718) 555-0199</Button>
            <Button href="/contact" variant="ghost" className="border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700">Request a Quote</Button>
          </div>
        </div>
      </section>
    </>
  );
}
