import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { SERVICE_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";

export default function Servicios() {
  return (
    <main>
      <PageHero
        badge="Servicios y Plataformas"
        title="Diseño de paginas web,GPS para vehiculos y camiones,Campañas de redes sociales"
        description="Desarrollamos plataformas y soluciones web orientadas a productividad, control operativo, presencia digital y escalabilidad real, servicios de GPS de gran precicionn y campañas con enfoque en redes sociales para empresas."
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