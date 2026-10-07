import { useMemo, useState } from "react";
import { TrendingUp, Info, ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
const Slider = ({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  suffix = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (n: number) => void;
  suffix?: string;
}) => (
  <label className="block">
    <div className="flex items-center justify-between text-sm">
      <span className="font-bold text-slate-700">{label}</span>
      <span className="font-black text-blue-600">
        {value}
        {suffix}
      </span>
    </div>
    <input
      className="mt-4 w-full accent-blue-600"
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </label>
);
export default function Calculator() {
  const [customers, setCustomers] = useState(80),
    [avg, setAvg] = useState(350),
    [repeat, setRepeat] = useState(20),
    [potential, setPotential] = useState(35);
  const result = useMemo(() => {
    const current = customers * avg * (repeat / 100);
    const potentialRevenue = customers * avg * (potential / 100);
    return {
      lift: Math.max(0, potentialRevenue - current),
      current,
      potentialRevenue,
    };
  }, [customers, avg, repeat, potential]);
  return (
    <Section id="calculator">
      <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
        <div>
          <span className="eyebrow">Business impact</span>
          <h2 className="section-title mt-5">
            See the value of a better repeat journey.
          </h2>
          <p className="section-copy">
            Use the sliders for a simple directional estimate. It is not a
            revenue guarantee — it helps frame the opportunity.
          </p>
          <div className="mt-8 card p-6 sm:p-8">
            <div className="grid gap-7 sm:grid-cols-2">
              <Slider
                label="Customers / day"
                value={customers}
                min={20}
                max={300}
                step={10}
                onChange={setCustomers}
              />
              <Slider
                label="Average order"
                value={avg}
                min={100}
                max={1000}
                step={25}
                onChange={setAvg}
                suffix=" ₹"
              />
              <Slider
                label="Current repeat"
                value={repeat}
                min={5}
                max={60}
                step={5}
                onChange={setRepeat}
                suffix="%"
              />
              <Slider
                label="Potential repeat"
                value={potential}
                min={10}
                max={70}
                step={5}
                onChange={setPotential}
                suffix="%"
              />
            </div>
          </div>
        </div>
        <div className="rounded-[30px] bg-slate-950 p-7 text-white shadow-xl sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">
            <TrendingUp size={14} /> Directional estimate
          </span>
          <p className="mt-7 text-sm text-slate-400">
            Potential monthly uplift
          </p>
          <div className="mt-2 text-5xl font-black tracking-tight">
            ₹{Math.round(result.lift * 30).toLocaleString("en-IN")}
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs text-slate-500">Current</p>
              <p className="mt-1 font-black">
                ₹{Math.round(result.current).toLocaleString("en-IN")}
              </p>
            </div>
            <div className="rounded-2xl bg-blue-500/15 p-4">
              <p className="text-xs text-blue-200">Potential</p>
              <p className="mt-1 font-black">
                ₹{Math.round(result.potentialRevenue).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
          <div className="mt-6 flex gap-2 text-xs leading-5 text-slate-400">
            <Info size={15} className="mt-0.5 shrink-0" /> Use this as a
            planning tool. Actual results depend on pricing, traffic, product
            quality and execution.
          </div>
          <a
            href="#inquiry"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-300"
          >
            Talk through the opportunity <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </Section>
  );
}
