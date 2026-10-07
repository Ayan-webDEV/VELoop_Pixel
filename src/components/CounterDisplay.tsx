import { MonitorUp, ScanLine, MousePointer2, ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
export default function CounterDisplay() {
  return (
    <Section id="restaurants">
      <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white sm:p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-200">
              Counter display
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Turn waiting time into discovery time.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              Your counter can promote the menu, offers, direct ordering,
              reviews and loyalty without looking like clutter.
            </p>
            <a
              href="#inquiry"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950"
            >
              Add a counter display <ArrowRight size={16} />
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="rounded-2xl bg-white p-5 text-slate-900 shadow-2xl">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-700">
                    <MonitorUp size={19} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-400">
                      SCAN TO EXPLORE
                    </p>
                    <p className="font-black">Today's customer experience</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    [ScanLine, "Menu"],
                    [MousePointer2, "Offers"],
                    [MonitorUp, "Order"],
                  ].map(([I, l]) => {
                    const Icon = I as typeof MonitorUp;
                    return (
                      <div
                        key={l as string}
                        className="rounded-2xl bg-slate-50 p-4 text-center"
                      >
                        <Icon size={18} className="mx-auto text-blue-600" />
                        <p className="mt-2 text-xs font-bold">{l as string}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
