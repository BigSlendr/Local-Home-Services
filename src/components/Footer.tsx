import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 pb-20 text-slate-200 md:pb-8">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-base font-semibold text-white">North Peak Home Services</h3>
          <p className="mt-3 text-sm">123 Placeholder Ave, Staten Island, NY 10301</p>
          <p className="mt-2 text-sm">Mon–Sat: 8:00 AM – 6:00 PM</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Service Area</h4>
          <p className="mt-3 text-sm">Staten Island + South Brooklyn</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Follow</h4>
          <div className="mt-3 flex gap-3 text-sm">
            <span className="rounded-full bg-slate-800 px-3 py-1">FB</span>
            <span className="rounded-full bg-slate-800 px-3 py-1">IG</span>
            <span className="rounded-full bg-slate-800 px-3 py-1">YT</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white">Need help this week?</h4>
          <a href="tel:+17185550199" className="mt-3 block text-sm text-accent">
            Call Now: (718) 555-0199
          </a>
          <Link href="/contact" className="mt-2 block text-sm text-accent">
            Request a Quote →
          </Link>
        </div>
      </div>
    </footer>
  );
}
