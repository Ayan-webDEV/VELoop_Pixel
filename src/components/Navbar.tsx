import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./ui/Logo";
const links = [
  ["Solutions", "#solutions"],
  ["Products", "#products"],
  ["Packages", "#packages"],
  ["Work", "#portfolio"],
  ["FAQ", "#faq"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 12);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="container-shell flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#inquiry" className="btn-primary">
            Start a project <ArrowUpRight size={16} />
          </a>
        </div>
        <button
          className="grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-1 py-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                onClick={() => setOpen(false)}
                href={href}
                className="rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                {label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
