import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "./ui/Section";
import { FAQS } from "../data/faqs";
export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-5">
            Clear answers before you start.
          </h2>
          <p className="section-copy">
            Still unsure? Send an inquiry and we’ll help you decide what
            actually makes sense.
          </p>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const on = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border ${on ? "border-blue-200 bg-blue-50/40" : "border-slate-200 bg-white"}`}
              >
                <button
                  className="flex w-full items-center justify-between gap-5 p-5 text-left"
                  onClick={() => setOpen(on ? -1 : i)}
                >
                  <span className="font-bold text-slate-900">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition ${on ? "rotate-180 text-blue-600" : "text-slate-400"}`}
                  />
                </button>
                {on && (
                  <div className="px-5 pb-5 text-sm leading-7 text-slate-500">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
