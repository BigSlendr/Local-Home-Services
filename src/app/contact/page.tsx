import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container section-pad">
      <h1 className="text-4xl font-bold">Request a Quote</h1>
      <p className="mt-3 max-w-2xl text-slate-700">Tell us what you need and we’ll follow up with a no-obligation estimate.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold">Contact details</h2>
          <p className="mt-3 text-sm"><span className="font-semibold">Phone:</span> <a href="tel:+17185550199" className="text-brand-700">(718) 555-0199</a></p>
          <p className="mt-2 text-sm"><span className="font-semibold">Hours:</span> Mon–Sat, 8:00 AM – 6:00 PM</p>
          <p className="mt-2 text-sm"><span className="font-semibold">Service area:</span> Staten Island + South Brooklyn</p>
          <div className="mt-6 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
            <p className="font-semibold">What to expect next</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Fast confirmation call/text</li>
              <li>Scope review and estimate window</li>
              <li>Simple scheduling process</li>
            </ul>
          </div>
        </section>

        <ContactForm />
      </div>
    </div>
  );
}
