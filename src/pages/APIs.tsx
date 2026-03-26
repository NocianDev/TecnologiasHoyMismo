import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { API_PROJECTS } from "../data/portfolioData";

export default function APIs() {
  return (
    <main>
      <PageHero
        badge="APIs e Integraciones"
        title="APIS y aplicaciones "
        description="Diseñamos APIs y aplicaciones empresariales, conectores, flujos en tiempo real y arquitecturas modernas para integrar plataformas, automatizar operaciones y centralizar información crítica."
        image="/images/API.png"
        imageAlt="Integraciones, backend y arquitectura de APIs"
      />

      <section className="section pt-6">
        <div className="mt-6 space-y-8">
          {API_PROJECTS.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}