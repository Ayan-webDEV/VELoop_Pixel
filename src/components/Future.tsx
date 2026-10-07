import { Sparkles, Plus, ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
export default function Future() {
  return (
    <Section>
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <span className="eyebrow">
              <Sparkles size={13} /> Built for what comes next
            </span>
            <h2 className="section-title mt-5">
              Start with a menu. Grow into a digital customer system.
            </h2>
            <p className="section-copy">
              Your first project shouldn't lock you into a complicated stack. We
              can keep extending the experience as your restaurant grows.
            </p>
            <a href="#inquiry" className="btn-primary mt-7">
              Plan the next step <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="relative min-h-64">
            <div className="absolute left-1/2 top-1/2 grid w-56 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-slate-950 p-6 text-center text-white shadow-xl">
              <p className="text-xs font-bold text-blue-300">NOW</p>
              <p className="mt-2 font-black">Digital Menu</p>
            </div>
            {[
              ["Website", 0, 20],
              ["Loyalty", 65, 5],
              ["Ordering", 20, 68],
              ["Analytics", 72, 60],
            ].map(([label, x, y]) => (
              <div
                key={label as string}
                className="absolute rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold shadow-sm"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {label as string}
                <Plus
                  size={12}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 text-blue-400"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
