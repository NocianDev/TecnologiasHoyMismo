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
    title: "Integraciones y APIs empresariales",
    subtitle: "Soluciones personalizadas",
    description:
      "Desarrollamos APIs e integraciones a medida para conectar sistemas, automatizar flujos y centralizar operaciones empresariales. Cada integración se adapta a los requerimientos reales del proyecto.",
    tech: ["REST API", "Node.js", "Cloud", "Automation", "Integrations"],
    metric: "Custom",
    metricLabel: "A medida",
    extra:
      "Creamos soluciones robustas para conexión entre plataformas, formularios, CRMs, dashboards y servicios externos.",
    color: "cyan",
    featured: true,
  },
];

export const CHATBOT_PROJECTS: PortfolioProject[] = [
  {
    title: "VocalisAI V3 — Multi-Agent Voice Intelligence",
    subtitle: "Chatbot y voz inteligente",
    description:
      "Sistema conversacional de voz con inteligencia artificial para atención automatizada, seguimiento de clientes y respuestas inteligentes en múltiples flujos.",
    tech: ["Gemini Live API", "ElevenLabs", "Twilio", "Voice AI", "Automation"],
    metric: "24/7",
    metricLabel: "Atención",
    extra:
      "Pensado para negocios que buscan escalar soporte, ventas y comunicación automatizada con experiencias conversacionales más naturales.",
    color: "purple",
    featured: true,
  },
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
  {
    title: "A Huevo Es Verde",
    subtitle: "Sitio web para restaurante de jugos y almuerzos",
    description:
      "Desarrollo web enfocado en presencia digital, imagen de marca y comunicación clara de menú, concepto y propuesta gastronómica para un restaurante de jugos y almuerzos.",
    tech: ["React", "Vite", "Tailwind", "Responsive Design", "Branding"],
    metric: "Menú + Marca",
    metricLabel: "Presencia digital",
    extra:
      "Proyecto orientado a proyectar una imagen fresca, atractiva y moderna, facilitando que los clientes conozcan la oferta del restaurante y conecten con su identidad visual.",
    color: "yellow",
  },
];