import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { CHATBOT_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";

const chatbotUses = [
  {
    title: "Atención automática 24/7",
    text: "Responde a tus clientes en cualquier momento sin perder oportunidades.",
  },
  {
    title: "Generación de leads",
    text: "Captura datos de clientes interesados automáticamente mientras conversa.",
  },
  {
    title: "Ventas automatizadas",
    text: "Explica servicios, resuelve dudas y guía al cliente hasta la compra.",
  },
  {
    title: "Soporte inteligente",
    text: "Resuelve preguntas frecuentes sin necesidad de intervención humana.",
  },
];

const flowSteps = [
  "Cliente escribe o habla",
  "El chatbot analiza la intención",
  "Genera una respuesta inteligente",
  "Guarda información del cliente",
  "El negocio recibe resultados",
];

export default function Chatbots() {
  return (
    <main>
      <PageHero
        badge="Chatbots y Voz IA"
        title="Chatbots que atienden, venden y capturan clientes automáticamente"
        description="Desarrollamos chatbots, asistentes de voz y sistemas multi-agente que automatizan atención, ventas y seguimiento, mientras capturan datos y generan resultados reales para tu negocio."
        image="/images/Chatbot.png"
        imageAlt="Chatbots y asistentes inteligentes"
      />

      {/* SECCIÓN PRINCIPAL */}
      <section className="section pt-10">
        <Reveal>
          <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 shadow-2xl shadow-yellow-500/10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                Automatización inteligente
              </span>

              <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
                Tu negocio puede responder solo y vender más
              </h2>

              <p className="mt-5 text-lg text-zinc-300">
                Un chatbot no solo responde mensajes, también puede captar
                clientes, automatizar procesos y mejorar la experiencia del
                usuario sin intervención manual.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {chatbotUses.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-xl font-black text-black">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* FLUJO */}
      <section className="section">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Cómo funciona
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Así trabaja un chatbot dentro de tu negocio
              </h2>

              <p className="mt-4 text-zinc-300">
                Todo sucede en segundos: el cliente interactúa y el sistema
                responde, analiza y registra información automáticamente.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {flowSteps.map((step, index) => (
                <Reveal key={step} delay={index * 100}>
                  <div className="relative rounded-3xl border border-yellow-400/20 bg-black/40 p-5 text-center">
                    <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">
                      {index + 1}
                    </div>

                    <p className="text-sm font-semibold text-white">{step}</p>

                    {index < flowSteps.length - 1 && (
                      <div className="absolute right-[-14px] top-1/2 hidden h-[2px] w-7 bg-yellow-400/50 md:block" />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* COMPARACIÓN */}
      <section className="section">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-2xl font-bold text-white">
                Chatbot básico
              </h3>
              <p className="mt-4 text-zinc-300">
                Responde con opciones predefinidas. Limitado y poco flexible.
                No entiende contexto ni preguntas fuera del flujo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-yellow-400/30 bg-yellow-400/10 p-7">
              <h3 className="text-2xl font-bold text-white">
                Chatbot con IA (HoyMismo)
              </h3>
              <p className="mt-4 text-zinc-200">
                Entiende lenguaje natural, responde como humano, se adapta a
                diferentes escenarios y puede vender, atender y capturar leads.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <Reveal>
          <div className="rounded-[2rem] border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 via-zinc-950 to-zinc-950 p-8 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              ¿Quieres un chatbot para tu negocio?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              Podemos implementar un asistente que responda, venda y capture
              clientes automáticamente en tu sitio web o sistema.
            </p>

            <a
              href="/contacto"
              className="mt-7 inline-flex rounded-full bg-yellow-400 px-7 py-3 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Solicitar chatbot
            </a>
          </div>
        </Reveal>
      </section>

      {/* PROYECTOS */}
      <section className="section pt-6">
        <Reveal>
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Proyectos
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Ejemplos de chatbots desarrollados
            </h2>
          </div>
        </Reveal>

        <div className="mt-6 space-y-8">
          {CHATBOT_PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}