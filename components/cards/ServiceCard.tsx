interface ServiceCardProps {
  name: string;
  description: string;
  benefit: string;
  index?: string;
  className?: string;
}

export function ServiceCard({
  name,
  description,
  benefit,
  index,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`group relative flex h-full flex-col justify-between overflow-hidden border border-border bg-surface-card p-8 transition-colors duration-500 hover:bg-surface-alt ${className}`}
    >
      {/* sliding fill on hover */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-primary transition-all duration-500 ease-out group-hover:h-full" />

      <div className="relative z-10">
        {index && (
          <span className="font-display text-small font-600 tracking-[0.2em] text-muted transition-colors duration-500 group-hover:text-background/60">
            {index}
          </span>
        )}
        <h3 className="mt-5 font-display text-subtitle font-700 uppercase leading-[1.05] tracking-[-0.02em] text-primary transition-colors duration-500 group-hover:text-background">
          {name}
        </h3>
        <p className="mt-5 text-small leading-relaxed text-secondary transition-colors duration-500 group-hover:text-background/80">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-8 border-t border-border pt-5 transition-colors duration-500 group-hover:border-background/20">
        <p className="text-small font-500 leading-snug text-primary transition-colors duration-500 group-hover:text-background">
          {benefit}
        </p>
      </div>
    </div>
  );
}
