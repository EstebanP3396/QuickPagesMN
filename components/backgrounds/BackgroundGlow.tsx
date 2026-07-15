interface BackgroundGlowProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  color?: "accent" | "accent-light" | "accent-subtle" | "accent-glow" | "surface-navy";
  opacity?: number;
}

export function BackgroundGlow({
  className,
  position = "center",
  size = "lg",
  color = "accent",
  opacity = 0.1,
}: BackgroundGlowProps) {
  const positionClasses = {
    "top-left": "-top-1/4 -left-1/4",
    "top-right": "-top-1/4 -right-1/4",
    "bottom-left": "-bottom-1/4 -left-1/4",
    "bottom-right": "-bottom-1/4 -right-1/4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  const sizeClasses = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[600px] h-[600px]",
    xl: "w-[800px] h-[800px]",
    "2xl": "w-[1200px] h-[1200px]",
  };

  const colorClasses = {
    accent: "bg-accent",
    "accent-light": "bg-accent-light",
    "accent-subtle": "bg-accent-subtle",
    "accent-glow": "bg-accent-glow",
    "surface-navy": "bg-surface-navy",
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${positionClasses[position]} ${sizeClasses[size]} ${colorClasses[color]} ${className || ''}`}
      style={{ opacity }}
    />
  );
}
