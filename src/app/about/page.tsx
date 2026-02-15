import Image from "next/image";
import { Award, ShieldCheck, Sparkles, ThumbsUp } from "lucide-react";
import { Button } from "@/components/Button";

const team = [
  { name: "Nick P.", role: "Founder & Lead Technician" },
  { name: "Marco D.", role: "Finish Carpenter" },
  { name: "Elena R.", role: "Project Coordinator" },
];

export default function AboutPage() {
  return (
    <>
      <section className="container section-pad">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">About Us</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">Built for homeowners who want quality without drama.</h1>
            <p className="mt-4 text-slate-600">North Peak Home Services started with one goal: bring contractor-grade workmanship to everyday home repairs and small remodeling jobs. We show up on time, protect your space, and communicate clearly from quote to final walkthrough.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <Image src="/projects/project-4.svg" alt="Team at project site" width={1200} height={800} className="rounded-xl" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container section-pad">
          <h2 className="text-3xl font-bold text-slate-900">Why choose us</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[{ icon: ShieldCheck, text: "Licensed, insured, and respectful crews" }, { icon: Sparkles, text: "Clean work zones and thoughtful prep" }, { icon: Award, text: "Warranty-backed craftsmanship" }, { icon: ThumbsUp, text: "No-pressure quotes and straight answers" }].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                  <span className="rounded-lg bg-amber-100 p-2 text-amber-700"><Icon size={18} /></span>
                  <p className="text-slate-700">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <h2 className="text-3xl font-bold text-slate-900">Meet the team</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {team.map((person, idx) => (
            <article key={person.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Image src={`/projects/project-${(idx % 3) + 1}.svg`} alt={person.name} width={600} height={400} className="h-44 w-full rounded-xl object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{person.name}</h3>
              <p className="text-sm text-slate-600">{person.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-bold text-slate-900">Credentials & badges</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <span className="rounded-full border border-slate-300 bg-white px-4 py-2">Licensed & Insured</span>
            <span className="rounded-full border border-slate-300 bg-white px-4 py-2">EPA Lead-Safe Aware</span>
            <span className="rounded-full border border-slate-300 bg-white px-4 py-2">Background-Checked Team</span>
            <span className="rounded-full border border-slate-300 bg-white px-4 py-2">Warranty-Backed Labor</span>
          </div>
          <div className="mt-6 rounded-xl bg-slate-900 p-6 text-white">
            <h3 className="text-2xl font-bold">Let’s make your home projects easier.</h3>
            <p className="mt-2 text-slate-300">Get fast scheduling options for Staten Island and South Brooklyn jobs.</p>
            <div className="mt-4 flex gap-3">
              <Button href="tel:+17185550199" variant="primary">Call Now</Button>
              <Button href="/contact" variant="ghost" className="border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700">Request Quote</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
