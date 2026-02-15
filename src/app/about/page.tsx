import { CTAButton } from "@/components/CTAButton";

const team = [
  { name: "Alex Torres", role: "Founder & Lead Technician" },
  { name: "Maya Patel", role: "Project Coordinator" },
  { name: "Jordan Kim", role: "Finish Specialist" },
];

export default function AboutPage() {
  return (
    <div className="container section-pad space-y-12">
      <section>
        <h1 className="text-4xl font-bold">About North Peak</h1>
        <p className="mt-4 max-w-3xl text-slate-700">We started North Peak Home Services to give local homeowners a better option: quality workmanship, transparent communication, and respectful crews who treat your home like their own.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">Why choose us</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Clear scopes and realistic timelines</li>
            <li>Friendly, professional technicians</li>
            <li>Clean work areas and respectful service</li>
            <li>Reliable follow-through from quote to completion</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">Credentials</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-slate-100 px-3 py-1">Licensed</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Insured</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Background-checked team</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold">Meet the Team</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="h-24 w-24 rounded-full bg-slate-200" />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-brand-900 p-8 text-white">
        <h2 className="text-3xl font-bold">Let’s plan your next home project</h2>
        <div className="mt-4 flex gap-3">
          <CTAButton href="/contact">Request a Quote</CTAButton>
          <CTAButton href="tel:+17185550199" variant="secondary">Call Now</CTAButton>
        </div>
      </section>
    </div>
  );
}
