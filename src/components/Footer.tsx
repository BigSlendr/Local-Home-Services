import { Button } from "@/components/Button";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="container grid gap-10 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">North Peak Home Services</p>
          <p className="mt-2 text-sm text-slate-400">Fast, clean, professional home repairs—done right.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Service Area</p>
          <p className="mt-2 text-sm text-slate-400">Staten Island + South Brooklyn</p>
          <p className="mt-4 font-semibold text-white">Hours</p>
          <p className="mt-2 text-sm text-slate-400">Mon–Sat, 8:00 AM – 6:30 PM</p>
        </div>
        <div>
          <p className="font-semibold text-white">Ready to book?</p>
          <p className="mt-2 text-sm text-slate-400">Call now for same-week availability and clear pricing.</p>
          <div className="mt-4 flex gap-3">
            <Button href="tel:+17185550199" variant="primary" className="px-4 py-2">Call Now</Button>
            <Button href="/contact" variant="ghost" className="border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700">Get Quote</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
