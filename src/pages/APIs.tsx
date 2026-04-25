import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { API_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";

const apiUses = [
  {
    title: "Automatización de procesos",
    text: "Conectamos formularios, bases de datos, paneles y notificaciones para reducir trabajo manual.",
  },
  {
    title: "Pagos y ventas online",
    text: "Integramos Stripe, checkout, confirmaciones automáticas y registros de clientes.",
  },
  {
    title: "IA conectada a tu negocio",
    text: "Creamos APIs para asistentes inteligentes, chatbots, análisis de datos y respuestas automáticas.",
  },
  {
    title: "Paneles administrativos",
    text: "Centralizamos leads, pedidos, usuarios o reportes en una plataforma fácil de usar.",
  },
];

const flowSteps = [
  "Cliente envía información",
  "La API procesa los datos",
  "Se guarda en base de datos",
  "Se automatiza una respuesta",
  "El negocio ve resultados",
];

export default function APIs() {
  return (
    <main>
      <PageHero
        badge="APIs e Integraciones"
        title="APIs que conectan tu negocio con ventas, pagos, IA y automatización"
        description="Creamos APIs, conectores y aplicaciones empresariales para que tus sistemas trabajen juntos, reduzcan procesos manuales y conviertan la información en resultados reales."
        image="https://www.youtube.com/watch?v=LGm9tyBb1iM&t=4s"
        imageAlt="APIs e integraciones empresariales"
      />

      <section className="section pt-10">
        <Reveal>
          <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 shadow-2xl shadow-yellow-500/10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                Integraciones a medida
              </span>

              <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
                Tu página web puede hacer mucho más que solo verse bien
              </h2>

              <p className="mt-5 text-lg text-zinc-300">
                Una API permite conectar tu sitio con pagos, bases de datos,
                WhatsApp, inteligencia artificial, inventarios, formularios,
                paneles administrativos y sistemas externos.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {apiUses.map((item, index) => (
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

      <section className="section">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Flujo de trabajo
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Así funciona una API dentro de tu negocio
              </h2>

              <p className="mt-4 text-zinc-300">
                La idea es simple: el cliente realiza una acción y la API se
                encarga de mover la información automáticamente.
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

      <section className="section">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-2xl font-bold text-white">
                ¿Para quién es?
              </h3>
              <p className="mt-4 text-zinc-300">
                Para negocios que reciben mensajes, pedidos, pagos o registros
                y quieren automatizar el proceso sin depender de tareas
                repetitivas.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-2xl font-bold text-white">
                ¿Qué podemos conectar?
              </h3>
              <p className="mt-4 text-zinc-300">
                Sitios web, formularios, Stripe, MongoDB, paneles, WhatsApp,
                inteligencia artificial, dashboards y sistemas internos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-[2rem] border border-yellow-400/30 bg-yellow-400/10 p-7">
              <h3 className="text-2xl font-bold text-white">
                Resultado final
              </h3>
              <p className="mt-4 text-zinc-200">
                Un sistema más rápido, ordenado y profesional, listo para
                crecer sin que todo dependa de capturar datos manualmente.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="rounded-[2rem] border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 via-zinc-950 to-zinc-950 p-8 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              ¿Quieres una API para tu empresa?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              Podemos crear una integración personalizada para automatizar
              ventas, leads, pagos, respuestas con IA o procesos internos.
            </p>

            <a
              href="/contacto"
              className="mt-7 inline-flex rounded-full bg-yellow-400 px-7 py-3 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Cotizar integración
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section pt-6">
        <Reveal>
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Proyectos
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Ejemplos de APIs y aplicaciones
            </h2>
          </div>
        </Reveal>

        <div className="mt-6 space-y-8">
          {API_PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}