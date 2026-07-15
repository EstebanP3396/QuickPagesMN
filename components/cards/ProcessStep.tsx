import { Heading, Text } from "@/components/typography";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function ProcessStep({
  number,
  title,
  description,
  className = "",
  align = "left",
}: ProcessStepProps) {
  const alignClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div className={`relative transition-all duration-500 hover:-translate-x-2 group ${className}`}>
      <div className={`flex gap-6 tablet:gap-8 ${alignClasses[align]}`}>
        <div className="flex-shrink-0">
          <div className="text-hero-lg font-bold text-accent opacity-15 transition-opacity duration-500 group-hover:opacity-25 group-hover:text-accent-light">
            {number}
          </div>
        </div>

        <div className="flex-1">
          <Heading level="h3" size="section-title" className="mb-4 group-hover:text-accent transition-colors duration-500">
            {title}
          </Heading>

          <Text size="body" color="secondary" className="leading-[1.75]">
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}
