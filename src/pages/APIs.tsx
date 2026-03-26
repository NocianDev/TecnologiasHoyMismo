import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { API_PROJECTS } from "../data/portfolioData";
import Reveal from "../components/Reveal";

export default function APIs() {
  return (
    <main>
      <PageHero
        badge="APIs e Integraciones"
        title="APIs y Aplicaciones Empresariales"
        description="Diseñamos APIs y aplicaciones empresariales, conectores, flujos en tiempo real y arquitecturas modernas para integrar plataformas, automatizar operaciones y centralizar información crítica."
        image="/images/API.png"
        imageAlt="APIs e integraciones empresariales"
      />

      <section className="section pt-6">
        <div className="mt-6 space-y-8">
          {API_PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}