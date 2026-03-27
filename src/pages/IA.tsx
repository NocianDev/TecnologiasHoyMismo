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
  description="Construimos inteligencias artificiales que brindan la capacidad de atender llamadas 24/7 y dar soluciones precisas"
  image="https://www.youtube.com/watch?v=6EqjG1kKTBA"
  imageAlt="Inteligencia artificial aplicada a negocios"
/>

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