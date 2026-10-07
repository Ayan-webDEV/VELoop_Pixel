import { ArrowRight, Quote, Star } from "lucide-react";
import Section from "./ui/Section";

const quotes = [
  [
    "“We wanted something premium but practical. The process stayed clear from start to launch.”",
    "Business owner",
    "Custom experience",
  ],
  [
    "“The digital experience makes our restaurant feel much more professional.”",
    "Restaurant owner",
    "Digital menu",
  ],
  [
    "“The team understood what we needed instead of forcing us into a generic template.”",
    "Business owner",
    "Restaurant website",
  ],
];

export default function Testimonials() {
  return (
    <Section>
      <div className="text-center">
        <span className="eyebrow">Trust, in progress</span>

        <h2 className="section-title mt-5">
          The kind of experience we aim to create.
        </h2>

        <p className="section-copy mx-auto">
          As the studio grows, this section can showcase verified client
          stories, results and case studies.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {quotes.map(([quote, name, service]) => (
          <article key={name} className="card p-6">
            <div className="flex items-center gap-1 text-amber-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={13} fill="currentColor" />
              ))}
            </div>

            <Quote className="mt-7 text-blue-100" size={28} />

            <p className="mt-3 text-lg font-bold leading-8 text-slate-800">
              {quote}
            </p>

            <div className="mt-7 border-t border-slate-100 pt-4">
              <p className="text-sm font-black">{name}</p>

              <p className="mt-1 text-xs text-slate-400">{service}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-7 text-center">
        <a href="#inquiry" className="btn-ghost">
          Become a case study
          <ArrowRight size={15} />
        </a>
      </div>
    </Section>
  );
}
