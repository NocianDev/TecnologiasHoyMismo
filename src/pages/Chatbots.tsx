import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { CHATBOT_PROJECTS } from "../data/portfolioData";

export default function Chatbots() {
  return (
    <main>
      <PageHero
        badge="Chatbots y Voz IA"
        title="Chatbots con enfoque empresarial y Dashboards"
        description="Creamos chatbots, asistentes de voz y sistemas multi-agente que automatizan soporte, ventas y seguimiento ademas de dashboards para monitoreo y control de operaciones, diseñados para mejorar la eficiencia, experiencia del cliente y resultados comerciales reales."
        image="/images/Chatbot.png"
        imageAlt="Chatbots, agentes conversacionales y voz inteligente"
      />

      <section className="section pt-6">
        <div className="mt-6 space-y-8">
          {CHATBOT_PROJECTS.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}