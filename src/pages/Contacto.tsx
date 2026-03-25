export default function Contacto() {
  return (
    <main>
      {/* 🔥 HEADER CON IMAGEN */}
      <section className="section pt-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
          
          {/* Imagen */}
          <img
            src="/images/Contacto2.jpg"
            alt="Contacto"
            className="h-[260px] w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

          {/* Texto */}
          <div className="absolute inset-0 flex flex-col justify-center px-8">
            <span className="badge w-fit">Contacto</span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Hablemos sobre tu próximo proyecto
            </h1>

            <p className="mt-3 max-w-2xl text-white/80">
              Cuéntanos tu idea y te ayudamos a convertirla en una solución real,
              automatizada y lista para escalar.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 CONTENIDO PRINCIPAL */}
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* IZQUIERDA */}
          <div>
            <h2 className="text-3xl font-bold title-gradient">
              Información de contacto
            </h2>

            <p className="subtitle max-w-2xl">
              Si buscas una página web profesional, automatización con inteligencia
              artificial, APIs, chatbots o una solución personalizada, estamos listos
              para ayudarte a construir algo moderno, funcional y orientado a resultados.
            </p>

            <div className="mt-10 space-y-6">
              
              <div className="card">
                <h3 className="text-xl font-bold text-yellow-400">WhatsApp</h3>
                <p className="mt-2 text-white/75">
                  Atención directa para cotizaciones y dudas.
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  +52 81 0000 0000
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-yellow-400">Correo electrónico</h3>
                <p className="mt-2 text-white/75">
                  Para propuestas o información formal.
                </p>
                <p className="mt-3 text-lg font-medium text-white">
                  contacto@hoymismotecnologia.com
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-yellow-400">Horario</h3>
                <p className="mt-2 text-white/75">
                  Lunes a viernes de 7:00 a.m. a 6:00 p.m.
                </p>
                <p className="text-white/75">
                  Sábados de 8:00 a.m. a 2:00 p.m.
                </p>
              </div>

            </div>
          </div>

          {/* DERECHA */}
          <div className="card h-fit">
            <h2 className="text-2xl font-bold text-yellow-400">
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