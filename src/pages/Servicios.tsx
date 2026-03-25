import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { SERVICE_PROJECTS } from "../data/portfolioData";

export default function Servicios() {
  return (
    <main>
      <PageHero
        badge="Servicios y Plataformas"
        title="Sistemas web, dashboards y soluciones listas para operar"
        description="Desarrollamos plataformas, paneles administrativos, sistemas internos y soluciones web orientadas a productividad, control operativo, presencia digital y escalabilidad real para empresas."
        image="/images/System.png"
        imageAlt="Plataformas, dashboards y sistemas empresariales"
      />

      <section className="section pt-6">
        <div className="mt-6 space-y-8">
          {SERVICE_PROJECTS.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}