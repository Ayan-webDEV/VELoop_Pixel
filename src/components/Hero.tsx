import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ScanQrCode,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";
export default function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden bg-[radial-gradient(circle_at_80%_20%,#dbeafe_0,transparent_30%),linear-gradient(#fff,#f8fafc)] pt-32 sm:pt-36"
    >
      <div className="container-shell grid items-center gap-14 pb-20 lg:grid-cols-[1.02fr_.98fr] lg:pb-28">
        <div className="reveal">
          <span className="eyebrow">
            <Sparkles size={13} /> Digital growth studio for restaurants
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-[70px] lg:leading-[1.02]">
            Your restaurant deserves a{" "}
            <span className="text-blue-600">better digital experience.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            We connect your tables, counter, menu, website and customer journey
            into one polished experience that feels modern and makes action
            easier.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inquiry" className="btn-primary">
              Build my experience <ArrowRight size={17} />
            </a>
            <a href="#portfolio" className="btn-ghost">
              See how it works
            </a>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["Fast", "Mobile-first"],
              ["Flexible", "Easy to update"],
              ["Built to grow", "Digital + physical"],
            ].map(([a, b]) => (
              <div
                key={a}
                className="rounded-2xl border border-slate-200 bg-white/80 p-3"
              >
                <div className="text-sm font-black text-slate-950">{a}</div>
                <div className="mt-1 text-xs text-slate-500">{b}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-8 top-8 size-24 rounded-full bg-blue-100 blur-2xl" />
          <div className="absolute -right-10 bottom-8 size-32 rounded-full bg-cyan-100 blur-3xl" />
          <div className="relative rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_30px_90px_-35px_rgba(15,23,42,.35)] float-soft">
            <div className="rounded-[25px] bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    THE DEMO RESTAURANT
                  </p>
                  <h3 className="mt-1 text-xl font-black">
                    Your digital front door
                  </h3>
                </div>
                <div className="grid size-10 place-items-center rounded-xl bg-white/10">
                  <ScanQrCode />
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  [ScanQrCode, "QR Menu", "Scan → Explore → Order"],
                  [
                    MousePointerClick,
                    "One-tap actions",
                    "Call waiter · Directions",
                  ],
                  [TrendingUp, "Live offers", "Change promotions anytime"],
                  [CheckCircle2, "Built for trust", "Fast, clear and branded"],
                ].map(([Icon, title, copy]) => {
                  const I = Icon as typeof ScanQrCode;
                  return (
                    <div
                      key={title as string}
                      className="rounded-2xl border border-white/10 bg-white/[.06] p-4"
                    >
                      <I size={19} className="text-blue-300" />
                      <p className="mt-3 text-sm font-bold">
                        {title as string}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {copy as string}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 rounded-2xl bg-white p-4 text-slate-900">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Today
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    ● Live
                  </span>
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-black">1,284</div>
                    <div className="text-xs text-slate-500">
                      menu interactions
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-blue-600">+28%</div>
                    <div className="text-xs text-slate-500">vs. last week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
