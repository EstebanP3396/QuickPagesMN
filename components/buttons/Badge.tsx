import { ReactNode } from "react";

type BadgeVariant = "default" | "accent";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-surface border border-border text-secondary",
  accent: "bg-accent/10 border border-accent/20 text-accent",
};

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  const variantClass = variantClasses[variant];

  return (
    <span
      className={`${variantClass} rounded-button px-3 py-1 text-small font-medium ${className}`}
    >
      {children}
    </span>
  );
}
