import { ReactNode } from "react";

type TextSize = "body" | "body-lg" | "small" | "small-lg" | "label" | "label-lg";
type TextColor = "primary" | "secondary" | "accent" | "muted";

interface TextProps {
  size?: TextSize;
  color?: TextColor;
  children: ReactNode;
  className?: string;
}

const sizeClasses: Record<TextSize, string> = {
  body: "text-body leading-[1.75]",
  "body-lg": "text-body-lg leading-[1.7]",
  small: "text-small leading-[1.6]",
  "small-lg": "text-small-lg leading-[1.6]",
  label: "text-label tracking-[0.2em] uppercase",
  "label-lg": "text-label-lg tracking-[0.18em] uppercase",
};

const colorClasses: Record<TextColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  muted: "text-muted",
};

export function Text({
  size = "body",
  color = "primary",
  children,
  className = "",
}: TextProps) {
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];

  return (
    <p className={`${sizeClass} ${colorClass} ${className}`}>{children}</p>
  );
}
