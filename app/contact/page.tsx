import type { Metadata } from "next";
import { ArrowUpRight, Instagram, MessageCircle, type LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { Footer, Navbar } from "@/components/navigation";
import { NoiseOverlay } from "@/components/backgrounds";

export const metadata: Metadata = {
  title: "Iniciar un Proyecto — QuickPages",
  description:
    "Inicia tu proyecto con QuickPages. Escríbenos por Instagram o WhatsApp.",
};

const whatsappMessage = "Hola QuickPages, quiero iniciar un proyecto.";

const channels: {
  label: string;
  value: string;
  description: string;
  href: string;
  Icon: LucideIcon;
}[] = [
  {
    label: "Instagram",
    value: "@quickpages.col",
    description: "Escríbenos por mensaje directo y cuéntanos tu idea.",
    href: "https://www.instagram.com/quickpages.col/",
    Icon: Instagram,
  },
  {
    label: "WhatsApp",
    value: "+57 321 369 5139",
    description: "Habla directamente con el equipo y define los siguientes pasos.",
    href: `https://wa.me/573213695139?text=${encodeURIComponent(whatsappMessage)}`,
    Icon: MessageCircle,
  },
];

export default function ContactPage() {
  return (
    <>
      <NoiseOverlay opacity={0.03} />
      <Navbar />

      <Section className="relative overflow-hidden bg-background pt-40 pb-32">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-6 font-display text-small font-500 uppercase tracking-[0.3em] text-muted">
              ( Contacto )
            </p>
            <h1 className="font-display text-page-title-lg font-800 uppercase leading-[0.95] tracking-[-0.03em] text-primary">
              Iniciar un proyecto
            </h1>
            <p className="mt-10 max-w-2xl text-body-lg leading-relaxed text-secondary text-pretty">
              Elige el canal que prefieras para comenzar. Te responderemos para
              entender tu idea y proponerte el mejor camino.
            </p>
          </div>

          <ul className="mt-20 grid grid-cols-1 gap-px border border-border bg-border tablet:grid-cols-2">
            {channels.map(({ label, value, description, href, Icon }) => (
              <li key={label} className="bg-background">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-16 p-8 transition-colors duration-300 hover:bg-surface tablet:p-12"
                >
                  <div className="flex items-start justify-between gap-6">
                    <Icon className="h-10 w-10 text-primary" strokeWidth={1.25} aria-hidden="true" />
                    <ArrowUpRight
                      className="h-8 w-8 text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-display text-small font-500 uppercase tracking-[0.2em] text-muted">
                      {label}
                    </p>
                    <p className="mt-4 font-display text-subtitle font-800 uppercase leading-none tracking-[-0.02em] text-primary">
                      {value}
                    </p>
                    <p className="mt-6 max-w-sm text-body leading-relaxed text-secondary">
                      {description}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
