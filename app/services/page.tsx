"use client";

import Link from "next/link";
import { Heading, Text } from "@/components/typography";
import { ServiceCard } from "@/components/cards";
import { Container, Section } from "@/components/layout";
import { SlideUp } from "@/components/animations";
import { BackgroundGlow, NoiseOverlay } from "@/components/backgrounds";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Landing Pages",
      description:
        "Landing pages modernas diseñadas para generar confianza, comunicar valor y convertir visitantes en clientes.",
      benefit: "Aumente las tasas de conversión con diseño intencional",
    },
    {
      name: "Sitios Web de Negocios",
      description:
        "Presencia digital completa para negocios listos para establecer credibilidad y crecer en línea.",
      benefit: "Construya confianza duradera con diseño profesional",
    },
    {
      name: "Sitios Web de Portafolio",
      description:
        "Portafolios editoriales para creativos que quieren que su trabajo hable por sí mismo.",
      benefit: "Muestre su trabajo con elegancia e impacto",
    },
    {
      name: "Rediseño de Sitios Web",
      description:
        "Transforme sitios web desactualizados en experiencias digitales modernas y de alto rendimiento.",
      benefit: "Revitalice su presencia en línea",
    },
    {
      name: "Desarrollo Responsivo",
      description:
        "Sitios web que se adaptan perfectamente en todos los dispositivos, asegurando una experiencia consistente para cada visitante.",
      benefit: "Alcance a su audiencia dondequiera que esté",
    },
    {
      name: "Optimización de Rendimiento",
      description:
        "Mejoras de velocidad que mejoran la experiencia del usuario y los rankings en motores de búsqueda.",
      benefit: "Sitios web más rápidos, mejores resultados",
    },
    {
      name: "Fundamentos de SEO",
      description:
        "Implementación de SEO técnico que ayuda a su negocio a ser descubierto en línea.",
      benefit: "Mejore la visibilidad y el tráfico orgánico",
    },
    {
      name: "Despliegue y Mantenimiento",
      description:
        "Alojamiento confiable y soporte continuo para mantener su sitio web seguro y actualizado.",
      benefit: "Tranquilidad con cuidado profesional",
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
            SERVICES
          </div>
        </div>
        
        <Container>
          <SlideUp distance={50} scale={0.97}>
            <Text size="small" color="secondary" className="font-medium tracking-[0.3em] uppercase mb-8">
              Lo Que Hacemos
            </Text>
            <Heading level="h1" size="page-title-lg" className="leading-tight">
              Servicios
            </Heading>
          </SlideUp>
        </Container>
      </Section>

      {/* Services Grid - Dark */}
      <Section className="bg-surface-navy relative overflow-hidden py-48">
        <BackgroundGlow position="top-left" size="xl" color="accent" opacity={0.07} />
        <BackgroundGlow position="bottom-right" size="xl" color="accent-light" opacity={0.05} />
        
        {/* Oversized background typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] pointer-events-none">
          <div className="text-[32vw] font-bold text-surface/5 leading-none tracking-tighter whitespace-nowrap">
            EXPERTISE
          </div>
        </div>
        
        <Container>
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <SlideUp key={service.name} delay={index * 0.05} distance={40} scale={0.96}>
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  benefit={service.benefit}
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
            BEGIN
          </div>
        </div>
        
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-16 relative">
            <SlideUp distance={50} scale={0.97}>
              <Heading level="h2" size="section-title-lg">
                ¿Listo para comenzar?
              </Heading>
            </SlideUp>
            <SlideUp delay={0.2} distance={40} scale={0.98}>
              <Text size="body-lg" className="max-w-2xl mx-auto leading-relaxed">
                Hablemos de cómo QuickPages puede ayudar a su negocio a crecer en línea.
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
