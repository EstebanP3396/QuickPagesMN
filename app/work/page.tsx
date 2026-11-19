"use client";

import Link from "next/link";
import { Heading, Text } from "@/components/typography";
import { ProjectCard } from "@/components/cards";
import { Container, Section } from "@/components/layout";
import { SlideUp } from "@/components/animations";
import { BackgroundGlow, NoiseOverlay } from "@/components/backgrounds";
import { ArrowRight } from "lucide-react";
import { projects } from "@/constants/projects";

export default function Work() {
  return (
    <>
      <NoiseOverlay opacity={0.025} />

      {/* Page Header - Dark */}
      <Section className="pt-40 pb-24 bg-background relative overflow-hidden">
        <BackgroundGlow position="top-right" size="xl" color="accent" opacity={0.1} />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Oversized background typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] pointer-events-none opacity-[0.04]">
          <div className="text-[30vw] font-bold text-accent leading-none tracking-[-0.03em] whitespace-nowrap">
            WORK
          </div>
        </div>

        <Container>
          <SlideUp distance={50} scale={0.97}>
            <Text size="small" color="muted" className="font-medium tracking-[0.35em] uppercase mb-8">
              Trabajo Seleccionado
            </Text>
            <Heading level="h1" size="page-title-lg" className="leading-tight">
              Proyectos Recientes
            </Heading>
          </SlideUp>
        </Container>
      </Section>

      {/* Projects - Dark */}
      <Section className="bg-background relative overflow-hidden py-48">
        <BackgroundGlow position="bottom-left" size="xl" color="accent-light" opacity={0.07} />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>

        <Container>
          <div className="space-y-48">
            {projects.map((project, index) => (
              <SlideUp key={project.number} delay={0.1 * (index + 1)} distance={60} scale={0.96}>
                <ProjectCard
                  number={project.number}
                  name={project.name}
                  category={project.category}
                  status={project.status}
                  description={project.description}
                  services={project.services}
                  technologies={project.technologies}
                  demoUrl={project.href}
                  sourceUrl={project.sourceUrl}
                  previewUrl={project.previewUrl}
                />
              </SlideUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section - Dark */}
      <Section className="bg-background-secondary relative overflow-hidden py-48">
        <BackgroundGlow position="top-left" size="xl" color="accent" opacity={0.15} />
        <BackgroundGlow position="bottom-right" size="xl" color="accent-light" opacity={0.1} />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Oversized background typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] pointer-events-none opacity-[0.05]">
          <div className="text-[35vw] font-bold text-primary leading-none tracking-[-0.03em] whitespace-nowrap">
            TOGETHER
          </div>
        </div>

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-16 relative">
            <SlideUp distance={50} scale={0.97}>
              <Heading level="h2" size="section-title-lg" className="leading-tight text-primary">
                ¿Interesado en trabajar juntos?
              </Heading>
            </SlideUp>
            <SlideUp delay={0.2} distance={40} scale={0.98}>
              <Text size="body-lg" className="max-w-2xl mx-auto leading-[1.8] text-secondary">
                Hablemos de cómo QuickPages puede ayudar a dar vida a su visión.
              </Text>
            </SlideUp>
            <SlideUp delay={0.4} distance={30} scale={0.99}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-small text-secondary hover:text-accent transition-colors duration-300"
              >
                Iniciar un Proyecto
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </Link>
            </SlideUp>
          </div>
        </Container>
      </Section>
    </>
  );
}
