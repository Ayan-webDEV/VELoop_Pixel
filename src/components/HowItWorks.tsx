import {
  MessageSquare,
  Palette,
  Wrench,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Section } from "./ui/Section";
const steps = [
  [
    MessageSquare,
    "01",
    "Tell us what you need",
    "Share your restaurant, goals, current setup and priorities.",
  ],
  [
    Palette,
    "02",
    "We shape the experience",
    "We map the customer journey, visual direction and deliverables.",
  ],
  [
    Wrench,
    "03",
    "We build and connect",
    "Digital pages and physical touchpoints are prepared as one system.",
  ],
  [
    Rocket,
    "04",
    "Launch and improve",
    "Go live, collect feedback and keep improving the experience.",
  ],
];
export default function HowItWorks() {
  return (
    <Section id="how">
      <div className="text-center">
        <span className="eyebrow">Simple process</span>
        <h2 className="section-title mt-5">From idea to live experience.</h2>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(([I, n, t, c], i) => {
          const Icon = I as typeof Rocket;
          return (
            <div
              key={n as string}
              className="relative rounded-3xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={19} />
                </span>
                <span className="text-xs font-black text-slate-300">
                  {n as string}
                </span>
              </div>
              <h3 className="mt-7 font-black">{t as string}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {c as string}
              </p>
              {i < 3 && (
                <ArrowRight
                  className="absolute -right-3 top-12 hidden text-slate-300 lg:block"
                  size={18}
                />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
