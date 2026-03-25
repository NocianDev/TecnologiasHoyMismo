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
    title: "Tikun Olam v2 — Observable Ethical AI",
    subtitle: "Finalista — Google Cloud x Datadog Hackathon",
    description:
      "Pipeline ético de IA observable con detección de sesgo civilizacional BinahSigma e Índice de Riesgo Ético (ERI) en cada decisión.",
    tech: ["Python", "Vertex AI", "Datadog", "BinahSigma", "GPT-4o", "Grok"],
    metric: "73%",
    metricLabel: "Bias Detectado",
    extra:
      "Pipeline 10-Sefirot con 5 proveedores de IA. Recomendación NO_GO en contrato Anthropic x Pentagon de $2.4B.",
    color: "green",
    featured: true,
  },
  {
    title: "Binah-Sigma — Cognitive Decision Engine",
    subtitle: "Enterprise API",
    description:
      "Motor de evaluación cognitiva que produce outputs estructurados y auditables para gobernanza empresarial y cumplimiento ESG.",
    tech: ["FastAPI", "Pydantic", "OpenAI SDK", "Docker", "Railway"],
    metric: "0.92",
    metricLabel: "Índice Binah-Sigma",
    extra:
      "Infraestructura de IA auditable para evaluación estructurada de decisiones empresariales.",
    color: "green",
    featured: true,
  },
  {
    title: "Ethica.AI Framework",
    subtitle: "Sistemas de Decisión",
    description:
      "Orquesta Gemini, Mistral y DeepSeek para eliminar sesgos en la toma de decisiones corporativas críticas.",
    tech: ["Multi-LLM Orch", "GraphQL", "Python SDK", "Pydantic"],
    metric: "10-Layer",
    metricLabel: "Pipeline",
    extra:
      "Arquitectura Multi-Provider para decisiones corporativas sin sesgo.",
    color: "purple",
  },
];

export const API_PROJECTS: PortfolioProject[] = [
  {
    title: "HoyMismoGPS V2 — Enterprise Fleet Management",
    subtitle: "Logística Empresarial",
    description:
      "Gestión de flotas empresarial con arquitectura completa en Google Cloud. APIs en Cloud Run, analytics en BigQuery y estado en tiempo real con Firestore.",
    tech: ["Cloud Run", "BigQuery", "Firestore", "Pub/Sub", "Python Asyncio"],
    metric: "500+",
    metricLabel: "Activos Monitoreados",
    extra:
      "Arquitectura Google Cloud: Cloud Run, BigQuery, Firestore y Pub/Sub para flotas empresariales.",
    color: "cyan",
  },
  {
    title: "Binah-Sigma — Cognitive Decision Engine",
    subtitle: "Enterprise API",
    description:
      "Motor de evaluación cognitiva con salidas auditables para gobernanza, compliance y decisiones empresariales estructuradas.",
    tech: ["FastAPI", "Pydantic", "OpenAI SDK", "Docker", "Railway"],
    metric: "0.92",
    metricLabel: "Índice Binah-Sigma",
    extra:
      "API robusta para procesos empresariales con evaluación cognitiva avanzada.",
    color: "green",
    featured: true,
  },
];

export const CHATBOT_PROJECTS: PortfolioProject[] = [
  {
    title: "VocalisAI V3 — Multi-Agent Voice Intelligence",
    subtitle: "Finalista — Google Gemini Live Hackathon",
    description:
      "Sistema multi-agente de voz con IA. Akiva supervisa a Alex, Nova, Diana, Marco, Sara y Raúl. Cada interacción es evaluada éticamente en tiempo real.",
    tech: ["Gemini Live API", "ElevenLabs", "Twilio", "Stripe", "TOF Layer"],
    metric: "6+1",
    metricLabel: "Agentes (Akiva)",
    extra:
      "Meta-agente Akiva orquestando 6 especialistas con capa ética TOF en cada llamada.",
    color: "purple",
    featured: true,
  },
];

export const SERVICE_PROJECTS: PortfolioProject[] = [
  {
    title: "HoyMismo Dashboard Agencia",
    subtitle: "HoyMismo Platform",
    description:
      "CRM, gestión de expedientes, tracking de importaciones, facturación y Business Intelligence para agencias aduanales.",
    tech: ["Next.js 14", "Firebase", "Google Cloud", "Tailwind"],
    metric: "All-in-One",
    metricLabel: "OS Agencias",
    extra:
      "Sistema operativo completo para agencias aduanales e importación vehicular.",
    color: "blue",
  },
  {
    title: "SignaFlow — Legal Tech SaaS",
    subtitle: "Plataforma SaaS",
    description:
      "Usa IA (Gemini) para redacción de contratos y Canvas API para firmas biométricas con sellos de auditoría criptográficos.",
    tech: ["React 19", "Gemini Pro", "Firebase Auth", "Canvas API"],
    metric: "SHA-256",
    metricLabel: "Audit Trail",
    extra:
      "Plataforma de firma digital con validez legal y sellos criptográficos.",
    color: "yellow",
  },
  {
    title: "Enterprise Logistics OS",
    subtitle: "HoyMismo Courier",
    description:
      "Integra CRM, facturación, tracking y asistente IA en un dashboard unificado para operaciones de courier.",
    tech: ["Next.js 14", "Firebase", "Tailwind", "Recharts"],
    metric: "All-in-One",
    metricLabel: "CRM + AI",
    extra:
      "Sistema operativo completo para logística internacional con CRM, facturación y asistente IA.",
    color: "cyan",
  },
];