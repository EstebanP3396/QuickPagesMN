import { ReactNode, ButtonHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  iconSize?: number;
  variant?: "primary" | "secondary";
  className?: string;
  label?: string;
}

const variantClasses: Record<
  "primary" | "secondary",
  string
> = {
  primary:
    "bg-accent text-surface hover:bg-accent/90 transition-colors duration-200",
  secondary:
    "bg-transparent border border-border text-primary hover:border-primary transition-colors duration-200",
};

export function IconButton({
  icon: Icon,
  iconSize = 20,
  variant = "primary",
  className = "",
  label,
  ...props
}: IconButtonProps) {
  const variantClass = variantClasses[variant];

  return (
    <button
      className={`${variantClass} rounded-button p-3 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      aria-label={label}
      {...props}
    >
      <Icon size={iconSize} />
    </button>
  );
}
