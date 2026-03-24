export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="badge">Soluciones digitales de nueva generación</span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            <span className="title-gradient">Diseñamos tecnología que vende, automatiza y escala</span>
          </h1>

          <p className="subtitle">
            En Hoy Mismo Digital desarrollamos páginas web profesionales, sistemas personalizados,
            automatizaciones, APIs, asistentes con inteligencia artificial y chatbots para negocios
            que quieren crecer de verdad. No hacemos sitios genéricos: construimos herramientas
            útiles, modernas y enfocadas en resultados.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contacto" className="btn-primary">
              Solicitar cotización
            </a>
            <a href="/servicios" className="btn-secondary">
              Explorar servicios
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="card p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400">Web</p>
              <p className="mt-1 text-sm text-white/70">Diseño y desarrollo</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400">IA</p>
              <p className="mt-1 text-sm text-white/70">Automatización inteligente</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400">APIs</p>
              <p className="mt-1 text-sm text-white/70">Integración entre sistemas</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400">Bots</p>
              <p className="mt-1 text-sm text-white/70">Atención 24/7</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-yellow-400/20 blur-3xl"></div>
          <img
            src="/images/Hero.jpg"
            alt="Soluciones digitales"
            className="relative z-10 w-full max-w-[680px] rounded-[2rem] border border-white/10 object-cover shadow-2xl glow-yellow"
          />
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className="section">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Enfoque estratégico
            </p>
            <h2 className="mt-4 text-2xl font-bold">No solo se ve bien: trabaja para tu negocio</h2>
            <p className="mt-4 text-white/75">
              Cada proyecto se plantea para atraer clientes, comunicar confianza, automatizar tareas
              y mejorar tus procesos internos. Buscamos que la tecnología te ahorre tiempo y te ayude a vender más.
            </p>
          </div>

          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Diseño premium
            </p>
            <h2 className="mt-4 text-2xl font-bold">Interfaces modernas, limpias y con identidad</h2>
            <p className="mt-4 text-white/75">
              Creamos experiencias visuales con estética tech, jerarquía clara, movimiento visual,
              colores bien trabajados y una sensación profesional que eleva la imagen de tu empresa.
            </p>
          </div>

          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Desarrollo real
            </p>
            <h2 className="mt-4 text-2xl font-bold">Código escalable y preparado para crecer</h2>
            <p className="mt-4 text-white/75">
              Desde landing pages hasta sistemas completos: trabajamos con estructura clara,
              rutas limpias, rendimiento optimizado y bases que permiten futuras integraciones.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="section">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">Servicios principales</span>
          <h2 className="mt-5 text-4xl font-bold title-gradient">
            Todo lo que una empresa moderna necesita para digitalizarse
          </h2>
          <p className="subtitle mx-auto">
            Combinamos diseño, tecnología y automatización para construir soluciones completas,
            funcionales y listas para operar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="card">
            <img src="/images/Web.jpg" alt="Páginas web" className="mb-6 h-32 w-full rounded-2xl object-cover" />
            <h3 className="text-xl font-bold text-yellow-400">Páginas web profesionales</h3>
            <p className="mt-3 text-white/75">
              Sitios modernos, responsivos y optimizados para mostrar tus servicios, generar confianza
              y convertir visitantes en clientes.
            </p>
          </div>

          <div className="card">
            <img src="/images/AI.jpg" alt="Inteligencia artificial" className="mb-6 h-32 w-full rounded-2xl object-cover" />
            <h3 className="text-xl font-bold text-yellow-400">Automatización con IA</h3>
            <p className="mt-3 text-white/75">
              Implementamos herramientas inteligentes que responden, clasifican, asisten y agilizan
              procesos sin depender siempre de intervención manual.
            </p>
          </div>

          <div className="card">
            <img src="/images/API.jpg" alt="APIs" className="mb-6 h-32 w-full rounded-2xl object-cover" />
            <h3 className="text-xl font-bold text-yellow-400">APIs e integraciones</h3>
            <p className="mt-3 text-white/75">
              Conectamos sistemas, plataformas, formularios, CRM, bases de datos y servicios externos
              para crear flujos más inteligentes.
            </p>
          </div>

          <div className="card">
            <img src="/images/Chatbot.jpg" alt="Chatbots" className="mb-6 h-32 w-full rounded-2xl object-cover" />
            <h3 className="text-xl font-bold text-yellow-400">Chatbots para ventas y soporte</h3>
            <p className="mt-3 text-white/75">
              Bots para WhatsApp, web o procesos internos que responden dudas, filtran clientes,
              capturan datos y mejoran tu atención.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section grid items-center gap-12 lg:grid-cols-2">
        <div className="relative flex justify-center">
          <div className="absolute h-[380px] w-[380px] rounded-full bg-yellow-400/15 blur-3xl"></div>
          <img
            src="/images/System.jpg"
            alt="Proceso de trabajo"
            className="relative z-10 w-full max-w-[640px] rounded-[2rem] border border-white/10 object-cover shadow-2xl"
          />
        </div>

        <div>
          <span className="badge">Cómo trabajamos</span>
          <h2 className="mt-5 text-4xl font-bold title-gradient">
            Un proceso claro, profesional y orientado a resultados
          </h2>
          <ul className="info-list mt-8 space-y-5">
            <li>
              <span>◆</span>
              <div>
                <strong className="text-white">1. Análisis y propuesta</strong>
                <p className="mt-1 text-white/70">
                  Revisamos tus objetivos, tu giro y lo que realmente necesitas para plantear una solución útil.
                </p>
              </div>
            </li>
            <li>
              <span>◆</span>
              <div>
                <strong className="text-white">2. Diseño visual y estructura</strong>
                <p className="mt-1 text-white/70">
                  Organizamos la información, diseñamos la experiencia y definimos el estilo ideal para tu marca.
                </p>
              </div>
            </li>
            <li>
              <span>◆</span>
              <div>
                <strong className="text-white">3. Desarrollo e integración</strong>
                <p className="mt-1 text-white/70">
                  Programamos el proyecto, añadimos automatizaciones, formularios, APIs o módulos especiales.
                </p>
              </div>
            </li>
            <li>
              <span>◆</span>
              <div>
                <strong className="text-white">4. Pruebas, lanzamiento y mejora</strong>
                <p className="mt-1 text-white/70">
                  Verificamos rendimiento, corregimos detalles y dejamos una base lista para escalar.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">Beneficios reales</span>
          <h2 className="mt-5 text-4xl font-bold title-gradient">
            Lo que obtienes al trabajar con una solución bien hecha
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="card">
            <h3 className="text-xl font-bold text-yellow-400">Más confianza</h3>
            <p className="mt-3 text-white/75">
              Una imagen digital profesional mejora la percepción de tu negocio desde el primer vistazo.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-yellow-400">Más eficiencia</h3>
            <p className="mt-3 text-white/75">
              La automatización reduce tareas repetitivas y libera tiempo para enfocarte en crecer.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-yellow-400">Más control</h3>
            <p className="mt-3 text-white/75">
              Centraliza información, conecta herramientas y obtén procesos más ordenados.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-yellow-400">Más oportunidades</h3>
            <p className="mt-3 text-white/75">
              Un sistema bien planteado puede ayudarte a captar, atender y cerrar más clientes.
            </p>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="section">
        <div className="card">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="badge">Stack moderno</span>
              <h2 className="mt-5 text-4xl font-bold title-gradient">
                Tecnologías actuales para proyectos rápidos, escalables y visualmente potentes
              </h2>
              <p className="subtitle">
                Trabajamos con herramientas modernas para crear experiencias fluidas, adaptables y listas
                para crecer con tu empresa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["React", "Vite", "TypeScript", "Tailwind", "Node.js", "APIs", "Automation", "AI", "Responsive"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-5 text-center font-medium text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">Preguntas frecuentes</span>
          <h2 className="mt-5 text-4xl font-bold title-gradient">
            Resolvemos lo que normalmente preguntan nuestros clientes
          </h2>
        </div>

        <div className="mt-12 space-y-5">
          <div className="card">
            <h3 className="text-xl font-bold text-yellow-400">¿Solo hacen páginas web?</h3>
            <p className="mt-3 text-white/75">
              No. También desarrollamos automatizaciones, integraciones por API, chatbots, asistentes inteligentes
              y sistemas personalizados según las necesidades del proyecto.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-yellow-400">¿Pueden adaptar la solución a mi negocio?</h3>
            <p className="mt-3 text-white/75">
              Sí. La idea es construir algo alineado a tu giro, tu imagen y tus procesos, no una plantilla genérica.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-yellow-400">¿Se puede escalar después?</h3>
            <p className="mt-3 text-white/75">
              Sí. Dejamos bases preparadas para añadir nuevas funciones, formularios, módulos, conexiones o mejoras visuales.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section pt-6">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 via-yellow-300/5 to-transparent p-8 text-center shadow-[0_0_50px_rgba(250,204,21,0.08)] lg:p-12">
          <h2 className="text-4xl font-bold title-gradient">
            Tu negocio puede verse mejor, vender mejor y operar mejor
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/75">
            Si buscas una presencia digital seria, moderna y útil, podemos ayudarte a construirla con una identidad tech,
            estructura profesional y funciones que realmente aporten valor.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contacto" className="btn-primary">
              Hablar sobre mi proyecto
            </a>
            <a href="/ia" className="btn-secondary">
              Ver soluciones con IA
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}