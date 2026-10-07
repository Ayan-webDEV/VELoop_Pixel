import { useState } from "react";
import { MapPin, Navigation, Clock, Phone, ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
const spots = [
  {
    id: "entrance",
    name: "Entrance",
    copy: "Timings, directions and first impression.",
  },
  { id: "table", name: "Table", copy: "Menu, offers and call waiter." },
  { id: "counter", name: "Counter", copy: "Order, reviews and loyalty." },
  {
    id: "takeaway",
    name: "Takeaway",
    copy: "Reorder and rewards after the visit.",
  },
];
export default function RestaurantMap() {
  const [active, setActive] = useState(spots[1]);
  return (
    <Section id="imagine">
      <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
        <div>
          <span className="eyebrow">One restaurant. Many touchpoints.</span>
          <h2 className="section-title mt-5">
            Design the customer journey, not just a QR code.
          </h2>
          <p className="section-copy">
            Every touchpoint can have a useful next step. This is where physical
            design and digital product thinking meet.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {spots.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className={`rounded-2xl border p-4 text-left transition ${active.id === s.id ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white hover:border-slate-300"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-slate-950">{s.name}</span>
                  <ArrowRight
                    size={15}
                    className={
                      active.id === s.id ? "text-blue-600" : "text-slate-400"
                    }
                  />
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {s.copy}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="card overflow-hidden p-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#eff6ff,#f8fafc)]">
            <div className="absolute inset-5 rounded-[28px] border-2 border-dashed border-blue-200">
              <div className="absolute left-[12%] top-[16%] rounded-xl bg-white p-3 shadow-md">
                <MapPin size={18} className="text-blue-600" />
              </div>
              <div className="absolute right-[15%] top-[42%] rounded-xl bg-white p-3 shadow-md">
                <Navigation size={18} className="text-blue-600" />
              </div>
              <div className="absolute bottom-[17%] left-[30%] rounded-xl bg-white p-3 shadow-md">
                <Phone size={18} className="text-blue-600" />
              </div>
              <div className="absolute bottom-[16%] right-[16%] rounded-xl bg-white p-3 shadow-md">
                <Clock size={18} className="text-blue-600" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-slate-950 px-6 py-5 text-center text-white shadow-2xl">
                <MapPin className="mx-auto text-blue-300" />
                <p className="mt-2 text-xs font-bold">{active.name}</p>
                <p className="mt-1 max-w-[130px] text-[10px] text-slate-400">
                  {active.copy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
