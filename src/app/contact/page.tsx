import { Clock3, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="container section-pad">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-700">Contact</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">Request a quote</h1>
        <p className="mt-4 text-slate-600">Tell us what you need and we’ll follow up quickly with pricing and next steps.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-5 text-sm text-slate-700">
            <p className="flex items-center gap-2"><PhoneCall size={16} className="text-amber-700" /> <a href="tel:+17185550199" className="font-semibold">(718) 555-0199</a></p>
            <p className="flex items-center gap-2"><Clock3 size={16} className="text-amber-700" /> Mon–Sat, 8:00 AM – 6:30 PM</p>
            <p className="flex items-center gap-2"><MapPin size={16} className="text-amber-700" /> Staten Island + South Brooklyn</p>
          </div>
          <div className="mt-8 rounded-xl bg-slate-50 p-4">
            <h2 className="font-semibold text-slate-900">What to expect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Quick review of your request and photos</li>
              <li>Transparent quote with timeline options</li>
              <li>Confirmed appointment and clean on-site execution</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
