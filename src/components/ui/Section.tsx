import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`px-5 py-24 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export { Section };

export default Section;
