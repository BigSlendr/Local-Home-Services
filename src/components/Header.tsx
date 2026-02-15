import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="text-base font-bold text-slate-900 sm:text-lg">North Peak Home Services</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a href="tel:+17185550199" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-amber-700">
            <PhoneCall size={16} /> (718) 555-0199
          </a>
          <Button href="/contact">Request a Quote</Button>
        </div>
      </div>
    </header>
  );
}
