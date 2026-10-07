import { useState } from "react";
import { ArrowRight, Check, MapPin, Phone, Utensils, Gift } from "lucide-react";
import { MENU_ITEMS } from "../data/menu";
export default function HeroDemo() {
  const [tab, setTab] = useState<"menu" | "actions">("menu");
  return (
    <div className="container-shell -mt-2 pb-8">
      <div className="card overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">
              Interactive preview
            </span>
            <p className="mt-1 font-black text-slate-950">
              See what a customer could experience
            </p>
          </div>
          <div className="flex rounded-xl bg-slate-100 p-1">
            {(["menu", "actions"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-lg px-3 py-2 text-xs font-bold capitalize ${tab === t ? "bg-white text-slate-950 shadow-sm" : "text-slate-500"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-[.7fr_1.3fr]">
          <div className="border-b border-slate-100 bg-slate-50 p-6 lg:border-b-0 lg:border-r">
            <div className="mx-auto max-w-[260px] rounded-[30px] border-8 border-slate-900 bg-white p-3 shadow-xl">
              <div className="rounded-[22px] bg-slate-950 p-4 text-white">
                <p className="text-[10px] font-bold text-slate-400">
                  THE DEMO RESTAURANT
                </p>
                <h3 className="mt-1 text-lg font-black">
                  Good food. Easy choices.
                </h3>
                <div className="mt-4 rounded-xl bg-white p-2 text-center text-5xl">
                  ▦
                </div>
                <p className="mt-3 text-center text-[10px] text-slate-400">
                  Scan to open menu
                </p>
              </div>
            </div>
          </div>
          <div className="p-6">
            {tab === "menu" ? (
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-950">
                    Popular right now
                  </h3>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                    Live menu
                  </span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {MENU_ITEMS.filter((x) => x.popular)
                    .slice(0, 4)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between rounded-2xl border border-slate-100 p-4"
                      >
                        <div>
                          <div className="text-2xl">{item.emoji}</div>
                          <p className="mt-2 text-sm font-bold text-slate-950">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            ₹{item.price}
                          </p>
                        </div>
                        <span className="rounded-lg bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700">
                          Popular
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-black text-slate-950">
                  One-tap customer actions
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Make useful actions obvious instead of hiding them in a menu.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    [Phone, "Call waiter"],
                    [MapPin, "Get directions"],
                    [Gift, "Claim an offer"],
                    [Utensils, "View full menu"],
                  ].map(([I, label]) => {
                    const Icon = I as typeof Phone;
                    return (
                      <button
                        key={label as string}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
                      >
                        <span className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-700">
                          <Icon size={18} />
                        </span>
                        <span className="text-sm font-bold text-slate-950">
                          {label as string}
                        </span>
                        <ArrowRight
                          size={15}
                          className="ml-auto text-slate-400"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Check size={15} className="text-emerald-500" /> Designed around
              the customer's next action
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
