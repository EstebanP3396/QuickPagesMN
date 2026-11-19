export interface Project {
  number: string;
  name: string;
  tagline: string;
  category: string;
  status: string;
  year: string;
  description: string;
  services: string[];
  technologies: string[];
  href: string;
  previewUrl: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Aura Skin Color",
    tagline: "E-commerce · Marca",
    category: "Proyecto de Cliente",
    status: "Completado",
    year: "2025",
    description:
      "Un sitio web real creado para un negocio de belleza, enfocado en presentar servicios profesionalmente mientras se construye credibilidad y se mejora la experiencia del cliente.",
    services: ["E-commerce", "Diseño", "Desarrollo"],
    technologies: ["Shopify", "Liquid", "CSS Personalizado"],
    href: "https://aura-skin-color.vercel.app/",
    previewUrl: "https://aura-skin-color.vercel.app/",
    sourceUrl: "#",
  },
  {
    number: "02",
    name: "Sitio Web QuickPages",
    tagline: "Identidad · Desarrollo",
    category: "Evolución de Marca",
    status: "En Progreso",
    year: "2025",
    description:
      "La segunda iteración de la identidad de QuickPages, introduciendo una marca más fuerte, componentes de UI refinados y una dirección visual más premium.",
    services: ["Diseño", "Desarrollo", "SEO"],
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    href: "https://quickpages-khaki.vercel.app/",
    previewUrl: "https://quickpages-khaki.vercel.app/",
    sourceUrl: "#",
  },
  {
    number: "03",
    name: "Concepto QuickPages",
    tagline: "Concepto · Landing",
    category: "Concepto Interno",
    status: "Completado",
    year: "2024",
    description:
      "Una exploración temprana del lenguaje visual de QuickPages, enfocada en la estructura de landing pages modernas, jerarquía limpia y diseños orientados a la conversión.",
    services: ["Diseño", "Desarrollo"],
    technologies: ["React", "Tailwind CSS", "Vercel"],
    href: "https://quickpagesmq.vercel.app/",
    previewUrl: "https://landing-clients-ochre.vercel.app/",
    sourceUrl: "#",
  },
  {
    number: "04",
    name: "QuickPages — Creative Web Studio",
    tagline: "Estudio · Identidad",
    category: "Estudio Creativo",
    status: "Completado",
    year: "2026",
    description:
      "El sitio oficial de QuickPages: un estudio boutique que crea sitios web premium con perspectiva, diseño cuidado y un proceso claro de principio a fin.",
    services: ["Diseño", "Desarrollo", "Estrategia"],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://quickpagesgt18-onuqd2l4u-estebanp3396s-projects.vercel.app/",
    previewUrl: "/projects/creative-web-studio.png",
    sourceUrl: "#",
  },
];
