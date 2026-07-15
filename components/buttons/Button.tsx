import { ReactNode, ButtonHTMLAttributes } from "react";
import { MagneticButton } from "@/components/effects";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  magnetic?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-background hover:bg-accent-light transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0",
  secondary:
    "bg-transparent border border-border text-primary hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-6 py-2.5 text-small",
  md: "px-8 py-3.5 text-small-lg",
  lg: "px-10 py-4 text-body",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  magnetic = false,
  ...props
}: ButtonProps) {
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];

  const buttonContent = (
    <button
      className={`${variantClass} ${sizeClass} rounded-button font-display font-600 uppercase tracking-[0.08em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  if (magnetic) {
    return <MagneticButton strength={20}>{buttonContent}</MagneticButton>;
  }

  return buttonContent;
}
