import Reveal from "../components/Reveal";

export default function Contacto() {
  async function handleBuy(
    plan: "landing" | "gps" | "campana" | "ia" | "chatbot" | "api"
  ) {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_MAIN_API_URL}/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Error al iniciar compra");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
      alert("Error al iniciar compra");
    }
  }

  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <section className="section pt-8">
        <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src="/images/Contactos 6.png"
            alt="Contacto"
            className="block h-[200px] w-full object-cover sm:h-[260px] md:h-[320px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
          <div className="absolute inset-0 flex max-w-full flex-col justify-center px-5 sm:px-8">
            <span className="badge w-fit">Contacto y compras</span>
            <h1 className="mt-3 break-words text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Hablemos sobre tu próximo proyecto
            </h1>
            <p className="mt-2 max-w-[90%] text-sm leading-6 text-white/80 sm:text-base">
              Cuéntanos tu idea o adquiere una solución lista para comenzar.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-8">
        <div className="grid w-full max-w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <h2 className="text-3xl font-bold title-gradient sm:text-4xl">
                Información de contacto
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Si buscas una página web profesional, automatización con inteligencia
                artificial, APIs, chatbots o una solución personalizada, estamos listos
                para ayudarte a construir algo moderno, funcional y orientado a resultados.
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              <Reveal delay={150}>
                <div className="card">
                  <h3 className="text-2xl font-bold text-yellow-400">WhatsApp</h3>
                  <p className="mt-3 text-white/75">
                    Atención directa para cotizaciones y dudas.
                  </p>
                  <p className="mt-5 break-words text-2xl font-semibold text-white">
                    +52 81 2160 2495
                  </p>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="card">
                  <h3 className="text-2xl font-bold text-yellow-400">
                    Correo electrónico
                  </h3>
                  <p className="mt-3 text-white/75">
                    Para propuestas o información formal.
                  </p>
                  <p className="mt-5 break-all text-lg font-medium text-white sm:text-xl">
                    contacto@hoymismotecnologia.com
                  </p>
                </div>
              </Reveal>

              <Reveal delay={290}>
                <div className="card">
                  <h3 className="text-2xl font-bold text-yellow-400">Horario</h3>
                  <p className="mt-3 text-white/75">
                    Lunes a viernes de 9:00 a.m. a 7:00 p.m.
                  </p>
                  <p className="mt-1 text-white/75">
                    Sábados de 10:00 a.m. a 2:00 p.m.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="min-w-0 space-y-6">
            <Reveal>
              <div className="card h-fit">
                <h2 className="text-2xl font-bold text-yellow-400 sm:text-3xl">
                  ¿Qué tipo de proyectos atendemos?
                </h2>

                <div className="mt-6 space-y-5 text-white/75">
                  <div>
                    <h3 className="font-semibold text-white">
                      Páginas web, GPS y campañas de marketing digital
                    </h3>
                    <p className="mt-1">
                      Sitios profesionales, corporativos y páginas orientadas a conversión.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Chatbots y automatización
                    </h3>
                    <p className="mt-1">
                      Bots para atención, ventas y seguimiento automático.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      APIs y aplicaciones
                    </h3>
                    <p className="mt-1">
                      Conexión entre sistemas, CRMs y herramientas externas.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Inteligencia artificial
                    </h3>
                    <p className="mt-1">
                      Automatización, asistentes inteligentes y análisis de datos.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card">
                <h2 className="text-2xl font-bold text-yellow-400 sm:text-3xl">
                  Compra directa
                </h2>
                <p className="mt-3 text-white/75">
                  Puedes adquirir una solución inicial y continuar con personalización después.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {[
                    {
    title: "Landing Page",
    description: "Página profesional para negocio o servicio.",
    price: "$6,999 MXN",
    plan: "landing",
  },
  {
    title: "GPS",
    description: "GPS para rastreo de cargamento.",
    price: "$3,999 MXN",
    plan: "gps",
  },
  {
    title: "Campaña digital",
    description:
      "Campaña de marketing digital para promocionar tu producto o servicio.",
    price: "$5,999 MXN",
    plan: "campana",
  },
  {
    title: "Proyecto IA",
    description: "Solución de inteligencia artificial para tu negocio.",
    price: "$14,999 MXN",
    plan: "ia",
  },
  {
    title: "Chatbot Inicial",
    description: "Bot de atención para sitio o proceso simple.",
    price: "$4,999 MXN",
    plan: "chatbot",
  },
  {
    title: "API / Aplicación",
    description: "Integración base entre sistemas o formularios.",
    price: "$9,999 MXN",
    plan: "api",
  },
                  ].map((item) => (
                    <div
                      key={item.plan}
                      className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-5"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-white/70">{item.description}</p>
                        <p className="mt-4 text-3xl font-extrabold text-yellow-400">
                          {item.price}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          handleBuy(
                            item.plan as
                              | "landing"
                              | "gps"
                              | "campana"
                              | "ia"
                              | "chatbot"
                              | "api"
                          )
                        }
                        className="btn-primary mt-5 w-full"
                      >
                        Comprar ahora
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}