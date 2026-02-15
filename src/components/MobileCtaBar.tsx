import { PhoneCall, FileText } from "lucide-react";
import Link from "next/link";

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-300 bg-white p-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] sm:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <Link href="tel:+17185550199" className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white focus-ring">
          <span className="inline-flex items-center gap-2"><PhoneCall size={16} /> Call Now</span>
        </Link>
        <Link href="/contact" className="flex-1 rounded-xl bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-slate-900 focus-ring">
          <span className="inline-flex items-center gap-2"><FileText size={16} /> Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
