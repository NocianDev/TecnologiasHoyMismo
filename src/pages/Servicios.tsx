import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { SERVICE_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";

export default function Servicios() {
  return (
    <main>
      <PageHero
        badge="Servicios y Plataformas"
        title={
  <div className="space-y-3 text-2xl sm:text-3xl lg:text-5xl">
    
    <div className="flex items-start gap-3">
      <span className="mt-2 text-white">•</span>
      <span>Diseño de páginas web</span>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-white">•</span>
      <span>Tecnologia con IA</span>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-white">•</span>
      <span>Campañas digitales</span>
    </div>

  </div>
}
        description="Desarrollamos plataformas y soluciones web orientadas a productividad, control operativo, presencia digital y escalabilidad real, implementaciones modernas con IA y campañas con enfoque en redes sociales para empresas."
        image="/images/System.png"
        imageAlt="Servicios y plataformas empresariales"
      />

      <section className="section pt-6">
        <div className="mt-6 space-y-8">
          {SERVICE_PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}