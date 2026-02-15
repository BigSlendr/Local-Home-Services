"use client";

import { useState } from "react";

type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-lg border border-slate-200 bg-white">
            <button
              className="focus-ring flex w-full items-center justify-between px-5 py-4 text-left font-semibold"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span aria-hidden>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="px-5 pb-4 text-sm text-slate-600">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
