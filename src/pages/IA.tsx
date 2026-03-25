import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { IA_PROJECTS } from "../data/portfolioData";

export default function IA() {
  return (
    <main>
      <PageHero
        badge="Inteligencia Artificial"
        title="IA aplicada a decisiones, automatización y análisis avanzado"
        description="Construimos soluciones con inteligencia artificial para observabilidad, evaluación ética, motores cognitivos, automatización empresarial y sistemas multi-modelo orientados a resultados reales."
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