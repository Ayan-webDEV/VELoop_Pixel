import { useState } from "react";
import { ArrowUpRight, Box, Layers3, X } from "lucide-react";
import { Section } from "./ui/Section";
import { PRODUCTS, type Product } from "../data/products";
export default function PhysicalDigital() {
  const [active, setActive] = useState<Product | null>(null);
  return (
    <Section id="products" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">Physical + digital</span>
          <h2 className="section-title mt-5">
            Your brand shouldn't stop at the screen.
          </h2>
          <p className="section-copy">
            We connect printed customer touchpoints with the digital experience
            behind them.
          </p>
          <div className="mt-7 rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-blue-700">
                <Layers3 size={20} />
              </span>
              <div>
                <p className="font-black text-slate-950">
                  Designed as one system
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Same visual language. Same destination. Less friction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-white text-slate-700 shadow-sm">
                  <Box size={19} />
                </span>
                <span className="text-xs font-bold text-slate-400">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-black text-slate-950">{p.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {p.purpose}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-xs font-semibold text-slate-400">
                  {p.where}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-blue-600 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      {active && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/30 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-xl rounded-3xl bg-white p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <div>
                <span className="eyebrow">Physical touchpoint</span>
                <h3 className="mt-4 text-2xl font-black">{active.name}</h3>
              </div>
              <button
                onClick={() => setActive(null)}
                className="grid size-9 place-items-center rounded-xl bg-slate-100"
              >
                <X size={17} />
              </button>
            </div>
            <p className="mt-4 leading-7 text-slate-500">{active.purpose}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold text-slate-400">WHERE</p>
                <p className="mt-1 font-bold">{active.where}</p>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="text-xs font-bold text-blue-600">
                  DIGITAL ACTION
                </p>
                <p className="mt-1 font-bold">{active.digital}</p>
              </div>
            </div>
            <a
              href="#inquiry"
              onClick={() => setActive(null)}
              className="btn-primary mt-7"
            >
              Add this to my project <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}
