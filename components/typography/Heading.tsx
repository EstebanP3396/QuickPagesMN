import { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize =
  | "hero"
  | "hero-lg"
  | "hero-xl"
  | "page-title"
  | "page-title-lg"
  | "section-title"
  | "section-title-lg"
  | "subtitle"
  | "subtitle-lg";

interface HeadingProps {
  level?: HeadingLevel;
  size?: HeadingSize;
  children: ReactNode;
  className?: string;
}

const sizeClasses: Record<HeadingSize, string> = {
  hero: "text-hero font-bold tracking-[-0.02em] leading-[1.0]",
  "hero-lg": "text-hero-lg font-bold tracking-[-0.025em] leading-[0.98]",
  "hero-xl": "text-hero-xl font-bold tracking-[-0.03em] leading-[0.95]",
  "page-title": "text-page-title font-bold tracking-[-0.015em] leading-[1.05]",
  "page-title-lg": "text-page-title-lg font-bold tracking-[-0.02em] leading-[1.02]",
  "section-title": "text-section-title font-semibold tracking-[-0.01em] leading-[1.10]",
  "section-title-lg": "text-section-title-lg font-semibold tracking-[-0.015em] leading-[1.08]",
  subtitle: "text-subtitle font-medium tracking-[0.02em] leading-[1.3]",
  "subtitle-lg": "text-subtitle-lg font-medium tracking-[0.015em] leading-[1.25]",
};

const levelMap: Record<HeadingLevel, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

export function Heading({
  level = "h2",
  size = "section-title",
  children,
  className = "",
}: HeadingProps) {
  const Tag = levelMap[level] as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const sizeClass = sizeClasses[size];

  return (
    <Tag className={`${sizeClass} text-primary ${className}`}>{children}</Tag>
  );
}
