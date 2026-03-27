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
};

export const IA_PROJECTS: PortfolioProject[] = [
  {
    title: "VocalisAI V3 — Multi-Agent Voice Intelligence",
    subtitle: "Solución propia de inteligencia artificial",
    description:
      "Sistema multi-agente de voz con inteligencia artificial orientado a atención automatizada, seguimiento conversacional, interacción por voz y automatización de procesos en tiempo real.",
    tech: ["Gemini Live API", "ElevenLabs", "Twilio", "Stripe", "Voice AI"],
    metric: "24/7",
    metricLabel: "Disponibilidad",
    extra:
      "Plataforma diseñada para automatizar interacciones por voz, mejorar la atención y escalar procesos conversacionales con IA avanzada.",
    color: "purple",
    featured: true,
  },
];

export const API_PROJECTS: PortfolioProject[] = [
  {
  title: "A Huevo Es Verde",
  subtitle: "API para gestión de menú y pedidos de restaurante",
  description:
    "Desarrollo de API enfocada en la gestión eficiente de menú, productos y pedidos, permitiendo integrar sistemas digitales para restaurantes de jugos y alimentos.",
  tech: ["Node.js", "Express", "REST API", "Database", "Integration"],
  metric: "API + Integración",
  metricLabel: "Automatización operativa",
  extra:
    "Sistema backend diseñado para centralizar la información del negocio, facilitando la conexión con aplicaciones web, sistemas de pedidos y plataformas externas, mejorando la eficiencia y escalabilidad del restaurante.",
  color: "yellow",
},
{
    title: "HoyMismoGPS V2 — Fleet Management",
    subtitle: "Sistema de gestión y monitoreo",
    description:
      "Plataforma de gestión de flotas con monitoreo de activos, visualización operativa y control logístico diseñado para empresas que requieren seguimiento en tiempo real.",
    tech: ["Cloud Run", "BigQuery", "Firestore", "Pub/Sub", "Logistics"],
    metric: "500+",
    metricLabel: "Activos",
    extra:
      "Sistema empresarial orientado a trazabilidad, monitoreo y control operativo de unidades y activos.",
    color: "cyan",
    featured: true,
  },
];

export const CHATBOT_PROJECTS: PortfolioProject[] = [
  
  {
    title: "HoyMismo Dashboard",
    subtitle: "Automatización y gestión interna",
    description:
      "Dashboard integral orientado a control operativo, gestión de procesos y visualización de información en tiempo real para mejorar el seguimiento interno de operaciones.",
    tech: ["Next.js", "Firebase", "Dashboards", "Automation", "Analytics"],
    metric: "All-in-One",
    metricLabel: "Gestión",
    extra:
      "Solución enfocada en centralizar información, automatizar procesos internos y mejorar la visibilidad de las operaciones desde un solo entorno.",
    color: "blue",
  },
];

export const SERVICE_PROJECTS: PortfolioProject[] = [
  {
  title: "Agencia Aduanal Hoy Mismo",
  subtitle: "Sitio web para servicios de comercio exterior y logística",
  description:
    "Desarrollo web enfocado en posicionamiento digital para una agencia aduanal, destacando servicios de importación, exportación, gestión de trámites y asesoría en comercio exterior.",

  tech: ["React", "Vite", "Tailwind", "Responsive Design", "SEO"],

  metric: "Web + Branding",
  metricLabel: "Presencia digital",

  extra:
    "Proyecto orientado a transmitir confianza, profesionalismo y claridad en procesos aduanales, facilitando que empresas comprendan los servicios, requisitos y beneficios de trabajar con la agencia, además de generar contacto directo y oportunidades de negocio.",

  color: "yellow",
}
  
];