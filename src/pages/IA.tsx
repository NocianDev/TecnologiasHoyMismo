import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { IA_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

const benefits = [
  "Atiende llamadas de forma inmediata",
  "Disponible 24/7 sin descanso",
  "Resuelve dudas frecuentes automáticamente",
  "Puede atender múltiples clientes al mismo tiempo",
  "Genera reportes y seguimiento de llamadas",
  "Da una imagen moderna y profesional",
];

const stats = [
  { value: "24/7", label: "Disponibilidad continua" },
  { value: "∞", label: "Atención simultánea" },
  { value: "1 min", label: "Respuesta inmediata" },
  { value: "AI", label: "Automatización inteligente" },
];

const plans = [
  {
    name: "Inicio",
    price: "$5,000",
    desc: "Ideal para negocios pequeños",
    highlight: "Presencia inicial",
  },
  {
    name: "Profesional",
    price: "$10,000",
    desc: "Para empresas en crecimiento",
    highlight: "Más recomendado",
    featured: true,
  },
  {
    name: "Empresarial",
    price: "$15,000",
    desc: "Solución completa y escalable",
    highlight: "Máximo impacto",
  },
];

export default function IA() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute right-0 top-[380px] h-[320px] w-[320px] rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute left-0 top-[900px] h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <PageHero
        badge="Inteligencia Artificial"
        title="IA con función de call center o recepcionista"
        description="Construimos inteligencias artificiales que atienden llamadas 24/7, responden clientes y automatizan la comunicación de tu negocio."
        video="/videos/HoyMismo Assistant.mp4"
        imageAlt="Inteligencia artificial aplicada a negocios"
      />

      <section className="section pt-4">
        <Reveal>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
              Hoy Mismo Assistant
            </div>

            <h2 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-5xl">
              Convierte tu atención en una experiencia{" "}
              <span className="text-yellow-400">rápida, moderna y escalable</span>
            </h2>

            <p className="max-w-3xl text-lg leading-relaxed text-white/75">
              No es solo un bot. Es una solución diseñada para atender clientes,
              responder llamadas, filtrar oportunidades y elevar la imagen de tu
              empresa con una experiencia profesional.
            </p>

            <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/ia/demo"
                className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-extrabold text-black shadow-[0_18px_50px_rgba(250,204,21,0.35)] transition duration-300 hover:scale-105 hover:bg-yellow-300"
              >
                Probar asistente en vivo
              </Link>

              <a
                href="/HoyMismoAssistant AI _V2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur transition duration-300 hover:border-yellow-400/40 hover:bg-white/10"
              >
                Ver presentación completa
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section pt-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur">
                <p className="text-4xl font-black text-yellow-400">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-white/70">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur md:p-10">
              <div className="mb-4 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                ¿Qué es Hoy Mismo Assistant?
              </div>

              <h2 className="text-3xl font-black text-white md:text-4xl">
                Un recepcionista inteligente que trabaja por tu negocio todo el día
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-white/80">
                Es un asistente inteligente que responde llamadas, orienta clientes
                y automatiza la atención de tu negocio. Funciona como un
                recepcionista virtual disponible 24/7, capaz de atender múltiples
                personas al mismo tiempo.
              </p>

              <p className="mt-4 text-white/65">
                Reduce carga operativa, mejora la experiencia del cliente y permite
                que tu equipo se enfoque en ventas, operación y crecimiento.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-yellow-300">
                    Ideal para
                  </p>
                  <p className="mt-2 text-white/80">
                    clínicas, negocios, despachos, agencias y empresas de servicios
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-yellow-300">
                    Objetivo
                  </p>
                  <p className="mt-2 text-white/80">
                    responder más rápido, captar mejor y dar una imagen premium
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[32px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/15 via-yellow-300/5 to-transparent p-8 shadow-[0_24px_80px_rgba(250,204,21,0.12)]">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-4 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                  Impacto real
                </div>

                <h3 className="text-3xl font-black text-white">
                  Más velocidad, mejor presencia y atención sin pausas
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Responde al instante sin depender de horarios.",
                    "Atiende múltiples personas al mismo tiempo.",
                    "Filtra clientes y genera seguimiento.",
                    "Transmite una imagen moderna y tecnológica.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.8)]" />
                      <p className="text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mb-10 text-center">
          <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            Beneficios clave
          </div>
          <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Diseñado para que tu negocio se vea más fuerte y responda mejor
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/10">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl transition duration-300 group-hover:bg-yellow-400/20" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/15 text-xl text-yellow-300">
                    ✦
                  </div>
                  <p className="text-lg font-semibold leading-relaxed text-white/90">
                    {item}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="mb-10 text-center">
          <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            Planes disponibles
          </div>
          <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Elige el nivel de automatización para tu empresa
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={`relative overflow-hidden rounded-[30px] border p-7 text-center backdrop-blur transition duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "border-yellow-400/50 bg-gradient-to-b from-yellow-400/15 to-yellow-400/5 shadow-[0_24px_80px_rgba(250,204,21,0.18)]"
                    : "border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-black">
                    Recomendado
                  </div>
                )}

                <div className={plan.featured ? "pt-7" : ""}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    {plan.highlight}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white">{plan.name}</h3>

                  <p className="mt-4 text-5xl font-black text-yellow-400">
                    {plan.price}
                  </p>

                  <p className="mt-4 text-white/70">{plan.desc}</p>

                  <div className="mt-8">
                    <Link
                      to="/contacto"
                      className={`inline-flex w-full justify-center rounded-2xl px-6 py-3 font-bold transition ${
                        plan.featured
                          ? "bg-yellow-400 text-black hover:bg-yellow-300"
                          : "border border-white/15 bg-white/5 text-white hover:border-yellow-400/30 hover:bg-white/10"
                      }`}
                    >
                      Solicitar información
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-[34px] border border-yellow-400/20 bg-gradient-to-r from-yellow-400/15 via-yellow-300/8 to-transparent p-8 shadow-[0_24px_80px_rgba(250,204,21,0.12)] md:p-10">
            <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-black text-white md:text-4xl">
                Haz que tu negocio responda como una empresa moderna
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
                Mira cómo se ve Hoy Mismo Assistant, explora la demo y revisa la
                presentación completa para entender todo su potencial.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/ia/demo"
                  className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-extrabold text-black shadow-[0_18px_50px_rgba(250,204,21,0.3)] transition hover:scale-105 hover:bg-yellow-300"
                >
                  Ver demo interactiva
                </Link>

                <a
                  href="/HoyMismoAssistant AI _V2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-bold text-white transition hover:border-yellow-400/30 hover:bg-white/10"
                >
                  Abrir presentación PDF
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section pt-6">
        <div className="mb-10 text-center">
          <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            Más soluciones
          </div>
          <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Otros proyectos y servicios relacionados
          </h2>
        </div>

        <div className="mt-6 space-y-8">
          {IA_PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}