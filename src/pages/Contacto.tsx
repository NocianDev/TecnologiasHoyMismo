import Reveal from "../components/Reveal";

type Plan =
  | "web_inicial"
  | "web_profesional"
  | "web_empresarial"
  | "gps"
  | "campana"
  | "ia"
  | "chatbot"
  | "api";

export default function Contacto() {
  async function handleBuy(plan: Plan) {
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

  const webPlans: {
    title: string;
    description: string;
    price: string;
    plan: Plan;
    popular?: boolean;
    features: string[];
  }[] = [
    {
      title: "Web Inicial",
      description:
        "Para negocios que necesitan una página sencilla, moderna y funcional.",
      price: "$6,999 MXN",
      plan: "web_inicial",
      features: [
        "Landing page profesional",
        "Diseño responsivo",
        "Botón de WhatsApp",
        "Formulario de contacto",
      ],
    },
    {
      title: "Web Profesional",
      description:
        "Para negocios que quieren una web más completa, comercial y mejor estructurada.",
      price: "$10,999 MXN",
      plan: "web_profesional",
      popular: true,
      features: [
        "Hasta 5 secciones o páginas",
        "Diseño visual más trabajado",
        "Portafolio o catálogo básico",
        "Redes sociales",
      ],
    },
    {
      title: "Web Empresarial",
      description:
        "Para empresas que necesitan una presencia digital más sólida y escalable.",
      price: "$16,999 MXN",
      plan: "web_empresarial",
      features: [
        "Sitio web multipágina",
        "Diseño premium personalizado",
        "Servicios avanzados",
        "Base lista para crecer",
      ],
    },
  ];

  const otherPlans: {
    title: string;
    description: string;
    price: string;
    plan: Plan;
  }[] = [
    {
      title: "GPS",
      description: "GPS para rastreo de cargamento y monitoreo básico.",
      price: "$3,999 MXN",
      plan: "gps",
    },
    {
      title: "Campaña digital",
      description: "Campaña para promocionar tu producto o servicio.",
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
  ];

  return (
    <main className="w-full max-w-full overflow-x-hidden">
      {/* HERO */}
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

      {/* CONTACTO + PROYECTOS */}
      <section className="section pt-8">
        <div className="grid w-full max-w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* CONTACTO */}
          <div className="min-w-0">
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

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <Reveal delay={150}>
                <div className="card">
                  <h3 className="text-2xl font-bold text-yellow-400">
                    WhatsApp
                  </h3>

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
                <div className="card sm:col-span-2 lg:col-span-1">
                  <h3 className="text-2xl font-bold text-yellow-400">
                    Horario
                  </h3>

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

          {/* TIPOS DE PROYECTOS + BLOQUE CTA */}
          <div className="min-w-0 space-y-6">
            <Reveal>
              <div className="card h-full">
                <span className="badge">Soluciones</span>

                <h2 className="mt-4 text-2xl font-bold text-yellow-400 sm:text-3xl">
                  ¿Qué tipo de proyectos atendemos?
                </h2>

                <p className="mt-3 text-white/75">
                  Trabajamos soluciones digitales enfocadas en presencia, ventas,
                  automatización y operación.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <h3 className="font-semibold text-white">Páginas web</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Sitios profesionales, corporativos y páginas orientadas a
                      conversión.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <h3 className="font-semibold text-white">Chatbots</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Bots para atención, ventas y seguimiento automático.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <h3 className="font-semibold text-white">APIs</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Conexión entre sistemas, CRMs y herramientas externas.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <h3 className="font-semibold text-white">
                      Inteligencia artificial
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Automatización, asistentes inteligentes y análisis de datos.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* BLOQUE PARA APROVECHAR EL ESPACIO VACÍO */}
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/15 via-white/[0.04] to-cyan-400/10 p-6 shadow-[0_0_50px_rgba(250,204,21,0.08)]">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-yellow-400/20 blur-3xl" />
                <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative z-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    Compra directa
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold leading-tight text-white">
                    Elige un plan y empieza tu proyecto
                  </h3>

                  <p className="mt-3 max-w-2xl text-white/70">
                    Las páginas web tienen planes por nivel, y los demás servicios
                    están disponibles como soluciones individuales.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-center">
                      <p className="text-xl font-extrabold text-yellow-300">
                        Web
                      </p>
                      <p className="mt-1 text-xs text-white/60">3 planes</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-center">
                      <p className="text-xl font-extrabold text-yellow-300">
                        IA
                      </p>
                      <p className="mt-1 text-xs text-white/60">
                        Automatización
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/25 p-4 text-center">
                      <p className="text-xl font-extrabold text-yellow-300">
                        APIs
                      </p>
                      <p className="mt-1 text-xs text-white/60">Integración</p>
                    </div>
                  </div>

                  <a href="#tienda" className="btn-primary mt-6 inline-flex">
                    Ver tienda
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TIENDA COMO SECCIÓN COMPLETA */}
      <section id="tienda" className="section pt-4">
        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/[0.03] to-cyan-400/10 p-6 shadow-[0_0_70px_rgba(250,204,21,0.08)] sm:p-8 lg:p-10">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
            <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="badge">Tienda</span>

                  <h2 className="mt-4 text-3xl font-extrabold title-gradient sm:text-4xl">
                    Compra directa
                  </h2>

                  <p className="mt-3 max-w-3xl text-white/75">
                    Elige un plan web según el tamaño de tu proyecto o adquiere
                    una solución individual para comenzar.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm text-white/70">
                  Pago seguro vía checkout
                </div>
              </div>

              {/* PLANES WEB */}
              <div className="mt-10">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                      Planes web
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      Solo las páginas web tienen varios niveles
                    </h3>
                  </div>

                  <p className="max-w-md text-sm leading-6 text-white/60">
                    Esto ayuda a que el cliente elija una web según presupuesto,
                    tamaño y necesidad real.
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                  {webPlans.map((item) => (
                    <div
                      key={item.plan}
                      className={`relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 ${
                        item.popular
                          ? "border-yellow-400/60 bg-yellow-400/10 shadow-[0_0_45px_rgba(250,204,21,0.14)]"
                          : "border-white/10 bg-black/25"
                      }`}
                    >
                      {item.popular && (
                        <div className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-extrabold text-black">
                          Más vendido
                        </div>
                      )}

                      <div>
                        <h3 className="pr-24 text-2xl font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-white/65">
                          {item.description}
                        </p>

                        <p className="mt-5 text-4xl font-extrabold text-yellow-400">
                          {item.price}
                        </p>

                        <ul className="mt-5 space-y-2 text-sm text-white/75">
                          {item.features.map((feature) => (
                            <li key={feature} className="flex gap-2">
                              <span className="text-yellow-300">◆</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => handleBuy(item.plan)}
                        className="btn-primary mt-6 w-full"
                      >
                        Comprar plan
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* OTROS SERVICIOS */}
              <div className="mt-12">
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    Otros servicios
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Soluciones individuales
                  </h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                  {otherPlans.map((item) => (
                    <div
                      key={item.plan}
                      className="flex min-h-[240px] flex-col justify-between rounded-2xl border border-white/10 bg-black/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/30"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/65">
                          {item.description}
                        </p>

                        <p className="mt-4 text-2xl font-extrabold text-yellow-400">
                          {item.price}
                        </p>
                      </div>

                      <button
                        onClick={() => handleBuy(item.plan)}
                        className="btn-primary mt-5 w-full"
                      >
                        Comprar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}