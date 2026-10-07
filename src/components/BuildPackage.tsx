import { useState } from "react";
import { Check, ArrowRight, RotateCcw } from "lucide-react";
import { Section } from "./ui/Section";
const options = [
  ["menu", "Digital Menu", 1200],
  ["qr", "QR Displays", 900],
  ["website", "Restaurant Website", 3500],
  ["offers", "Offers & Promotions", 800],
  ["loyalty", "Loyalty / Rewards", 1800],
  ["ordering", "Online Ordering", 3000],
  ["analytics", "Analytics", 1500],
] as const;
export default function BuildPackage() {
  const [selected, setSelected] = useState<string[]>(["menu", "qr"]);
  const toggle = (id: string) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );
  const total = selected.reduce(
    (sum, id) => sum + (options.find((x) => x[0] === id)?.[2] || 0),
    0,
  );
  return (
    <Section id="builder">
      <div className="rounded-[32px] border border-blue-100 bg-blue-50/60 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="eyebrow">Build your own</span>
            <h2 className="section-title mt-5">Start with what you need.</h2>
            <p className="section-copy">
              Select the pieces that matter. We’ll turn them into a coherent
              project scope.
            </p>
            <button
              onClick={() => setSelected(["menu", "qr"])}
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-slate-500"
            >
              <RotateCcw size={14} /> Reset
            </button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              {options.map(([id, label, price]) => {
                const on = selected.includes(id);
                return (
                  <button
                    key={id}
                    onClick={() => toggle(id)}
                    className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${on ? "border-blue-200 bg-blue-50" : "border-slate-200 hover:border-slate-300"}`}
                  >
                    <span
                      className={`grid size-8 place-items-center rounded-lg ${on ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}
                    >
                      <Check size={15} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-slate-900">
                        {label}
                      </span>
                      <span className="block text-xs text-slate-400">
                        from ₹{price.toLocaleString("en-IN")}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-5 rounded-2xl bg-slate-950 p-5 text-white">
              <div>
                <p className="text-xs text-slate-400">
                  Directional starting estimate
                </p>
                <p className="mt-1 text-3xl font-black">
                  ₹{total.toLocaleString("en-IN")}
                </p>
              </div>
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950"
              >
                Discuss my package <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
