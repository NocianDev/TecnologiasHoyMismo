import { Link } from "react-router-dom";
import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { API_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";

const apiUses = [
  {
    title: "Automatización de procesos",
    text: "Conectamos formularios, bases de datos, paneles y notificaciones para reducir trabajo manual.",
    code: "AUTO",
  },
  {
    title: "Pagos y ventas online",
    text: "Integramos Stripe, checkout, confirmaciones automáticas y registros de clientes.",
    code: "PAY",
  },
  {
    title: "IA conectada a tu negocio",
    text: "Creamos APIs para asistentes inteligentes, chatbots, análisis de datos y respuestas automáticas.",
    code: "AI",
  },
  {
    title: "Paneles administrativos",
    text: "Centralizamos leads, pedidos, usuarios o reportes en una plataforma fácil de usar.",
    code: "DATA",
  },
];

const flowSteps = [
  {
    title: "Entrada",
    text: "El cliente llena un formulario, compra o solicita información.",
  },
  {
    title: "Validación",
    text: "La API revisa, ordena y prepara los datos recibidos.",
  },
  {
    title: "Conexión",
    text: "Se comunica con base de datos, Stripe, IA o servicios externos.",
  },
  {
    title: "Automatización",
    text: "Activa correos, registros, alertas, paneles o respuestas.",
  },
  {
    title: "Resultado",
    text: "Tu negocio recibe información clara y lista para usar.",
  },
];

const integrationTypes = [
  "Stripe Checkout",
  "MongoDB",
  "OpenRouter / IA",
  "Formularios web",
  "Dashboards",
  "WhatsApp",
  "CRM",
  "Notificaciones",
];

const apiLogs = [
  {
    method: "POST",
    route: "/api/leads",
    status: "200 OK",
    text: "Lead recibido y guardado correctamente.",
  },
  {
    method: "POST",
    route: "/create-checkout-session",
    status: "200 OK",
    text: "Sesión de pago creada con Stripe.",
  },
  {
    method: "GET",
    route: "/api/dashboard",
    status: "200 OK",
    text: "Datos enviados al panel administrativo.",
  },
  {
    method: "POST",
    route: "/chat",
    status: "200 OK",
    text: "Respuesta inteligente generada por IA.",
  },
];

export default function APIs() {
  return (
    <main>
      <PageHero
        badge="APIs e Integraciones"
        title="APIs que conectan tu negocio con ventas, pagos, IA y automatización"
        description="Creamos APIs, conectores y aplicaciones empresariales para que tus sistemas trabajen juntos, reduzcan procesos manuales y conviertan la información en resultados reales."
        image="/images/API.png"
        imageAlt="APIs e integraciones empresariales"
      />

      {/* INTRO CON VIDEO */}
      <section className="section pt-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-black/40 to-yellow-400/10 p-6 shadow-[0_0_70px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <span className="badge">Conexiones inteligentes</span>

                <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
                  <span className="title-gradient">
                    Tu web puede dejar de ser estática y empezar a trabajar por ti
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                  Una API permite que tu sitio web reciba datos, procese pagos,
                  guarde clientes, conecte inteligencia artificial y active
                  automatizaciones sin depender de tareas manuales.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <p className="text-2xl font-extrabold text-cyan-300">
                      API
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      Conecta sistemas.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-2xl font-extrabold text-yellow-300">
                      DATA
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      Guarda información.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-2xl font-extrabold text-emerald-300">
                      AUTO
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      Automatiza procesos.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contacto" className="btn-primary">
                    Cotizar integración
                  </Link>

                  <a href="#proyectos-apis" className="btn-secondary">
                    Ver ejemplos
                  </a>
                </div>
              </div>

              {/* VIDEO */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/50 p-4 shadow-2xl">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="font-bold text-white">
                        Demo de integración
                      </p>
                      <p className="text-sm text-cyan-300">
                        APIs, automatización y sistemas conectados
                      </p>
                    </div>

                    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                      Video
                    </div>
                  </div>

                  <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/LGm9tyBb1iM?start=4"
                      title="Demo APIs e integraciones"
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONSOLA / SISTEMA EN VIVO */}
      <section className="section">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-white/10 bg-black/30 p-6 sm:p-8">
              <span className="badge">Sistema en operación</span>

              <h2 className="mt-5 text-4xl font-bold title-gradient">
                Una API mueve información entre tus herramientas
              </h2>

              <p className="subtitle">
                En vez de copiar datos manualmente, la integración recibe,
                procesa, guarda y envía información automáticamente.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {apiUses.map((item, index) => (
                  <Reveal key={item.title} delay={index * 90}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                      <div className="mb-4 w-fit rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-black text-cyan-300">
                        {item.code}
                      </div>

                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/70">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#030712] shadow-[0_0_60px_rgba(34,211,238,0.08)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <p className="text-sm font-semibold text-white/60">
                  api.hoymismo.dev
                </p>
              </div>

              <div className="space-y-4 p-5">
                {apiLogs.map((log, index) => (
                  <div
                    key={`${log.route}-${index}`}
                    className="rounded-2xl border border-white/10 bg-black/40 p-4"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-lg bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-300">
                        {log.method}
                      </span>

                      <span className="font-mono text-sm text-white">
                        {log.route}
                      </span>

                      <span className="ml-auto rounded-lg bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                        {log.status}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-white/60">{log.text}</p>
                  </div>
                ))}

                <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 font-mono text-sm text-yellow-200">
                  system.log: todos los servicios funcionando correctamente
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLUJO */}
      <section className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 p-6 sm:p-8 lg:p-10">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="relative z-10">
              <div className="max-w-3xl">
                <span className="badge">Flujo de trabajo</span>

                <h2 className="mt-5 text-4xl font-bold title-gradient">
                  Así funciona una API dentro de tu negocio
                </h2>

                <p className="subtitle">
                  El cliente realiza una acción y la API mueve la información de
                  forma automática entre tu web, base de datos, servicios externos
                  y paneles.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-5">
                {flowSteps.map((step, index) => (
                  <Reveal key={step.title} delay={index * 100}>
                    <div className="relative h-full rounded-3xl border border-cyan-400/20 bg-black/35 p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/40">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 font-bold text-black">
                        {index + 1}
                      </div>

                      <h3 className="text-sm font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-white/60">
                        {step.text}
                      </p>

                      {index < flowSteps.length - 1 && (
                        <div className="absolute right-[-14px] top-1/2 hidden h-[2px] w-7 bg-cyan-400/50 md:block" />
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* INTEGRACIONES */}
      <section className="section">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div>
              <span className="badge">Qué podemos conectar</span>

              <h2 className="mt-5 text-4xl font-bold title-gradient">
                Conectamos tu web con herramientas que sí mueven tu negocio
              </h2>

              <p className="subtitle">
                Una integración puede adaptarse a ventas, atención,
                administración, reportes, IA o cualquier flujo donde hoy pierdes
                tiempo haciendo tareas manuales.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contacto" className="btn-primary">
                  Quiero una API
                </Link>

                <Link to="/chatbots" className="btn-secondary">
                  Ver chatbots
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {integrationTypes.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      Integración {index + 1}
                    </p>
                    <p className="mt-2 font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="section">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <div className="mb-4 w-fit rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold text-white/70">
                Ideal para
              </div>

              <h3 className="text-2xl font-bold text-white">
                Negocios con procesos repetitivos
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                Empresas que reciben mensajes, pedidos, pagos, cotizaciones o
                registros y quieren automatizar el seguimiento sin capturar todo
                manualmente.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <div className="mb-4 w-fit rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold text-white/70">
                Conexiones
              </div>

              <h3 className="text-2xl font-bold text-white">
                Web, base de datos, pagos e IA
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                Podemos conectar sitios web, formularios, Stripe, MongoDB,
                paneles, WhatsApp, inteligencia artificial, dashboards y sistemas
                internos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-7 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4 w-fit rounded-full bg-cyan-400 px-4 py-2 text-sm font-extrabold text-black">
                  Resultado
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Un sistema más rápido y ordenado
                </h3>

                <p className="mt-4 leading-7 text-white/75">
                  El resultado es una operación más profesional, medible y lista
                  para crecer sin depender de procesos improvisados.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-gradient-to-r from-cyan-400/20 via-black/40 to-yellow-400/10 p-8 text-center shadow-[0_0_60px_rgba(34,211,238,0.08)] lg:p-12">
            <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white md:text-5xl">
                ¿Quieres una API para tu empresa?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
                Podemos crear una integración personalizada para automatizar
                ventas, leads, pagos, respuestas con IA o procesos internos.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contacto" className="btn-primary">
                  Cotizar integración
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
      <section id="proyectos-apis" className="section pt-6">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="badge">Proyectos</span>

            <h2 className="mt-5 text-4xl font-bold title-gradient">
              Ejemplos de APIs y aplicaciones
            </h2>

            <p className="subtitle mx-auto max-w-3xl">
              Estos proyectos muestran cómo una integración puede conectar datos,
              automatizar procesos y convertir una página web en una herramienta
              real de negocio.
            </p>
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