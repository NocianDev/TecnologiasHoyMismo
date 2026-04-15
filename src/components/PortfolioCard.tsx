import { Link } from "react-router-dom";
import type { PortfolioProject } from "../data/portfolioData";

type Props = {
  project: PortfolioProject;
};

const colorMap = {
  green: {
    title: "text-emerald-400",
    badge: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
    metric: "text-emerald-400",
    button: "border-emerald-400/30 text-emerald-300 hover:bg-emerald-400/10",
  },
  purple: {
    title: "text-violet-400",
    badge: "text-violet-300 border-violet-400/30 bg-violet-400/10",
    metric: "text-violet-400",
    button: "border-violet-400/30 text-violet-300 hover:bg-violet-400/10",
  },
  cyan: {
    title: "text-cyan-400",
    badge: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
    metric: "text-cyan-400",
    button: "border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10",
  },
  blue: {
    title: "text-blue-400",
    badge: "text-blue-300 border-blue-400/30 bg-blue-400/10",
    metric: "text-blue-400",
    button: "border-blue-400/30 text-blue-300 hover:bg-blue-400/10",
  },
  yellow: {
    title: "text-amber-400",
    badge: "text-amber-300 border-amber-400/30 bg-amber-400/10",
    metric: "text-amber-400",
    button: "border-amber-400/30 text-amber-300 hover:bg-amber-400/10",
  },
};

export default function PortfolioCard({ project }: Props) {
  const colors = colorMap[project.color];

  return (
    <article className="card overflow-hidden">
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          {project.featured && (
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-yellow-300">
              <span>★</span>
              <span>Proyecto destacado</span>
            </div>
          )}

          <h3 className={`text-3xl font-bold ${colors.title}`}>
            {project.title}
          </h3>
        </div>

        <div className="flex min-w-[180px] flex-col items-end justify-between">
          <div className="text-right">
            <div className={`text-6xl font-extrabold ${colors.metric}`}>
              {project.metric}
            </div>
            <div className="mt-2 text-xl text-white/45">
              {project.metricLabel}
            </div>
          </div>

          <Link
            to="/contacto"
            className={`mt-8 inline-flex items-center gap-3 rounded-2xl border px-6 py-4 font-semibold transition ${colors.button}`}
          >
            <span>Solicitar Info</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}