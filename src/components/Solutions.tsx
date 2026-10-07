import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Section } from "./ui/Section";
import { SOLUTIONS, type Solution } from "../data/solutions";
export default function Solutions() {
  const [active, setActive] = useState<Solution | null>(null);
  return (
    <Section id="solutions">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">Digital system</span>
          <h2 className="section-title mt-5">
            Everything your customer needs. In one experience.
          </h2>
          <p className="section-copy">
            Pick what you need today. Add more when your business is ready.
          </p>
        </div>
        <a href="#packages" className="btn-ghost shrink-0">
          View packages <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SOLUTIONS.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              className="card group p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_-35px_rgba(37,99,235,.35)]"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-black text-slate-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                Explore <ArrowUpRight size={13} />
              </span>
            </button>
          );
        })}
      </div>
      {active && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/30 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                  <active.icon />
                </span>
                <h3 className="mt-5 text-2xl font-black text-slate-950">
                  {active.title}
                </h3>
              </div>
              <button
                onClick={() => setActive(null)}
                className="grid size-9 place-items-center rounded-xl bg-slate-100"
              >
                <X size={17} />
              </button>
            </div>
            <p className="mt-4 leading-7 text-slate-500">{active.long}</p>
            <a
              href="#inquiry"
              onClick={() => setActive(null)}
              className="btn-primary mt-7"
            >
              Discuss this solution <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}
