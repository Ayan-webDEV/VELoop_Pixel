import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Section } from "./ui/Section";
import { PACKAGES } from "../data/packages";
export default function Packages() {
  return (
    <Section id="packages" className="bg-white">
      <div className="text-center">
        <span className="eyebrow">Simple starting points</span>
        <h2 className="section-title mt-5">
          Choose a starting point. We’ll tailor the rest.
        </h2>
        <p className="section-copy mx-auto">
          No bloated plans. Start with what your restaurant actually needs.
        </p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {PACKAGES.map((p) => (
          <article
            key={p.id}
            className={`relative rounded-[28px] border p-6 ${p.badge ? "border-blue-200 bg-blue-50/50 shadow-[0_25px_70px_-40px_rgba(37,99,235,.45)]" : "border-slate-200 bg-white"}`}
          >
            {p.badge && (
              <div className="absolute right-5 top-5 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-black text-white">
                {p.badge}
              </div>
            )}
            <div className="grid size-11 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <Sparkles size={18} />
            </div>
            <h3 className="mt-6 text-xl font-black">{p.name}</h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
              {p.subtitle}
            </p>
            <div className="mt-5 text-2xl font-black text-slate-950">
              {p.price}
            </div>
            <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-slate-600">
                  <Check
                    size={17}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#inquiry"
              className={`${p.badge ? "btn-primary" : "btn-ghost"} mt-7 w-full`}
            >
              {p.cta}
              <ArrowRight size={15} />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
