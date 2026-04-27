import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-h-[720px] flex-col justify-center">
            <h1 className="mt-2 text-5xl font-extrabold leading-[0.95] md:text-7xl">
              <span className="title-gradient">
                Tecnología que vende, automatiza y escala.
              </span>
            </h1>

            <p className="subtitle max-w-2xl">
              Hoy Mismo Tecnología desarrolla páginas web profesionales con enfoque
              empresarial, APIs, chatbots disponibles 24/7, sistemas personalizados,
              automatizaciones y asistentes con inteligencia artificial. Creamos
              herramientas modernas, funcionales y enfocadas en resultados reales.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contacto" className="btn-primary">
                Solicitar cotización
              </Link>
              <Link to="/servicios" className="btn-secondary">
                Explorar servicios
              </Link>
            </div>

            <div className="quick-nav-grid">
              <Link to="/servicios" className="quick-nav-card">
                <div className="quick-nav-icon">Web</div>
                <div className="quick-nav-title">Desarrollo</div>
                <p className="quick-nav-text">
                  Sitios modernos, profesionales y optimizados para negocio.
                </p>
              </Link>

              <Link to="/ia" className="quick-nav-card">
                <div className="quick-nav-icon">IA</div>
                <div className="quick-nav-title">Inteligencia</div>
                <p className="quick-nav-text">
                  Automatización inteligente para procesos, análisis y asistencia.
                </p>
              </Link>

              <Link to="/apis" className="quick-nav-card">
                <div className="quick-nav-icon">APIs</div>
                <div className="quick-nav-title">Integraciones</div>
                <p className="quick-nav-text">
                  Conectamos sistemas, formularios, CRM y servicios externos.
                </p>
              </Link>

              <Link to="/chatbots" className="quick-nav-card">
                <div className="quick-nav-icon">Bots</div>
                <div className="quick-nav-title">Atención 24/7</div>
                <p className="quick-nav-text">
                  Bots para soporte, ventas, captación de clientes y seguimiento.
                </p>
              </Link>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute left-[5%] top-[10%] h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl"></div>
            <div className="absolute bottom-[10%] right-[5%] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>
            <div className="absolute inset-[8%] rounded-full border border-yellow-400/10"></div>

            <div className="relative z-10 mx-auto aspect-[4/3] w-full max-w-[760px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl xl:max-w-[820px]">
              <img
                src="/images/Hero8.png"
                alt="Tecnología y automatización"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0">
                {/* Web empresariales */}
                <div className="group absolute left-[38%] top-[9%] h-[25%] w-[26%] cursor-pointer">
                  <div className="absolute inset-0 transition-all duration-300 group-hover:bg-yellow-300/10 group-hover:shadow-[0_0_60px_rgba(250,204,21,1),0_0_120px_rgba(250,204,21,0.8),0_0_180px_rgba(250,204,21,0.6)]" />
                </div>

                <div className="group absolute left-[14%] top-[45%] h-[22%] w-[22%] cursor-pointer">
                  <div className="absolute inset-0 transition-all duration-300 group-hover:bg-yellow-300/10 group-hover:shadow-[0_0_60px_rgba(250,204,21,1),0_0_120px_rgba(250,204,21,0.8),0_0_180px_rgba(250,204,21,0.6)]" />
                </div>

                {/* CRM */}
                <div className="group absolute left-[67%] top-[45%] h-[22%] w-[24%] cursor-pointer">
                  <div className="absolute inset-0 transition-all duration-300 group-hover:bg-yellow-300/10 group-hover:shadow-[0_0_60px_rgba(250,204,21,1),0_0_120px_rgba(250,204,21,0.8),0_0_180px_rgba(250,204,21,0.6)]" />
                </div>

                {/* IA */}
                <div className="group absolute left-[25%] top-[78%] h-[23%] w-[24%] cursor-pointer">
                  <div className="absolute inset-0 transition-all duration-300 group-hover:bg-yellow-300/10 group-hover:shadow-[0_0_60px_rgba(250,204,21,1),0_0_120px_rgba(250,204,21,0.8),0_0_180px_rgba(250,204,21,0.6)]" />
                </div>

                {/* Chatbots */}
                <div className="group absolute left-[55%] top-[78%] h-[23%] w-[21%] cursor-pointer">
                  <div className="absolute inset-0 duration-300 group-hover:bg-yellow-300/10 group-hover:shadow-[0_0_60px_rgba(250,204,21,1),0_0_120px_rgba(250,204,21,0.8),0_0_180px_rgba(250,204,21,0.6)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PORTAFOLIO DESTACADO */}
      <section className="section pt-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/15 via-white/[0.04] to-cyan-400/10 p-6 shadow-[0_0_70px_rgba(250,204,21,0.08)] sm:p-8 lg:p-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"></div>
          <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>
          <div className="absolute right-8 top-8 hidden rounded-full border border-yellow-300/20 px-5 py-2 text-sm font-semibold text-yellow-200/80 lg:block">
            Proyectos reales
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="badge">Portafolio Hoy Mismo</span>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
                <span className="title-gradient">
                  Mira cómo se ven nuestros proyectos en acción
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                Explora ejemplos de páginas web, asistentes con IA, chatbots,
                integraciones y soluciones digitales creadas para negocios que quieren
                verse más profesionales, vender mejor y automatizar procesos reales.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-2xl font-extrabold text-yellow-300">Web</p>
                  <p className="mt-1 text-sm text-white/65">
                    Sitios modernos y responsivos.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-2xl font-extrabold text-yellow-300">IA</p>
                  <p className="mt-1 text-sm text-white/65">
                    Asistentes y automatización.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-2xl font-extrabold text-yellow-300">APIs</p>
                  <p className="mt-1 text-sm text-white/65">
                    Integraciones para empresas.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/servicios" className="btn-primary">
                  Ver portafolio
                </Link>

                <Link to="/contacto" className="btn-secondary">
                  Quiero algo parecido
                </Link>
              </div>
            </div>

            <Link
              to="/servicios"
              className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-4 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/40 hover:shadow-[0_0_50px_rgba(250,204,21,0.16)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-cyan-400/10 opacity-70"></div>

              <div className="relative z-10 overflow-hidden rounded-[1.5rem] border border-white/10">
                <img
                  src="/images/Web.png"
                  alt="Vista previa del portafolio"
                  className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[340px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    Click para explorar
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-white">
                    Portafolio de servicios
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Diseño web, IA, chatbots, APIs y automatizaciones listas para negocios.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                  <p className="text-sm font-bold text-white">Diseño</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                  <p className="text-sm font-bold text-white">Código</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                  <p className="text-sm font-bold text-white">Resultados</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOQUES INFORMATIVOS */}
      <section className="section">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Enfoque estratégico
            </p>
            <h2 className="mt-4 text-2xl font-bold">Tecnología con propósito</h2>
            <p className="mt-4 text-white/75">
              Cada proyecto se desarrolla con un objetivo claro: mejorar presencia digital,
              automatizar procesos, optimizar operación y aumentar oportunidades de venta.
            </p>
          </div>

          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Diseño y experiencia
            </p>
            <h2 className="mt-4 text-2xl font-bold">Imagen moderna y profesional</h2>
            <p className="mt-4 text-white/75">
              Diseñamos interfaces con estilo tecnológico, jerarquía visual clara y una
              experiencia de usuario que transmite solidez, confianza y modernidad.
            </p>
          </div>

          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Desarrollo escalable
            </p>
            <h2 className="mt-4 text-2xl font-bold">Soluciones listas para crecer</h2>
            <p className="mt-4 text-white/75">
              Desde una landing page hasta sistemas completos con automatizaciones, APIs
              e inteligencia artificial, dejamos una base bien estructurada para evolucionar.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="section">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-4xl font-bold title-gradient">
            Todo lo que una empresa moderna necesita para digitalizarse
          </h2>
          <p className="subtitle mx-auto">
            Combinamos diseño, tecnología y automatización para construir soluciones completas,
            funcionales y listas para operar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* WEB (imagen) */}
          <div className="card">
            <img
              src="/images/Web.png"
              alt="Páginas web"
              className="mb-6 h-32 w-full rounded-2xl object-cover"
            />
            <h3 className="text-xl font-bold text-yellow-400">Páginas web profesionales</h3>
            <p className="mt-3 text-white/75">
              Sitios modernos, responsivos y optimizados para mostrar tus servicios,
              generar confianza y convertir visitantes en clientes.
            </p>
          </div>

          {/* IA (video) */}
          <div className="card">
            <div className="mb-6 h-32 w-full overflow-hidden rounded-2xl border border-white/10">
              <video
                src="/videos/Video Assistant 4.mp4"
                className="h-full w-full object-cover"
                controls
              />
            </div>
            <h3 className="text-xl font-bold text-yellow-400">Automatización con IA</h3>
            <p className="mt-3 text-white/75">
              Implementamos herramientas inteligentes que responden, clasifican,
              asisten y agilizan procesos sin depender siempre de intervención manual.
            </p>
          </div>

          {/* APIs (video) */}
          <div className="card">
            <div className="mb-6 h-32 w-full overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/LGm9tyBb1iM?start=4"
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <h3 className="text-xl font-bold text-yellow-400">APIs e integraciones</h3>
            <p className="mt-3 text-white/75">
              Conectamos sistemas, plataformas, formularios, CRM, bases de datos
              y servicios externos para crear flujos más inteligentes.
            </p>
          </div>

          {/* CHATBOT (imagen) */}
          <div className="card">
            <img
              src="/images/Chatbot.png"
              alt="Chatbots"
              className="mb-6 h-32 w-full rounded-2xl object-cover"
            />
            <h3 className="text-xl font-bold text-yellow-400">Chatbots inteligentes</h3>
            <p className="mt-3 text-white/75">
              Automatiza la atención al cliente con chatbots que responden en tiempo real,
              capturan leads y mejoran la experiencia del usuario.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] xl:gap-8">
            {/* IMAGEN */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[500px] overflow-hidden rounded-[2rem] xl:max-w-[540px]">
                <img
                  src="/images/Proceso.png"
                  alt="Proceso de trabajo"
                  className="h-auto w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* TEXTO */}
            <div className="w-full max-w-[680px]">
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
          </div>
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

      {/* STACK MODERNO */}
      <section className="section">
        <div className="card">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="badge">Stack moderno</span>
              <h2 className="mt-5 text-4xl font-bold title-gradient">
                Tecnologías actuales para proyectos rápidos, escalables y visualmente potentes
              </h2>
              <p className="subtitle">
                Trabajamos con herramientas modernas para crear experiencias fluidas,
                adaptables y listas para crecer con tu empresa. Nuestro enfoque combina
                frontend ágil, integraciones, automatización y soluciones tecnológicas
                pensadas para rendimiento real.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "React",
                "Vite",
                "TypeScript",
                "Tailwind",
                "Node.js",
                "APIs",
                "Automation",
                "AI",
                "Responsive",
              ].map((item) => (
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

      {/* CTA FINAL */}
      <section className="section pt-6">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 via-yellow-300/5 to-transparent p-8 text-center shadow-[0_0_50px_rgba(250,204,21,0.08)] lg:p-12">
          <h2 className="text-4xl font-bold title-gradient">
            Tu negocio puede verse mejor, vender mejor y operar mejor
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/75">
            Si buscas una presencia digital seria, moderna y útil, podemos ayudarte
            a construirla con una identidad tecnológica, estructura profesional y
            funciones que realmente aporten valor.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contacto" className="btn-primary">
              Hablar sobre mi proyecto
            </Link>
            <Link to="/ia" className="btn-secondary">
              Ver soluciones con IA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}