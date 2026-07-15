interface MarqueeProps {
  items: string[];
  className?: string;
  reverse?: boolean;
  speed?: "normal" | "fast";
  separator?: string;
}

export function Marquee({
  items,
  className = "",
  reverse = false,
  speed = "normal",
  separator = "✳",
}: MarqueeProps) {
  const animationClass = reverse
    ? "animate-marquee-reverse"
    : speed === "fast"
      ? "animate-marquee-fast"
      : "animate-marquee";

  // Duplicate the sequence so the loop is seamless (track translates -50%)
  const sequence = [...items, ...items];

  return (
    <div className={`marquee-mask w-full overflow-hidden ${className}`}>
      <div className={`flex w-max flex-nowrap ${animationClass}`}>
        {sequence.map((item, index) => (
          <span
            key={index}
            className="flex items-center whitespace-nowrap font-display font-800 uppercase tracking-[-0.02em]"
          >
            {item}
            <span className="mx-8 text-secondary tablet:mx-12" aria-hidden="true">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
