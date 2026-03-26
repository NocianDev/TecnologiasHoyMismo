import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { IA_PROJECTS } from "../data/portfolioData";

export default function IA() {
  return (
    <main>
      <PageHero
        badge="Inteligencia Artificial"
        title="IA con funcion de call center o recepcionista"
        description="Construimos inteligencias artificiales que brindan la capacidad de atender llamadas 24/7 y dar soluciones precisas"
        image="/images/AI.png"
        imageAlt="Inteligencia artificial, redes neuronales y sistemas cognitivos"
      />

      <section className="section pt-6">
        <div className="mt-6 space-y-8">
          {IA_PROJECTS.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}