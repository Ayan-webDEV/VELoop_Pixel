import { ArrowRight, Check, X } from "lucide-react";
import { Section } from "./ui/Section";
export default function Problem() {
  const bad = [
    "Printed menus go out of date",
    "Customers cannot find key information",
    "QR codes feel like an afterthought",
    "Offers and loyalty live somewhere else",
  ];
  const good = [
    "One clear digital entry point",
    "Fast mobile-first experience",
    "Branded physical touchpoints",
    "A journey built around action",
  ];
  return (
    <Section id="problem" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
        <div>
          <span className="eyebrow">The gap</span>
          <h2 className="section-title mt-5">
            Your customers are already digital. Your restaurant should be too.
          </h2>
          <p className="section-copy">
            The goal isn't to add more technology. It's to remove friction
            between curiosity and action.
          </p>
          <a href="#solutions" className="btn-ghost mt-7">
            See the solution <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [X, "The old way", bad, "border-rose-100 bg-rose-50/40"],
            [
              Check,
              "The VELoop way",
              good,
              "border-emerald-100 bg-emerald-50/50",
            ],
          ].map(([Icon, title, items, style]) => {
            const I = Icon as typeof Check;
            return (
              <div
                key={title as string}
                className={`rounded-3xl border p-6 ${style as string}`}
              >
                <div className="flex items-center gap-3">
                  <I size={19} />
                  <h3 className="font-black text-slate-950">
                    {title as string}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {(items as string[]).map((x) => (
                    <li key={x} className="flex gap-3 text-sm text-slate-600">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-current" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
