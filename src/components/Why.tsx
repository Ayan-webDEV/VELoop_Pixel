import { ShieldCheck, Smartphone, RefreshCw, Layers3 } from "lucide-react";
import { Section } from "./ui/Section";
export default function Why() {
  const items = [
    [
      Smartphone,
      "Customer-first",
      "We design around what guests need to do next.",
    ],
    [
      RefreshCw,
      "Easy to evolve",
      "Digital content can change without rebuilding the physical touchpoint.",
    ],
    [
      Layers3,
      "One connected system",
      "Menu, website, QR and engagement work together.",
    ],
    [
      ShieldCheck,
      "Clear and trustworthy",
      "Fast pages, transparent scope and practical recommendations.",
    ],
  ];
  return (
    <Section id="about" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <span className="eyebrow">Why VELoop Pixel</span>
          <h2 className="section-title mt-5">
            Premium doesn't have to mean complicated.
          </h2>
          <p className="section-copy">
            We combine product thinking, visual design and practical business
            goals into experiences restaurants can actually use.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(([I, t, c]) => {
            const Icon = I as typeof ShieldCheck;
            return (
              <div
                key={t as string}
                className="rounded-3xl border border-slate-200 p-6"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-black">{t as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {c as string}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
