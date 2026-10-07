import {
  ShieldCheck,
  LockKeyhole,
  Gauge,
  MessageSquareText,
} from "lucide-react";
import { Section } from "./ui/Section";
export default function Trust() {
  const items = [
    [
      ShieldCheck,
      "Transparent scope",
      "You know what is included before work starts.",
    ],
    [
      Gauge,
      "Performance minded",
      "We keep pages lightweight and focused on useful actions.",
    ],
    [
      LockKeyhole,
      "Respect your data",
      "Inquiry information should only be used for project communication.",
    ],
    [
      MessageSquareText,
      "Human support",
      "You can talk to a real person about the project and next steps.",
    ],
  ];
  return (
    <Section className="bg-white">
      <div className="rounded-[32px] border border-slate-200 p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Trust layer</span>
            <h2 className="section-title mt-5">
              Good design earns attention. Good systems earn trust.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map(([I, t, c]) => {
              const Icon = I as typeof ShieldCheck;
              return (
                <div key={t as string} className="rounded-2xl bg-slate-50 p-5">
                  <Icon size={19} className="text-blue-600" />
                  <h3 className="mt-4 text-sm font-black">{t as string}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {c as string}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
