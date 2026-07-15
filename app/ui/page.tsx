import {
  Heading,
  Text,
} from "@/components/typography";
import {
  Button,
  IconButton,
  Badge,
} from "@/components/buttons";
import {
  Card,
  ProjectCard,
  ServiceCard,
  ProcessStep,
  Accordion,
} from "@/components/cards";
import {
  Input,
  Textarea,
  FormField,
} from "@/components/forms";
import {
  Container,
  Section,
} from "@/components/layout";
import { Menu, X, ExternalLink } from "lucide-react";

export default function DesignSystemShowcase() {
  const accordionItems = [
    {
      id: "1",
      question: "¿Qué es QuickPages?",
      answer: "QuickPages es un estudio web creativo boutique enfocado en diseñar y desarrollar experiencias digitales modernas para pequeñas empresas y emprendedores.",
    },
    {
      id: "2",
      question: "¿Qué servicios ofrecen?",
      answer: "Ofrecemos landing pages, sitios web de negocios, portafolios creativos, rediseños de sitios web, optimización SEO, optimización de rendimiento, despliegue y servicios de mantenimiento.",
    },
    {
      id: "3",
      question: "¿Cuál es su proceso?",
      answer: "Nuestro proceso incluye fases de descubrimiento, planificación, diseño, desarrollo, optimización y lanzamiento para asegurar un sitio web completo y profesional.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Section>
        <Container>
          <Heading level="h1" size="hero-lg" className="mb-6">
            Sistema de Diseño
          </Heading>
          <Text size="body-lg" color="secondary" className="mb-16 max-w-3xl">
            Una exhibición completa de todos los componentes reutilizables en el sistema de diseño de QuickPages.
            Cada componente sigue pautas de diseño estrictas para
            consistencia, accesibilidad y rendimiento.
          </Text>
        </Container>
      </Section>

      {/* Typography */}
      <Section>
        <Container>
          <Heading level="h2" size="section-title" className="mb-8">
            Tipografía
          </Heading>

          <div className="space-y-12">
            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Hero
              </Text>
              <Heading level="h1" size="hero">
                Hero Text - 72px
              </Heading>
              <Heading level="h1" size="hero-lg" className="mt-4">
                Hero Large - 96px
              </Heading>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Título de Página
              </Text>
              <Heading level="h2" size="page-title">
                Título de Página - 56px
              </Heading>
              <Heading level="h2" size="page-title-lg" className="mt-4">
                Título de Página Large - 64px
              </Heading>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Título de Sección
              </Text>
              <Heading level="h3" size="section-title">
                Título de Sección - 40px
              </Heading>
              <Heading level="h3" size="section-title-lg" className="mt-4">
                Título de Sección Large - 48px
              </Heading>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Subtítulo
              </Text>
              <Heading level="h4" size="subtitle">
                Subtítulo - 24px
              </Heading>
              <Heading level="h4" size="subtitle-lg" className="mt-4">
                Subtítulo Large - 32px
              </Heading>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Texto de Cuerpo
              </Text>
              <Text size="body">
                Texto de cuerpo - 18px. Este es el tamaño estándar para contenido de párrafos.
                Proporciona excelente legibilidad y se usa para la mayoría
                del texto descriptivo en todo el sitio web.
              </Text>
              <Text size="body-lg" className="mt-4">
                Cuerpo grande - 20px. Usado para énfasis en texto de cuerpo o cuando
                se necesita texto ligeramente más grande para legibilidad.
              </Text>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Texto Pequeño
              </Text>
              <Text size="small">
                Texto pequeño - 14px. Usado para subtítulos, metadatos e información secundaria.
              </Text>
              <Text size="small-lg" className="mt-4">
                Pequeño grande - 16px. Usado para texto pequeño ligeramente más grande.
              </Text>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Texto de Etiqueta
              </Text>
              <Text size="label">
                Texto de etiqueta - 12px. Usado para etiquetas de formulario, etiquetas de botón y
                otros elementos pequeños de UI.
              </Text>
              <Text size="label-lg" className="mt-4">
                Etiqueta grande - 14px. Usado para etiquetas ligeramente más grandes.
              </Text>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Colores de Texto
              </Text>
              <Text size="body" color="primary">
                Color de texto primario
              </Text>
              <Text size="body" color="secondary" className="mt-2">
                Color de texto secundario
              </Text>
              <Text size="body" color="accent" className="mt-2">
                Color de texto de acento
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section>
        <Container>
          <Heading level="h2" size="section-title" className="mb-8">
            Botones
          </Heading>

          <div className="space-y-12">
            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Botón Primario
              </Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Mediano
                </Button>
                <Button variant="primary" size="lg">
                  Grande
                </Button>
              </div>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Botón Secundario
              </Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">
                  Small
                </Button>
                <Button variant="secondary" size="md">
                  Mediano
                </Button>
                <Button variant="secondary" size="lg">
                  Grande
                </Button>
              </div>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Botón de Icono
              </Text>
              <div className="flex flex-wrap gap-4">
                <IconButton icon={Menu} variant="primary" label="Menu" />
                <IconButton icon={X} variant="secondary" label="Close" />
                <IconButton
                  icon={ExternalLink}
                  variant="primary"
                  label="External Link"
                  iconSize={24}
                />
              </div>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Estado Deshabilitado
              </Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" disabled>
                  Primario Deshabilitado
                </Button>
                <Button variant="secondary" disabled>
                  Secundario Deshabilitado
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Badges */}
      <Section>
        <Container>
          <Heading level="h2" size="section-title" className="mb-8">
            Insignias
          </Heading>

          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Insignia Predeterminada</Badge>
            <Badge variant="accent">Insignia de Acento</Badge>
            <Badge variant="default">Categoría</Badge>
            <Badge variant="accent">Estado</Badge>
          </div>
        </Container>
      </Section>

      {/* Cards */}
      <Section>
        <Container>
          <Heading level="h2" size="section-title" className="mb-8">
            Tarjetas
          </Heading>

          <div className="space-y-12">
            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Tarjeta Base
              </Text>
              <Card>
                <div className="p-8">
                  <Heading level="h3" size="section-title" className="mb-4">
                    Título de Tarjeta
                  </Heading>
                  <Text size="body" color="secondary">
                    Esta es un componente de tarjeta base con fondo de superficie,
                    borde y sombra sutil.
                  </Text>
                </div>
              </Card>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Tarjeta de Proyecto
              </Text>
              <ProjectCard
                number="01"
                name="Concepto QuickPages"
                category="Concepto Interno"
                status="Completado"
                description="Una landing page conceptual que demuestra principios de diseño modernos y estética limpia."
                services={["Diseño", "Desarrollo"]}
                technologies={["React", "Tailwind CSS", "Vercel"]}
                demoUrl="https://example.com"
                sourceUrl="https://github.com"
              />
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Tarjeta de Servicio
              </Text>
              <ServiceCard
                name="Landing Pages"
                description="Landing pages modernas diseñadas para presentar su negocio claramente y convertir visitantes en clientes."
                benefit="Aumente las tasas de conversión con diseño intencional"
              />
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Paso de Proceso
              </Text>
              <ProcessStep
                number="01"
                title="Descubrimiento"
                description="Comprender el negocio, identificar objetivos y definir el alcance del proyecto."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Forms */}
      <Section>
        <Container>
          <Heading level="h2" size="section-title" className="mb-8">
            Formularios
          </Heading>

          <div className="space-y-12">
            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Entrada
              </Text>
              <div className="max-w-md space-y-6">
                <Input label="Nombre" placeholder="Ingrese su nombre" />
                <Input
                  label="Correo Electrónico"
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                />
                <Input
                  label="Entrada Deshabilitada"
                  placeholder="Esto está deshabilitado"
                  disabled
                />
                <Input
                  label="Entrada con Error"
                  placeholder="Ingrese su valor"
                  error="Este campo es requerido"
                />
              </div>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Área de Texto
              </Text>
              <div className="max-w-md space-y-6">
                <Textarea
                  label="Mensaje"
                  placeholder="Ingrese su mensaje"
                />
                <Textarea
                  label="Área de Texto Deshabilitada"
                  placeholder="Esto está deshabilitado"
                  disabled
                />
                <Textarea
                  label="Área de Texto con Error"
                  placeholder="Ingrese su mensaje"
                  error="Este campo es requerido"
                />
              </div>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Campo de Formulario
              </Text>
              <FormField>
                <label className="text-label text-secondary font-medium">
                  Campo Personalizado
                </label>
                <input
                  className="rounded-input border border-border bg-surface px-4 py-3 text-body text-primary placeholder:text-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  placeholder="Entrada personalizada"
                />
              </FormField>
            </div>
          </div>
        </Container>
      </Section>

      {/* Accordion */}
      <Section>
        <Container>
          <Heading level="h2" size="section-title" className="mb-8">
            Acordeón
          </Heading>

          <div className="max-w-3xl">
            <Accordion items={accordionItems} />
          </div>
        </Container>
      </Section>

      {/* Container & Section */}
      <Section>
        <Container>
          <Heading level="h2" size="section-title" className="mb-8">
            Componentes de Diseño
          </Heading>

          <div className="space-y-12">
            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Contenedor
              </Text>
              <div className="bg-surface rounded-card border border-border p-8">
                <Text size="body" color="secondary">
                  Este contenido está envuelto en un componente Contenedor. Proporciona
                  un ancho máximo de 1280px y relleno responsivo (24px móvil,
                  48px tablet, 80px desktop).
                </Text>
              </div>
            </div>

            <div>
              <Text size="small" color="secondary" className="mb-4 font-medium">
                Sección
              </Text>
              <div className="bg-surface rounded-card border border-border p-8">
                <Text size="body" color="secondary">
                  Este contenido está envuelto en un componente Sección. Proporciona
                  espaciado vertical generoso (96px móvil, 128px tablet, 160px
                  desktop).
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Text size="body" color="secondary">
            Exhibición del Sistema de Diseño - Solo Desarrollo
          </Text>
        </Container>
      </Section>
    </main>
  );
}
