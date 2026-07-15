import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-32 tablet:py-40 desktop:py-48 ${className}`}>
      {children}
    </section>
  );
}
