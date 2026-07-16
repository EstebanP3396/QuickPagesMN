import Link from "next/link";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/animations";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/marquee/Marquee";

const footerNavItems = [
  { name: "Inicio", href: "/" },
  { name: "Trabajo", href: "/work" },
  { name: "Servicios", href: "/services" },
  { name: "Proceso", href: "/process" },
  { name: "Contacto", href: "/contact" },
];

const socialItems = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Behance", href: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <Container>
        <div className="py-20 tablet:py-24">
          {/* Top row */}
          <div className="grid grid-cols-1 gap-12 tablet:grid-cols-12 tablet:gap-8">
            <div className="tablet:col-span-6">
              <FadeIn>
                <p className="font-display text-small font-500 uppercase tracking-[0.3em] text-muted">
                  ( Empecemos )
                </p>
                <a
                  href="mailto:hello@quickpages.com"
                  className="group mt-6 inline-flex items-start gap-3 font-display text-section-title font-800 uppercase leading-[0.95] tracking-[-0.03em] text-primary tablet:text-section-title-lg"
                >
                  <span className="text-balance">Hablemos</span>
                  <ArrowUpRight
                    className="mt-2 h-8 w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 tablet:h-10 tablet:w-10"
                    strokeWidth={1.5}
                  />
                </a>
              </FadeIn>
            </div>

            <div className="tablet:col-span-3">
              <FadeIn delay={0.1}>
                <p className="mb-6 font-display text-small font-500 uppercase tracking-[0.2em] text-muted">
                  Navegación
                </p>
                <ul className="space-y-3">
                  {footerNavItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-display text-small-lg font-500 uppercase tracking-[0.04em] text-secondary transition-colors duration-200 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <div className="tablet:col-span-3">
              <FadeIn delay={0.2}>
                <p className="mb-6 font-display text-small font-500 uppercase tracking-[0.2em] text-muted">
                  Redes
                </p>
                <ul className="space-y-3">
                  {socialItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-1 font-display text-small-lg font-500 uppercase tracking-[0.04em] text-secondary transition-colors duration-200 hover:text-primary"
                      >
                        {item.name}
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>

          {/* Oversized wordmark */}
          <div className="mt-20 border-t border-border pt-10 overflow-hidden">
  <Marquee
    items={[
      "QuickPages",
      "QuickPages",
      "QuickPages",
      "QuickPages",
    ]}
  />
</div>

          {/* Bottom row */}
          <div className="mt-10 flex flex-col items-start justify-between gap-4 tablet:flex-row tablet:items-center">
            <p className="font-display text-small font-500 uppercase tracking-[0.16em] text-muted">
              © {currentYear} QuickPages — Estudio Web Creativo
            </p>
            <p className="font-display text-small font-500 uppercase tracking-[0.16em] text-muted">
              Diseñado con intención. Construido con cuidado.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
