"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/buttons";
import { ServiceCard } from "@/components/cards";
import { ProcessTimeline } from "@/components/process";
import { Container, Section } from "@/components/layout";
import { FadeIn, SlideUp, Parallax } from "@/components/animations";
import { Navbar, Footer, ScrollProgress } from "@/components/navigation";
import { NoiseOverlay } from "@/components/backgrounds";
import { Marquee } from "@/components/marquee/Marquee";
import { IntroLoader } from "@/components/loader/IntroLoader";

const projects = [
  {
    number: "01",
    name: "Aura Skin Color",
    category: "E-commerce · Marca",
    year: "2025",
    href: "https://aura-skin-color.vercel.app/",
  },
  {
    number: "02",
    name: "Sitio Web QuickPages",
    category: "Identidad · Desarrollo",
    year: "2025",
    href: "https://quickpages-khaki.vercel.app/",
  },
  {
    number: "03",
    name: "Concepto QuickPages",
    category: "Concepto · Landing",
    year: "2024",
    href: "https://landing-clients-ochre.vercel.app/",
  },
];

const services = [
  {
    name: "Landing Pages",
    description:
      "Páginas de aterrizaje modernas diseñadas para generar confianza, comunicar valor y convertir.",
    benefit: "Más conversiones con diseño intencional.",
  },
  {
    name: "Sitios de Negocio",
    description:
      "Presencia digital completa para negocios listos para establecer credibilidad y crecer.",
    benefit: "Confianza duradera con diseño profesional.",
  },
  {
    name: "Portafolios",
    description:
      "Portafolios editoriales para creativos que quieren que su trabajo hable por sí mismo.",
    benefit: "Muestre su trabajo con impacto.",
  },
  {
    name: "Rediseño Web",
    description:
      "Transforme sitios desactualizados en experiencias modernas y de alto rendimiento.",
    benefit: "Revitalice su presencia en línea.",
  },
];

export default function Home() {
  return (
    <>
      <IntroLoader />
      <NoiseOverlay opacity={0.03} />
      <ScrollProgress />
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-background pb-10">
        {/* oversized outline backdrop word */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Parallax speed={0.25}>
            <span className="text-stroke-thin select-none font-display text-[42vw] font-900 leading-none tracking-[-0.05em]">
              QP
            </span>
          </Parallax>
        </div>

       
        <Container className="relative flex flex-1 items-center py-12 tablet:py-16">
          <h1 className="w-full font-display font-900 uppercase leading-[0.82] tracking-[-0.04em] text-primary">
            <SlideUp delay={0.2} distance={60}>
              <span className="block text-[15vw] tablet:text-[12vw] desktop:text-[8.5rem]">
                No son
              </span>
            </SlideUp>
            <SlideUp delay={0.32} distance={60}>
              <span className="block text-stroke text-[15vw] tablet:text-[12vw] desktop:text-[8.5rem]">
                plantillas.
              </span>
            </SlideUp>
            <SlideUp delay={0.44} distance={60}>
              <span className="block text-[13vw] tablet:text-[10.5vw] desktop:text-[8.5rem]">
                Son perspectivas.
              </span>
            </SlideUp>
          </h1>
        </Container>

        <Container className="relative">
          <div className="flex flex-col gap-8 border-t border-border pt-8 tablet:flex-row tablet:items-end tablet:justify-between">
            <SlideUp delay={0.5} distance={30}>
              <p className="max-w-md text-body leading-relaxed text-secondary text-pretty">
                QuickPages es un estudio boutique que crea sitios web premium
                para marcas que valoran la artesanía y el detalle.
              </p>
            </SlideUp>
            <FadeIn delay={0.7}>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button size="lg" magnetic>
                    Iniciar Proyecto
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="secondary" size="lg">
                    Ver Trabajo
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="border-y border-border bg-background py-6 text-[9vw] leading-none text-primary tablet:py-8 tablet:text-[5vw]">
        <Marquee
          items={[
            "Somos QuickPages",
            "Diseño con perspectiva",
            "Estudio Creativo",
          ]}
        />
      </div>

      {/* ===== MANIFESTO ===== */}
      <Section className="relative overflow-hidden bg-background">
        <Container>
          <SlideUp distance={40}>
            <p className="mb-16 font-display text-small font-500 uppercase tracking-[0.3em] text-muted">
              ( El manifiesto )
            </p>
          </SlideUp>
          <div className="max-w-6xl">
            <SlideUp distance={50}>
              <h2 className="font-display text-section-title font-800 uppercase leading-[1.02] tracking-[-0.03em] text-pretty tablet:text-page-title desktop:text-page-title-lg">
                <span className="text-primary">La mayoría de las marcas </span>
                <span className="text-muted">producen contenido. </span>
                <span className="text-primary">
                  Nosotros preferimos las ideas.
                </span>
              </h2>
            </SlideUp>
            <SlideUp delay={0.15} distance={40}>
              <p className="mt-12 max-w-2xl text-body-lg leading-relaxed text-secondary text-pretty">
                En un mundo de imágenes infinitas, lo raro es la claridad. El
                diseño defiende ideas, las experiencias cambian la percepción y
                las marcas transforman la forma en que las personas ven el mundo.
              </p>
            </SlideUp>
          </div>
        </Container>
      </Section>

      {/* ===== SELECTED WORK ===== */}
      <Section className="relative overflow-hidden border-t border-border bg-background">
        <Container>
          <SlideUp distance={40}>
            <div className="mb-16 flex items-end justify-between gap-8">
              <div>
                <p className="mb-6 font-display text-small font-500 uppercase tracking-[0.3em] text-muted">
                  ( Trabajo seleccionado )
                </p>
                <h2 className="font-display text-section-title font-800 uppercase leading-none tracking-[-0.03em] text-primary tablet:text-section-title-lg">
                  Proyectos
                </h2>
              </div>
              <Link
                href="/work"
                className="group hidden items-center gap-2 font-display text-small font-500 uppercase tracking-[0.12em] text-secondary transition-colors duration-300 hover:text-primary tablet:flex"
              >
                Ver todo
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </SlideUp>

          <div className="border-t border-border">
            {projects.map((project, index) => (
              <SlideUp key={project.number} delay={index * 0.08} distance={30}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between overflow-hidden border-b border-border py-8 tablet:py-10"
                >
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-surface transition-all duration-500 ease-out group-hover:h-full" />
                  <div className="relative z-10 flex items-baseline gap-5 tablet:gap-10 px-2 tablet:px-6 transition-transform duration-500 group-hover:translate-x-2 tablet:group-hover:translate-x-4">
                    <span className="font-display text-small font-600 tracking-[0.1em] text-muted">
                      {project.number}
                    </span>
                    <span className="font-display text-subtitle font-800 uppercase leading-none tracking-[-0.02em] text-primary tablet:text-page-title">
                      {project.name}
                    </span>
                  </div>
                  <div className="relative z-10 flex items-center gap-6 px-2 tablet:px-6">
                    <span className="hidden font-display text-small font-500 uppercase tracking-[0.14em] text-secondary tablet:block">
                      {project.category}
                    </span>
                    <span className="hidden font-display text-small font-500 text-muted desktop:block">
                      {project.year}
                    </span>
                    <ArrowUpRight
                      className="h-6 w-6 shrink-0 text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 tablet:h-8 tablet:w-8"
                      strokeWidth={1.25}
                    />
                  </div>
                </a>
              </SlideUp>
            ))}
          </div>

          <div className="pt-10 tablet:hidden">
            <Link
              href="/work"
              className="group flex items-center gap-2 font-display text-small font-500 uppercase tracking-[0.12em] text-secondary"
            >
              Ver todo el trabajo
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ===== SERVICES ===== */}
      <Section className="relative overflow-hidden border-t border-border bg-background">
        <Container>
          <SlideUp distance={40}>
            <div className="mb-16 flex items-end justify-between gap-8">
              <div>
                <p className="mb-6 font-display text-small font-500 uppercase tracking-[0.3em] text-muted">
                  ( Lo que hacemos )
                </p>
                <h2 className="font-display text-section-title font-800 uppercase leading-none tracking-[-0.03em] text-primary tablet:text-section-title-lg">
                  Servicios
                </h2>
              </div>
              <Link
                href="/services"
                className="group hidden items-center gap-2 font-display text-small font-500 uppercase tracking-[0.12em] text-secondary transition-colors duration-300 hover:text-primary tablet:flex"
              >
                Todos los servicios
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 gap-px bg-border tablet:grid-cols-2 desktop:grid-cols-4">
            {services.map((service, index) => (
              <SlideUp
                key={service.name}
                delay={index * 0.08}
                distance={30}
                className="h-full"
              >
                <ServiceCard
                  index={`0${index + 1}`}
                  name={service.name}
                  description={service.description}
                  benefit={service.benefit}
                />
              </SlideUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== PROCESS ===== */}
      <Section className="relative overflow-hidden border-t border-border bg-background">
        <Container>
          <SlideUp distance={40}>
            <div className="mb-20">
              <p className="mb-6 font-display text-small font-500 uppercase tracking-[0.3em] text-muted">
                ( Cómo trabajamos )
              </p>
              <h2 className="font-display text-section-title font-800 uppercase leading-none tracking-[-0.03em] text-primary tablet:text-section-title-lg">
                Proceso
              </h2>
            </div>
          </SlideUp>

          <SlideUp delay={0.1} distance={60}>
            <ProcessTimeline
              steps={[
                {
                  number: "01",
                  title: "Descubrimiento",
                  description:
                    "Comprender el negocio, identificar objetivos y definir el alcance.",
                },
                {
                  number: "02",
                  title: "Estrategia",
                  description:
                    "Crear la estructura del contenido y definir el flujo del usuario.",
                },
                {
                  number: "03",
                  title: "Diseño",
                  description:
                    "Desarrollar una interfaz limpia y moderna enfocada en la experiencia.",
                },
                {
                  number: "04",
                  title: "Desarrollo",
                  description:
                    "Transformar diseños en sitios responsivos y de alto rendimiento.",
                },
                {
                  number: "05",
                  title: "Revisión",
                  description:
                    "Probar funcionalidad, accesibilidad y estándares de calidad.",
                },
                {
                  number: "06",
                  title: "Lanzamiento",
                  description:
                    "Desplegar, verificar rendimiento y ofrecer soporte continuo.",
                },
              ]}
            />
          </SlideUp>
        </Container>
      </Section>

      {/* ===== CTA ===== */}
      <Section className="relative overflow-hidden border-t border-border bg-background">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SlideUp distance={40}>
              <p className="mb-10 font-display text-small font-500 uppercase tracking-[0.3em] text-muted">
                ( ¿Empezamos? )
              </p>
            </SlideUp>
            <SlideUp delay={0.1} distance={50}>
              <h2 className="font-display text-[14vw] font-900 uppercase leading-[0.85] tracking-[-0.04em] text-primary tablet:text-[10rem]">
                Creemos
                <br />
                algo real
              </h2>
            </SlideUp>
            <SlideUp delay={0.25} distance={30}>
              <div className="mt-14">
                <Link href="/contact">
                  <Button size="lg" magnetic>
                    Iniciar un Proyecto
                  </Button>
                </Link>
              </div>
            </SlideUp>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
