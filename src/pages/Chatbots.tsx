import { Link } from "react-router-dom";
import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { CHATBOT_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";

const chatbotUses = [
  {
    title: "Atención automática 24/7",
    text: "Responde dudas frecuentes, explica servicios y mantiene activa la atención incluso fuera de horario.",
    icon: "24/7",
  },
  {
    title: "Captura de clientes",
    text: "Recolecta nombre, teléfono, interés y necesidad del cliente sin depender de mensajes manuales.",
    icon: "Lead",
  },
  {
    title: "Ventas guiadas",
    text: "Ayuda al usuario a elegir un servicio, resolver dudas y avanzar hacia una cotización o compra.",
    icon: "Venta",
  },
  {
    title: "Soporte inteligente",
    text: "Reduce preguntas repetitivas y mejora la experiencia de clientes actuales o nuevos prospectos.",
    icon: "IA",
  },
];

const flowSteps = [
  {
    title: "Cliente inicia",
    text: "Escribe desde la web o abre el asistente.",
  },
  {
    title: "La IA entiende",
    text: "Detecta intención, servicio e información importante.",
  },
  {
    title: "Responde y guía",
    text: "Contesta de forma natural y orienta al siguiente paso.",
  },
  {
    title: "Captura datos",
    text: "Guarda información útil para seguimiento comercial.",
  },
  {
    title: "Tu negocio actúa",
    text: "Recibes leads, dudas, solicitudes o ventas potenciales.",
  },
];

const chatbotTypes = [
  {
    title: "Chatbot para ventas",
    text: "Ideal para páginas web que necesitan convertir visitantes en clientes interesados.",
  },
  {
    title: "Chatbot de soporte",
    text: "Pensado para responder dudas frecuentes, horarios, servicios, procesos y seguimiento.",
  },
  {
    title: "Asistente con voz",
    text: "Permite una experiencia más llamativa usando conversación hablada y respuestas inteligentes.",
  },
  {
    title: "Sistema multi-agente",
    text: "Divide tareas entre agentes especializados: ventas, soporte, información o seguimiento.",
  },
];

const demoMessages = [
  {
    from: "Cliente",
    text: "Hola, quiero saber si pueden hacer un chatbot para mi negocio.",
  },
  {
    from: "HoyMismo Assistant",
    text: "Claro. Podemos crear un chatbot que atienda clientes, capture datos y responda preguntas sobre tus servicios.",
  },
  {
    from: "Cliente",
    text: "¿También puede guardar clientes interesados?",
  },
  {
    from: "HoyMismo Assistant",
    text: "Sí. Puede registrar nombre, teléfono, servicio de interés y enviar esa información para seguimiento.",
  },
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

      {/* BLOQUE PRINCIPAL */}
      <section className="section pt-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/[0.03] to-cyan-400/10 p-6 shadow-[0_0_70px_rgba(250,204,21,0.08)] sm:p-8 lg:p-10">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
            <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute right-8 top-8 hidden rounded-full border border-yellow-300/20 px-5 py-2 text-sm font-semibold text-yellow-200/80 lg:block">
              Automatización inteligente
            </div>

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <span className="badge">Chatbots para negocio</span>

                <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
                  <span className="title-gradient">
                    Tu negocio puede responder solo, vender mejor y no perder clientes
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                  Un chatbot bien diseñado no es solo una cajita de mensajes. Puede
                  recibir visitantes, resolver dudas, explicar servicios, capturar
                  prospectos y ayudar a que tu negocio se vea más moderno desde el
                  primer contacto.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="text-2xl font-extrabold text-yellow-300">
                      24/7
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      Atención siempre activa.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="text-2xl font-extrabold text-yellow-300">
                      Leads
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      Captura automática.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="text-2xl font-extrabold text-yellow-300">
                      IA
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      Respuestas naturales.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contacto" className="btn-primary">
                    Solicitar chatbot
                  </Link>

                  <a href="#proyectos-chatbots" className="btn-secondary">
                    Ver ejemplos
                  </a>
                </div>
              </div>

              {/* DEMO VISUAL */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-yellow-400/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-5 shadow-2xl">
                  <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="font-bold text-white">HoyMismo Assistant</p>
                      <p className="text-sm text-emerald-300">
                        En línea · respondiendo ahora
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-cyan-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {demoMessages.map((message, index) => {
                      const isBot = message.from === "HoyMismo Assistant";

                      return (
                        <div
                          key={`${message.from}-${index}`}
                          className={`flex ${
                            isBot ? "justify-start" : "justify-end"
                          }`}
                        >
                          <div
                            className={`max-w-[88%] rounded-2xl border px-4 py-3 text-sm leading-6 ${
                              isBot
                                ? "border-yellow-400/20 bg-yellow-400/10 text-white"
                                : "border-white/10 bg-white/[0.06] text-white/80"
                            }`}
                          >
                            <p
                              className={`mb-1 text-xs font-semibold ${
                                isBot ? "text-yellow-300" : "text-cyan-300"
                              }`}
                            >
                              {message.from}
                            </p>
                            <p>{message.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/55">
                    Escribe un mensaje...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* BENEFICIOS */}
      <section className="section">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="badge">Beneficios reales</span>

            <h2 className="mt-5 text-4xl font-bold title-gradient">
              Lo que un chatbot puede hacer por tu negocio
            </h2>

            <p className="subtitle mx-auto">
              Automatiza la primera atención, mejora el seguimiento y convierte
              conversaciones en oportunidades comerciales.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {chatbotUses.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="group h-full rounded-[2rem] border border-white/10 bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:shadow-[0_0_40px_rgba(250,204,21,0.08)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-sm font-black text-black transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FLUJO */}
      <section className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 p-6 sm:p-8 lg:p-10">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10">
              <div className="max-w-3xl">
                <span className="badge">Cómo funciona</span>

                <h2 className="mt-5 text-4xl font-bold title-gradient">
                  Así trabaja un chatbot dentro de tu negocio
                </h2>

                <p className="subtitle">
                  El proceso ocurre en segundos: el usuario conversa, la IA entiende,
                  responde y registra información útil para seguimiento.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-5">
                {flowSteps.map((step, index) => (
                  <Reveal key={step.title} delay={index * 100}>
                    <div className="relative h-full rounded-3xl border border-yellow-400/20 bg-black/35 p-5 text-center transition hover:-translate-y-1 hover:border-yellow-300/40">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">
                        {index + 1}
                      </div>

                      <h3 className="text-sm font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-white/60">
                        {step.text}
                      </p>

                      {index < flowSteps.length - 1 && (
                        <div className="absolute right-[-14px] top-1/2 hidden h-[2px] w-7 bg-yellow-400/50 md:block" />
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TIPOS DE CHATBOT */}
      <section className="section">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div>
              <span className="badge">Opciones de implementación</span>

              <h2 className="mt-5 text-4xl font-bold title-gradient">
                No todos los chatbots tienen que ser iguales
              </h2>

              <p className="subtitle">
                Podemos adaptar el chatbot según el tipo de negocio, el proceso
                que quieres automatizar y el nivel de experiencia que quieres mostrar.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contacto" className="btn-primary">
                  Quiero cotizar uno
                </Link>

                <Link to="/ia" className="btn-secondary">
                  Ver soluciones IA
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {chatbotTypes.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10">
                  <div className="mb-4 w-fit rounded-full border border-yellow-300/20 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-300">
                    Tipo {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-white">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className="section">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <div className="mb-4 w-fit rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold text-white/70">
                Tradicional
              </div>

              <h3 className="text-2xl font-bold text-white">Chatbot básico</h3>

              <p className="mt-4 leading-7 text-white/70">
                Responde con opciones predefinidas. Puede servir para preguntas
                simples, pero suele sentirse limitado, poco flexible y difícil de
                adaptar cuando el usuario pregunta algo fuera del flujo.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/65">
                <li>◆ Respuestas rígidas</li>
                <li>◆ Poco contexto</li>
                <li>◆ Experiencia menos natural</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-yellow-400/10 p-7 shadow-[0_0_50px_rgba(250,204,21,0.1)]">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4 w-fit rounded-full bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black">
                  Recomendado
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Chatbot con IA HoyMismo
                </h3>

                <p className="mt-4 leading-7 text-white/75">
                  Entiende lenguaje natural, responde de forma más humana, se adapta
                  a diferentes escenarios y puede funcionar como vendedor, asistente
                  de soporte o capturador de prospectos.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/75">
                  <li>◆ Respuestas inteligentes</li>
                  <li>◆ Captura de leads</li>
                  <li>◆ Integración con procesos reales</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 via-black/40 to-cyan-400/10 p-8 text-center shadow-[0_0_60px_rgba(250,204,21,0.08)] lg:p-12">
            <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-yellow-400/15 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white md:text-5xl">
                ¿Quieres un chatbot para tu negocio?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
                Podemos implementar un asistente que responda, venda y capture
                clientes automáticamente dentro de tu sitio web o sistema.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contacto" className="btn-primary">
                  Solicitar chatbot
                </Link>

                <Link to="/contacto#tienda" className="btn-secondary">
                  Ver precios
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos-chatbots" className="section pt-6">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="badge">Proyectos</span>

            <h2 className="mt-5 text-4xl font-bold title-gradient">
              Ejemplos de chatbots desarrollados
            </h2>

            <p className="subtitle mx-auto max-w-3xl">
              Estos proyectos muestran cómo se pueden aplicar chatbots, asistentes
              inteligentes y automatización conversacional en distintos escenarios.
            </p>
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