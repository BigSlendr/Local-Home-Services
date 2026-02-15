import { CTAButton } from "./CTAButton";

export function FloatingMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-3 shadow-lg md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <CTAButton href="tel:+17185550199" variant="secondary" fullWidth>
          Call Now
        </CTAButton>
        <CTAButton href="/contact" fullWidth>
          Request Quote
        </CTAButton>
      </div>
    </div>
  );
}
