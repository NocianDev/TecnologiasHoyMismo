export type PortfolioProject = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metric: string;
  metricLabel: string;
  extra: string;
  color: "green" | "purple" | "cyan" | "blue" | "yellow";
  featured?: boolean;

  // 🔥 NUEVO (NO rompe nada)
  image?: string;
  url?: string;
  type?: string;
};

export const IA_PROJECTS: PortfolioProject[] = [
  {
    title: "Hoy Mismo Assistant — Recepcionista virtual con IA",
    subtitle: "Solución propia de inteligencia artificial",
    description:
      "Asistente inteligente diseñado para responder llamadas, orientar clientes y automatizar conversaciones.",
    tech: ["OpenRouter", "ElevenLabs", "OpenAI", "MongoDB", "Voice AI"],
    metric: "24/7",
    metricLabel: "Disponibilidad",
    extra:
      "Captación de leads y atención automatizada con voz.",
    color: "purple",
    featured: true,

    // opcional
    image: "/images/portfolio/ia-assistant.png",
    type: "Inteligencia Artificial",
  },
];

export const API_PROJECTS: PortfolioProject[] = [
  {
    title: "A Huevo Es Verde",
    subtitle: "API para restaurante",
    description:
      "Gestión de menú, productos y pedidos para restaurante.",
    tech: ["Node.js", "Express", "REST API"],
    metric: "API",
    metricLabel: "Automatización",
    extra:
      "Centraliza información y conecta sistemas.",
    color: "yellow",

    image: "/images/portfolio/api.png",
    type: "API",
  },
  {
    title: "HoyMismoGPS V2",
    subtitle: "Sistema de monitoreo",
    description:
      "Gestión de flotas y activos en tiempo real.",
    tech: ["Cloud Run", "BigQuery", "Firestore"],
    metric: "500+",
    metricLabel: "Activos",
    extra:
      "Control logístico empresarial.",
    color: "cyan",
    featured: true,

    image: "/images/portfolio/gps.png",
    type: "Sistema",
  },
];

export const CHATBOT_PROJECTS: PortfolioProject[] = [
  {
    title: "HoyMismo Dashboard",
    subtitle: "Gestión interna",
    description:
      "Control operativo y visualización de datos.",
    tech: ["Next.js", "Firebase", "Dashboards"],
    metric: "All-in-One",
    metricLabel: "Gestión",
    extra:
      "Centraliza procesos internos.",
    color: "blue",

    image: "/images/portfolio/dashboard.png",
    type: "Dashboard",
  },
];

export const SERVICE_PROJECTS: PortfolioProject[] = [
  // 🔥 TU PROYECTO REAL
  {
    title: "Agencia Aduanal Hoy Mismo",
    subtitle: "Sitio web de comercio exterior",
    description:
      "Desarrollo web enfocado en posicionamiento digital para una agencia aduanal.",
    tech: ["React", "Vite", "Tailwind", "SEO"],
    metric: "Web + Branding",
    metricLabel: "Presencia digital",
    extra:
      "Transmite confianza y genera contacto con clientes.",
    color: "yellow",
    featured: true,

    image: "/images/portfolio/agencia-aduanal.png",
    type: "Página web",
    url: "#",
  },

  // 🔥 SERVICIOS GENERALES (lo que querías agregar)
  {
    title: "Landing page para negocio",
    subtitle: "Captación de clientes",
    description:
      "Página enfocada en generar contactos rápidos.",
    tech: ["React", "UX", "WhatsApp"],
    metric: "Alta conversión",
    metricLabel: "Ventas",
    extra:
      "Ideal para negocios locales.",
    color: "blue",

    image: "/images/portfolio/landing.png",
    type: "Landing page",
  },

  {
    title: "Web con asistente IA",
    subtitle: "Automatización de atención",
    description:
      "Sitio web con IA que responde clientes.",
    tech: ["React", "Node", "IA"],
    metric: "24/7",
    metricLabel: "Atención",
    extra:
      "Automatiza ventas y soporte.",
    color: "purple",

    image: "/images/portfolio/web-ia.png",
    type: "Web + IA",
  },

  {
    title: "Campañas digitales",
    subtitle: "Marketing en redes",
    description:
      "Estrategias para atraer clientes desde redes sociales.",
    tech: ["Meta Ads", "Contenido", "Leads"],
    metric: "Más alcance",
    metricLabel: "Publicidad",
    extra:
      "Enfoque en ventas reales.",
    color: "cyan",

    image: "/images/portfolio/marketing.png",
    type: "Marketing",
  },
];