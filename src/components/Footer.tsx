import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  ArrowUp,
} from "lucide-react";
import Logo from "./ui/Logo";
import { SITE } from "../config/site";
export default function Footer() {
  const links = [
    ["Solutions", "#solutions"],
    ["Packages", "#packages"],
    ["Portfolio", "#portfolio"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Digital experiences for restaurants and modern local businesses —
              designed to be useful, clear and easy to grow.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-700"
            >
              <Mail size={15} />
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-slate-400">
              Explore
            </p>
            <div className="mt-4 space-y-3">
              {links.map(([l, h]) => (
                <a
                  key={h}
                  href={h}
                  className="block text-sm font-semibold text-slate-600 hover:text-blue-600"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-slate-400">
              Social
            </p>
            <div className="mt-4 flex gap-2">
              {[
                [Instagram, SITE.social.instagram],
                [Linkedin, SITE.social.linkedin],
                [Facebook, SITE.social.facebook],
                [Youtube, SITE.social.youtube],
              ].map(([I, h]) => {
                const Icon = I as typeof Instagram;
                return (
                  <a
                    key={h as string}
                    href={h as string}
                    className="grid size-10 place-items-center rounded-xl border border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-bold text-slate-600"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
