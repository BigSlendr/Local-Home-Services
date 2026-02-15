import Link from "next/link";
import { CTAButton } from "./CTAButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="focus-ring text-lg font-bold text-brand-900">
          North Peak Home Services
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring text-slate-700 hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+17185550199" className="focus-ring hidden text-sm font-semibold text-brand-700 sm:block">
            Call: (718) 555-0199
          </a>
          <CTAButton href="/contact">Request a Quote</CTAButton>
        </div>
      </div>
    </header>
  );
}
