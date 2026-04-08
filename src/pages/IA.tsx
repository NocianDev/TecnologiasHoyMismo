import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { IA_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";

export default function IA() {
  return (
    <main>
      <PageHero
        badge="Inteligencia Artificial"
        title="IA con función de call center o recepcionista"
        description="Construimos inteligencias artificiales que atienden llamadas 24/7, responden clientes y automatizan la comunicación de tu negocio."
        image="https://www.youtube.com/watch?v=6EqjG1kKTBA"
        imageAlt="Inteligencia artificial aplicada a negocios"
      />

      {/* 🔥 SECCIÓN EXPLICATIVA */}
      <section className="section">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-yellow-400">
            ¿Qué es Hoy Mismo Assistant?
          </h2>

          <p className="text-white/80 text-lg leading-relaxed">
            Es un asistente inteligente que responde llamadas, orienta clientes
            y automatiza la atención de tu negocio. Funciona como un recepcionista
            virtual disponible 24/7, capaz de atender múltiples personas al mismo tiempo.
          </p>

          <p className="text-white/70">
            Reduce carga operativa, mejora la experiencia del cliente y permite
            que tu equipo se enfoque en tareas más importantes.
          </p>
        </div>
      </section>

      {/* 🔥 BENEFICIOS */}
      <section className="section pt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Atiende llamadas de forma inmediata",
            "Disponible 24/7 sin descanso",
            "Resuelve dudas frecuentes automáticamente",
            "Puede atender múltiples clientes al mismo tiempo",
            "Genera reportes y seguimiento de llamadas",
            "Da una imagen moderna y profesional",
          ].map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-white/90">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 🔥 PLANES */}
      <section className="section pt-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-yellow-400">
            Planes disponibles
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              name: "Inicio",
              price: "$5,000",
              desc: "Ideal para negocios pequeños",
            },
            {
              name: "Profesional",
              price: "$10,000",
              desc: "Para empresas en crecimiento",
            },
            {
              name: "Empresarial",
              price: "$15,000",
              desc: "Solución completa y escalable",
            },
          ].map((plan, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 text-center backdrop-blur">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-3xl font-extrabold text-yellow-400 mt-2">
                  {plan.price}
                </p>
                <p className="text-white/70 mt-2">{plan.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 🔥 BOTÓN PDF */}
      <section className="section pt-0 text-center">
        <a
          href="/HoyMismoAssistant AI _V2.pdf"
          target="_blank"
          className="inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          Ver presentación completa
        </a>
      </section>

      {/* 🔥 PORTAFOLIO (lo que ya tenías) */}
      <section className="section pt-6">
        <div className="mt-6 space-y-8">
          {IA_PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}