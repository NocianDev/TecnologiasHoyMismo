import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { SERVICE_PROJECTS } from "../data/portfolioData";

export default function Servicios() {
  return (
    <main>
      <PageHero
        badge="Servicios y Plataformas"
        title="Diseño de paginas web,GPS para vehiculos y camiones,Campañas de redes sociales"
        description="Desarrollamos plataformas y soluciones web orientadas a productividad, control operativo, presencia digital y escalabilidad real, servicios de GPS de gran precicionn y campañas con enfoque en redes sociales para empresas."
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