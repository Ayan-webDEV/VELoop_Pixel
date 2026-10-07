import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { SITE, waLink } from "../config/site";
export default function Contact() {
  return (
    <Section id="contact">
      <div className="rounded-[32px] bg-blue-600 p-7 text-white sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
              Let's talk
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Have a restaurant that could use a better digital experience?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Tell us what you're building. We'll help you find the simplest
              useful starting point.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700"
              >
                Start inquiry <ArrowUpRight size={16} />
              </a>
              <a
                href={waLink()}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="grid gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-white text-blue-600">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-blue-100">Email</p>
                <p className="font-bold">{SITE.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-white text-blue-600">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-blue-100">Service</p>
                <p className="font-bold">Remote-first · India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
