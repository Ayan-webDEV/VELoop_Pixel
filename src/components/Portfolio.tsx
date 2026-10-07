import { ArrowUpRight, ScanQrCode, Globe2, BarChart3 } from "lucide-react";
import { Section } from "./ui/Section";
const work = [
  [
    "Restaurant Launch System",
    "QR menu + counter display + digital landing page",
    ScanQrCode,
    "blue",
  ],
  [
    "Modern Restaurant Website",
    "Brand-led website with menu discovery and conversion paths",
    Globe2,
    "violet",
  ],
  [
    "Engagement Dashboard",
    "Offers, repeat behaviour and customer touchpoints",
    BarChart3,
    "emerald",
  ],
];
export default function Portfolio() {
  return (
    <Section id="portfolio" className="bg-white">
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="eyebrow">Selected directions</span>
          <h2 className="section-title mt-5">
            Built to look good in a pitch deck and work in real life.
          </h2>
        </div>
        <a href="#inquiry" className="btn-ghost hidden sm:inline-flex">
          Start yours <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {work.map(([title, copy, I, color]) => {
          const Icon = I as typeof Globe2;
          const bg =
            color === "blue"
              ? "bg-blue-50"
              : color === "violet"
                ? "bg-violet-50"
                : "bg-emerald-50";
          const tx =
            color === "blue"
              ? "text-blue-700"
              : color === "violet"
                ? "text-violet-700"
                : "text-emerald-700";
          return (
            <article
              key={title as string}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white"
            >
              <div className={`aspect-[1.15] ${bg} p-7`}>
                <div className="flex items-center justify-between">
                  <span
                    className={`grid size-11 place-items-center rounded-2xl bg-white ${tx}`}
                  >
                    <Icon />
                  </span>
                  <ArrowUpRight className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <div className="mt-10 rounded-2xl bg-white p-5 shadow-[0_20px_50px_-35px_rgba(15,23,42,.3)]">
                  <div className="h-2 w-24 rounded-full bg-slate-200" />
                  <div className="mt-3 h-3 w-full rounded-full bg-slate-100" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((x) => (
                      <div key={x} className="h-16 rounded-xl bg-slate-50" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-black">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {copy as string}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
