"use client";

import Link from "next/link";
import { Heading, Text } from "@/components/typography";
import { ProcessStep } from "@/components/cards";
import { Container, Section } from "@/components/layout";
import { SlideUp } from "@/components/animations";
import { BackgroundGlow, NoiseOverlay } from "@/components/backgrounds";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description:
        "Comprender el negocio, identificar objetivos y definir el alcance del proyecto.",
    },
    {
      number: "02",
      title: "Estrategia",
      description:
        "Crear la estructura del contenido, organizar la navegación y definir el flujo del usuario.",
    },
    {
      number: "03",
      title: "Diseño",
      description:
        "Desarrollar una interfaz limpia y moderna enfocada en la experiencia del usuario.",
    },
    {
      number: "04",
      title: "Desarrollo",
      description:
        "Transformar diseños aprobados en sitios web responsivos y de alto rendimiento.",
    },
    {
      number: "05",
      title: "Revisión",
      description:
        "Probar funcionalidad, revisar accesibilidad y asegurar estándares de calidad.",
    },
    {
      number: "06",
      title: "Lanzamiento",
      description:
        "Desplegar el sitio web, verificar rendimiento y proporcionar soporte continuo.",
    },
  ];

  return (
    <>
      <NoiseOverlay opacity={0.02} />
      
      {/* Page Header - Light */}
      <Section className="pt-40 pb-24 bg-background relative overflow-hidden">
        <BackgroundGlow position="top-right" size="xl" color="accent" opacity={0.04} />
        
        {/* Oversized background typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] pointer-events-none">
          <div className="text-[30vw] font-bold text-accent/4 leading-none tracking-tighter whitespace-nowrap">
            PROCESS
          </div>
        </div>
        
        <Container>
          <SlideUp distance={50} scale={0.97}>
            <Text size="small" color="secondary" className="font-medium tracking-[0.3em] uppercase mb-8">
              Cómo Trabajamos
            </Text>
            <Heading level="h1" size="page-title-lg" className="leading-tight">
              Proceso
            </Heading>
          </SlideUp>
        </Container>
      </Section>

      {/* Process Timeline - Dark */}
      <Section className="bg-surface-navy relative overflow-hidden py-48">
        <BackgroundGlow position="top-left" size="xl" color="accent" opacity={0.07} />
        <BackgroundGlow position="bottom-right" size="xl" color="accent-light" opacity={0.05} />
        
        {/* Oversized background typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] pointer-events-none">
          <div className="text-[32vw] font-bold text-surface/5 leading-none tracking-tighter whitespace-nowrap">
            JOURNEY
          </div>
        </div>
        
        <Container>
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <SlideUp key={step.number} delay={index * 0.05} distance={40} scale={0.96}>
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </SlideUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section - Light */}
      <Section className="bg-background relative overflow-hidden py-48">
        <BackgroundGlow position="top-right" size="xl" color="accent" opacity={0.04} />
        <BackgroundGlow position="bottom-left" size="xl" color="accent-light" opacity={0.03} />
        
        {/* Oversized background typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] pointer-events-none">
          <div className="text-[35vw] font-bold text-accent/4 leading-none tracking-tighter whitespace-nowrap">
            START
          </div>
        </div>
        
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-16 relative">
            <SlideUp distance={50} scale={0.97}>
              <Heading level="h2" size="section-title-lg">
                ¿Listo para comenzar su proyecto?
              </Heading>
            </SlideUp>
            <SlideUp delay={0.2} distance={40} scale={0.98}>
              <Text size="body-lg" className="max-w-2xl mx-auto leading-relaxed">
                Empecemos con una conversación sobre sus objetivos y visión.
              </Text>
            </SlideUp>
            <SlideUp delay={0.4} distance={30} scale={0.99}>
              <Link href="/contact">
                <button className="group flex items-center gap-4 text-small text-secondary hover:text-primary transition-colors">
                  Iniciar un Proyecto
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </Link>
            </SlideUp>
          </div>
        </Container>
      </Section>
    </>
  );
}
