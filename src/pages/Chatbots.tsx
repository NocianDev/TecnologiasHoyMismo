import PortfolioCard from "../components/PortfolioCard";
import PageHero from "../components/PageHero";
import { CHATBOT_PROJECTS } from "../data/portfolioData";

export default function Chatbots() {
  return (
    <main>
      <PageHero
        badge="Chatbots y Voz IA"
        title="Asistentes conversacionales, voz inteligente y atención 24/7"
        description="Creamos chatbots, asistentes de voz y sistemas multi-agente que automatizan soporte, ventas, seguimiento y atención al cliente con integración a canales reales y lógica avanzada."
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