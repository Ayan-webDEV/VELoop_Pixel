import { useMemo, useState } from "react";
import {
  Search,
  X,
  Plus,
  Minus,
  ShoppingBag,
  Leaf,
  Star,
  ArrowRight,
} from "lucide-react";
import { Section } from "./ui/Section";
import { MENU_ITEMS, MENU_CATEGORIES, type MenuItem } from "../data/menu";
export default function DigitalMenu() {
  const [cat, setCat] = useState("All"),
    [query, setQuery] = useState(""),
    [veg, setVeg] = useState(false),
    [active, setActive] = useState<MenuItem | null>(null),
    [cart, setCart] = useState<Record<string, number>>({});
  const items = useMemo(
    () =>
      MENU_ITEMS.filter(
        (x) =>
          (cat === "All" || x.category === cat) &&
          (!veg || x.veg) &&
          x.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [cat, query, veg],
  );
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const add = (id: string) =>
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const remove = (id: string) =>
    setCart((c) => {
      const n = { ...c };
      n[id] = (n[id] || 0) - 1;
      if (n[id] <= 0) delete n[id];
      return n;
    });
  return (
    <Section id="menu" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[.6fr_1.4fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <span className="eyebrow">Live menu demo</span>
          <h2 className="section-title mt-5">
            A digital menu that feels like your product.
          </h2>
          <p className="section-copy">
            Search, categories, dietary filters, item details and a lightweight
            cart — all without an app download.
          </p>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black">Customer flow</span>
              <span className="text-xs font-bold text-emerald-600">Fast</span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {["Scan QR", "Browse menu", "Choose dishes", "Take action"].map(
                (x, i) => (
                  <div key={x} className="flex items-center gap-3">
                    <span className="grid size-7 place-items-center rounded-full bg-white text-xs font-black text-blue-600 shadow-sm">
                      {i + 1}
                    </span>
                    {x}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-4 sm:p-6">
          <div className="rounded-[24px] bg-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-wrap gap-3">
              <label className="relative min-w-[220px] flex-1">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search dishes..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-blue-400"
                />
              </label>
              <button
                onClick={() => setVeg((v) => !v)}
                className={`rounded-xl border px-4 py-3 text-sm font-bold ${veg ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 bg-white text-slate-600"}`}
              >
                <Leaf size={15} className="mr-2 inline" />
                Veg only
              </button>
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {["All", ...MENU_CATEGORIES].map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold ${cat === c ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {items.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-100 p-4 transition hover:border-blue-100 hover:shadow-sm"
                >
                  <button
                    onClick={() => setActive(item)}
                    className="flex w-full items-start gap-3 text-left"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-slate-50 text-2xl">
                      {item.emoji}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-sm font-black">
                          {item.name}
                        </span>
                        {item.popular && (
                          <Star
                            size={12}
                            className="shrink-0 fill-amber-400 text-amber-400"
                          />
                        )}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.description}
                      </span>
                      <span className="mt-2 block text-sm font-black">
                        ₹{item.price}
                      </span>
                    </span>
                  </button>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400">
                      {item.veg ? "VEG" : "NON-VEG"}{" "}
                      {item.offer && `· ${item.offer}`}
                    </span>
                    {cart[item.id] ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => remove(item.id)}
                          className="grid size-8 place-items-center rounded-lg bg-slate-100"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-4 text-center text-sm font-bold">
                          {cart[item.id]}
                        </span>
                        <button
                          onClick={() => add(item.id)}
                          className="grid size-8 place-items-center rounded-lg bg-slate-950 text-white"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => add(item.id)}
                        className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-950 p-4 text-white">
              <span className="flex items-center gap-2 text-sm font-bold">
                <ShoppingBag size={17} /> {count} item{count !== 1 ? "s" : ""}{" "}
                selected
              </span>
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-200"
              >
                Build this for your restaurant <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {active && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/30 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <span className="grid size-14 place-items-center rounded-2xl bg-slate-50 text-3xl">
                {active.emoji}
              </span>
              <button
                onClick={() => setActive(null)}
                className="grid size-9 place-items-center rounded-xl bg-slate-100"
              >
                <X size={17} />
              </button>
            </div>
            <h3 className="mt-5 text-2xl font-black">{active.name}</h3>
            <p className="mt-3 leading-7 text-slate-500">
              {active.description}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xl font-black">₹{active.price}</span>
              <button
                onClick={() => {
                  add(active.id);
                  setActive(null);
                }}
                className="btn-primary"
              >
                Add to preview <Plus size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
