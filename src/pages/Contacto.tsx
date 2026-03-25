export default function Contacto() {
  return (
    <main>
      {/* HEADER CON IMAGEN */}
      <section className="section pt-8 md:pt-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <img
            src="/images/contacto.jpg"
            alt="Contacto"
            className="h-[220px] w-full object-cover sm:h-[260px] md:h-[320px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8">
            <span className="badge w-fit">Contacto</span>

            <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Hablemos sobre tu próximo proyecto
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Cuéntanos tu idea y te ayudamos a convertirla en una solución real,
              automatizada y lista para escalar.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="section pt-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <h2 className="text-3xl font-bold title-gradient sm:text-4xl">
              Información de contacto
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Si buscas una página web profesional, automatización con inteligencia
              artificial, APIs, chatbots o una solución personalizada, estamos listos
              para ayudarte a construir algo moderno, funcional y orientado a resultados.
            </p>

            <div className="mt-8 space-y-5">
              <div className="card">
                <h3 className="text-2xl font-bold text-yellow-400">WhatsApp</h3>
                <p className="mt-3 text-white/75">
                  Atención directa para cotizaciones y dudas.
                </p>
                <p className="mt-5 text-2xl font-semibold text-white">
                  +52 81 0000 0000
                </p>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-yellow-400">Correo electrónico</h3>
                <p className="mt-3 text-white/75">
                  Para propuestas o información formal.
                </p>
                <p className="mt-5 break-words text-lg font-medium text-white sm:text-xl">
                  contacto@hoymismotecnologia.com
                </p>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-yellow-400">Horario</h3>
                <p className="mt-3 text-white/75">
                  Lunes a viernes de 9:00 a.m. a 7:00 p.m.
                </p>
                <p className="mt-1 text-white/75">
                  Sábados de 10:00 a.m. a 2:00 p.m.
                </p>
              </div>
            </div>
          </div>

          <div className="card h-fit">
            <h2 className="text-2xl font-bold text-yellow-400 sm:text-3xl">
              ¿Qué tipo de proyectos atendemos?
            </h2>

            <div className="mt-6 space-y-5 text-white/75">
              <div>
                <h3 className="font-semibold text-white">
                  Páginas web y landing pages
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
                  APIs e integraciones
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

            <div className="mt-8 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
              <h3 className="text-lg font-bold text-yellow-300">
                Tiempo de respuesta
              </h3>
              <p className="mt-2 text-white/75">
                Respondemos el mismo día hábil en la mayoría de los casos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}