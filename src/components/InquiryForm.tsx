import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ArrowLeft, ArrowRight, Check, Send, ShieldCheck } from "lucide-react";
import { Section } from "./ui/Section";
import { submitInquiry } from "../services/inquiry";
export type InquiryState = {
  businessType: string;
  businessName: string;
  location: string;
  needs: string[];
  budget: string;
  phone: string;
  email: string;
  notes: string;
};
const initial: InquiryState = {
  businessType: "",
  businessName: "",
  location: "",
  needs: [],
  budget: "",
  phone: "",
  email: "",
  notes: "",
};
const InquiryContext = createContext<{
  state: InquiryState;
  update: (p: Partial<InquiryState>) => void;
}>({ state: initial, update: () => {} });
export function InquiryProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(initial);
  const value = useMemo(
    () => ({
      state,
      update: (p: Partial<InquiryState>) => setState((s) => ({ ...s, ...p })),
    }),
    [state],
  );
  return (
    <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>
  );
}
export function useInquiry() {
  return useContext(InquiryContext);
}
const needs = [
  "Digital Menu",
  "QR Displays",
  "Restaurant Website",
  "Online Ordering",
  "Offers & Promotions",
  "Loyalty / Rewards",
  "Custom Solution",
];
const budgets = [
  "Under ₹3,000",
  "₹3,000 – ₹7,000",
  "₹7,000 – ₹15,000",
  "₹15,000+",
  "Not sure yet",
];
export default function InquiryForm() {
  const { state, update } = useInquiry();
  const [step, setStep] = useState(0),
    [sent, setSent] = useState(false),
    [busy, setBusy] = useState(false);
  const valid =
    step === 0
      ? !!state.businessType && !!state.businessName && !!state.location
      : step === 1
        ? state.needs.length > 0
        : step === 2
          ? !!state.phone
          : !!state.email;
  const submit = async () => {
    setBusy(true);
    try {
      await submitInquiry(state);
      setSent(true);
    } catch (error) {
      console.error(error);
      alert("We could not send the inquiry. Please try again or use WhatsApp.");
    } finally {
      setBusy(false);
    }
  };
  const next = () => valid && setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));
  return (
    <Section id="inquiry" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <span className="eyebrow">Project inquiry</span>
          <h2 className="section-title mt-5">
            Tell us what you want to build.
          </h2>
          <p className="section-copy">
            A few details help us understand your business and recommend the
            right starting point.
          </p>
          <div className="mt-7 flex items-center gap-3 text-xs font-semibold text-slate-500">
            <ShieldCheck size={16} className="text-emerald-600" /> Your details
            stay focused on this inquiry.
          </div>
          <div className="mt-8 flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-blue-600" : "bg-slate-200"}`}
              />
            ))}
          </div>
        </div>
        <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-5 sm:p-7">
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="grid size-16 place-items-center rounded-3xl bg-emerald-50 text-emerald-600">
                <Check size={30} />
              </span>
              <h3 className="mt-6 text-2xl font-black">Inquiry received</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                The demo form is ready to connect to Google Sheets, Airtable or
                your own backend. Your captured data is currently available in
                the browser console.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setStep(0);
                }}
                className="btn-ghost mt-7"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <div className="min-h-[420px]">
              {step === 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    01 · Business
                  </p>
                  <h3 className="mt-2 text-2xl font-black">
                    Tell us about your business
                  </h3>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Business name"
                      value={state.businessName}
                      onChange={(v) => update({ businessName: v })}
                      placeholder="e.g. The Food House"
                    />
                    <Field
                      label="Location"
                      value={state.location}
                      onChange={(v) => update({ location: v })}
                      placeholder="City / area"
                    />
                    <div className="sm:col-span-2">
                      <p className="mb-2 text-sm font-bold">Business type</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Restaurant",
                          "Café",
                          "Cloud Kitchen",
                          "Retail",
                          "Other",
                        ].map((x) => (
                          <button
                            key={x}
                            onClick={() => update({ businessType: x })}
                            className={`rounded-xl border px-4 py-3 text-sm font-bold ${state.businessType === x ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600"}`}
                          >
                            {x}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step === 1 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    02 · Scope
                  </p>
                  <h3 className="mt-2 text-2xl font-black">
                    What do you need?
                  </h3>
                  <div className="mt-7 grid gap-2 sm:grid-cols-2">
                    {needs.map((x) => {
                      const on = state.needs.includes(x);
                      return (
                        <button
                          key={x}
                          onClick={() =>
                            update({
                              needs: on
                                ? state.needs.filter((n) => n !== x)
                                : [...state.needs, x],
                            })
                          }
                          className={`flex items-center gap-3 rounded-2xl border p-4 text-left text-sm font-bold ${on ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-700"}`}
                        >
                          <span
                            className={`grid size-6 place-items-center rounded-md ${on ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}
                          >
                            <Check size={13} />
                          </span>
                          {x}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-6">
                    <p className="mb-2 text-sm font-bold">Budget range</p>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((x) => (
                        <button
                          key={x}
                          onClick={() => update({ budget: x })}
                          className={`rounded-xl border px-3 py-2.5 text-xs font-bold ${state.budget === x ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600"}`}
                        >
                          {x}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    03 · Contact
                  </p>
                  <h3 className="mt-2 text-2xl font-black">
                    How should we reach you?
                  </h3>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Phone / WhatsApp"
                      value={state.phone}
                      onChange={(v) => update({ phone: v })}
                      placeholder="Your number"
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={state.email}
                      onChange={(v) => update({ email: v })}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    04 · Final note
                  </p>
                  <h3 className="mt-2 text-2xl font-black">
                    Anything else we should know?
                  </h3>
                  <textarea
                    value={state.notes}
                    onChange={(e) => update({ notes: e.target.value })}
                    placeholder="Tell us about your current setup, timeline or a website you like..."
                    className="mt-7 min-h-40 w-full resize-y rounded-2xl border border-slate-200 bg-white p-4 text-sm outline-none focus:border-blue-400"
                  />
                  <div className="mt-5 rounded-2xl bg-white p-4 text-sm text-slate-500">
                    <b className="text-slate-900">Ready:</b>{" "}
                    {state.businessName} · {state.businessType} ·{" "}
                    {state.needs.join(", ")}
                  </div>
                </div>
              )}
              <div className="mt-8 flex justify-between gap-3 border-t border-slate-200 pt-5">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="btn-ghost disabled:pointer-events-none disabled:opacity-40"
                >
                  <ArrowLeft size={15} /> Back
                </button>
                {step < 3 ? (
                  <button
                    onClick={next}
                    disabled={!valid}
                    className="btn-primary disabled:pointer-events-none disabled:opacity-40"
                  >
                    Continue <ArrowRight size={15} />
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    disabled={!valid || busy}
                    className="btn-primary disabled:pointer-events-none disabled:opacity-40"
                  >
                    {busy ? "Sending..." : "Send inquiry"} <Send size={15} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
      />
    </label>
  );
}
