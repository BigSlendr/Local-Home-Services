"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/lib/data";
import { cn } from "@/lib/cn";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900 focus-ring"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              {item.question}
              <ChevronDown className={cn("shrink-0 transition", open && "rotate-180")} size={18} />
            </button>
            {open ? <p className="px-5 pb-5 text-sm text-slate-600">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
