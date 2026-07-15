import { Badge } from "@/components/buttons";
import { Heading, Text } from "@/components/typography";
import { Button } from "@/components/buttons";
import { Reveal } from "@/components/animations";

interface ProjectCardProps {
  number: string;
  name: string;
  category: string;
  status: string;
  description: string;
  services: string[];
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  className?: string;
}

export function ProjectCard({
  number,
  name,
  category,
  status,
  description,
  services,
  technologies,
  demoUrl,
  sourceUrl,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={`bg-surface-card rounded-card border border-border shadow-subtle overflow-hidden transition-all duration-700 hover:shadow-glow-md hover:-translate-y-3 hover:scale-[1.005] group relative ${className}`}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-subtle/0 via-transparent to-accent-subtle/0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none" />
      
      {/* Visual Placeholder */}
      <div className="aspect-video bg-surface-alt border-b border-border relative overflow-hidden">
        <Reveal direction="up" delay={0.1}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-surface to-surface-alt opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.15}>
          <div className="absolute inset-4 border border-border/60 rounded-lg bg-surface/80 backdrop-blur-sm shadow-subtle transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-glow-sm group-hover:border-accent/30">
            <div className="h-8 border-b border-border/60 flex items-center gap-2 px-3">
              <div className="w-3 h-3 rounded-full bg-border/60" />
              <div className="w-3 h-3 rounded-full bg-border/60" />
              <div className="w-3 h-3 rounded-full bg-border/60" />
            </div>
            <div className="p-4 space-y-3">
              <div className="h-3 w-1/3 bg-border/60 rounded-full" />
              <div className="h-2 w-full bg-border/60 rounded-full" />
              <div className="h-2 w-2/3 bg-border/60 rounded-full" />
              <div className="h-2 w-1/2 bg-border/60 rounded-full" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="p-8 tablet:p-12 relative">
        <div className="flex items-start justify-between mb-8">
          <Badge variant="accent" className="bg-accent/10 text-accent border-accent/20">{category}</Badge>
          <Text size="small" color="muted" className="font-medium">
            {status}
          </Text>
        </div>

        <div className="mb-8">
          <Text size="small" color="accent" className="font-bold mb-3 tracking-[0.15em]">
            {number}
          </Text>
          <Heading level="h2" size="page-title" className="mb-4 group-hover:text-accent transition-colors duration-500">
            {name}
          </Heading>
        </div>

        <Text size="body" color="secondary" className="mb-10 leading-[1.75]">
          {description}
        </Text>

        <div className="mb-10">
          <Text size="small" color="muted" className="mb-4 font-medium tracking-[0.2em] uppercase">
            Servicios
          </Text>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <Badge key={index} variant="default" className="bg-surface border-border">
                {service}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <Text size="small" color="muted" className="mb-4 font-medium tracking-[0.2em] uppercase">
            Tecnologías
          </Text>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="default" className="bg-surface border-border">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="primary" className="transition-all duration-300 hover:shadow-glow-sm">Ver Demo</Button>
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="secondary" className="transition-all duration-300 hover:shadow-subtle">Código</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
