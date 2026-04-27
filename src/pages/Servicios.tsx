import PageHero from "../components/PageHero";
import { SERVICE_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";

const colorClasses = {
  green: "from-emerald-400/25 to-emerald-500/5 border-emerald-300/30",
  purple: "from-purple-400/25 to-purple-500/5 border-purple-300/30",
  cyan: "from-cyan-400/25 to-cyan-500/5 border-cyan-300/30",
  blue: "from-blue-400/25 to-blue-500/5 border-blue-300/30",
  yellow: "from-yellow-400/25 to-yellow-500/5 border-yellow-300/30",
};

const serviceHighlights = [
  {
    title: "Páginas que sí venden",
    description:
      "Diseñamos sitios claros, rápidos y enfocados en que el cliente entienda tu oferta y te contacte.",
    icon: "🌐",
  },
  {
    title: "Automatización con IA",
    description:
      "Integramos asistentes inteligentes para responder preguntas, captar prospectos y ahorrar tiempo.",
    icon: "🤖",
  },
  {
    title: "Imagen profesional",
    description:
      "Cuidamos estructura, textos, diseño y experiencia para que tu negocio se vea más confiable.",
    icon: "✨",
  },
  {
    title: "Marketing digital",
    description:
      "Creamos campañas y contenido con enfoque comercial para aumentar alcance y oportunidades.",
    icon: "📣",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Analizamos tu negocio",
    description:
      "Revisamos qué vendes, a quién quieres llegar y qué problema debe resolver la solución.",
  },
  {
    number: "02",
    title: "Diseñamos la estrategia",
    description:
      "Definimos estructura, secciones, estilo visual, mensajes clave y funcionalidades necesarias.",
  },
  {
    number: "03",
    title: "Construimos la solución",
    description:
      "Desarrollamos la página, sistema, chatbot, asistente IA o campaña con enfoque profesional.",
  },
  {
    number: "04",
    title: "Lanzamos y mejoramos",
    description:
      "Publicamos el proyecto y dejamos una base lista para crecer con nuevas funciones.",
  },
];

const businessTypes = [
  "Clínicas",
  "Restaurantes",
  "Despachos",
  "Agencias",
  "Comercios locales",
  "Servicios profesionales",
  "Logística",
  "Bienes raíces",
];

export default function Servicios() {
  return (
    <main>
      <PageHero
        badge="Servicios y Plataformas"
        title={
          <div className="space-y-3 text-2xl sm:text-3xl lg:text-5xl">
            <div className="flex items-start gap-3">
              <span className="mt-2 text-yellow-300">•</span>
              <span>Diseño de páginas web</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2 text-yellow-300">•</span>
              <span>Tecnología con IA</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2 text-yellow-300">•</span>
              <span>Campañas digitales</span>
            </div>
          </div>
        }
        description="Soluciones reales para negocios: páginas web, IA, automatización y marketing digital."
        image="/images/System.png"
        imageAlt="Servicios"
      />

      <section className="section relative overflow-hidden pt-12">
        <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-[90px]" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* INTRO */}
          <Reveal>
            <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Portafolio
              </p>

              <div className="mt-4 grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
                <div>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Lo que podemos construir para tu negocio
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
                    Proyectos digitales pensados para verse profesionales,
                    atraer clientes, automatizar procesos y mejorar la forma en
                    que tu empresa se presenta en internet.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-bold text-yellow-300">Web</p>
                    <p className="text-xs text-white/60">Presencia</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-bold text-yellow-300">IA</p>
                    <p className="text-xs text-white/60">Automatización</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-bold text-yellow-300">Ads</p>
                    <p className="text-xs text-white/60">Alcance</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* HIGHLIGHTS */}
          <div className="mb-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/[0.07]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/15 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* PORTAFOLIO GRID */}
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {SERVICE_PROJECTS.map((project, index) => (
              <Reveal key={project.title} delay={index * 120}>
                <article
                  className={`group relative h-full overflow-hidden rounded-3xl border bg-gradient-to-br ${
                    colorClasses[project.color]
                  } p-[1px] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10`}
                >
                  <div className="h-full overflow-hidden rounded-3xl bg-[#07111f]/95">
                    {project.featured && (
                      <div className="absolute right-4 top-4 z-10 rounded-full border border-yellow-300/40 bg-yellow-400/20 px-3 py-1 text-xs font-semibold text-yellow-200 backdrop-blur">
                        Destacado
                      </div>
                    )}

                    {project.image && (
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" />
                      </div>
                    )}

                    <div className="p-6">
                      {project.type && (
                        <span className="rounded-full border border-yellow-300/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-200">
                          {project.type}
                        </span>
                      )}

                      <h3 className="mt-4 text-xl font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-yellow-100/80">
                        {project.subtitle}
                      </p>

                      <p className="mt-4 text-sm leading-6 text-white/70">
                        {project.description}
                      </p>

                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                        <p className="text-2xl font-bold text-white">
                          {project.metric}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                          {project.metricLabel}
                        </p>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-white/60">
                        {project.extra}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/75"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.url || "/contacto"}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-400 px-4 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300"
                      >
                        Ver solución →
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* PROCESO */}
          <section className="mt-16">
            <Reveal>
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                  Proceso
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  De la idea al lanzamiento
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/65">
                  No solo hacemos diseño bonito: estructuramos una solución que
                  tenga sentido para vender, atender o automatizar mejor.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 100}>
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                    <p className="text-4xl font-black text-yellow-400/80">
                      {step.number}
                    </p>
                    <h3 className="mt-4 text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* TIPOS DE NEGOCIO */}
          <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                    Aplicaciones
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white">
                    Ideal para negocios que quieren verse más profesionales
                  </h2>
                  <p className="mt-4 text-white/65">
                    Podemos adaptar el proyecto a diferentes giros, desde
                    servicios locales hasta empresas que necesitan sistemas,
                    atención automatizada o presencia digital más seria.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {businessTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-100"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* COMPARATIVA */}
          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-red-300/10 bg-red-500/5 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-200/80">
                  Antes
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  Presencia digital débil
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-white/65">
                  <li>• Página poco clara o sin diseño profesional.</li>
                  <li>• Clientes preguntando lo mismo una y otra vez.</li>
                  <li>• Poca confianza al visitar el sitio.</li>
                  <li>• Sin seguimiento ni automatización.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-3xl border border-yellow-300/20 bg-yellow-400/10 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                  Después
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  Sistema digital listo para crecer
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  <li>• Web moderna, clara y confiable.</li>
                  <li>• Atención automatizada con IA o formularios.</li>
                  <li>• Mejor presentación de servicios.</li>
                  <li>• Más oportunidades de contacto y venta.</li>
                </ul>
              </div>
            </Reveal>
          </section>

          {/* CTA FINAL */}
          <Reveal delay={200}>
            <div className="mt-16 rounded-3xl border border-yellow-300/20 bg-gradient-to-r from-yellow-400/15 via-white/[0.05] to-cyan-400/10 p-8 text-center">
              <h3 className="text-3xl font-bold text-white">
                ¿Quieres algo parecido para tu negocio?
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-white/70">
                Podemos crear una página, asistente IA, chatbot, sistema o
                campaña digital adaptada a lo que vendes.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/contacto"
                  className="inline-flex rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
                >
                  Cotizar proyecto
                </a>
                <a
                  href="/ia/demo"
                  className="inline-flex rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-white/15"
                >
                  Probar asistente IA
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}