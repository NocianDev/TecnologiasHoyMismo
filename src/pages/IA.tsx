export default function IA() {
  return (
    <div>

      {/* HERO */}
      <section className="section grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold title-gradient">
            Inteligencia Artificial
          </h1>

          <p className="subtitle">
            Automatizamos tareas, analizamos datos y creamos asistentes
            inteligentes que trabajan por ti.
          </p>
        </div>

        <img
          src="/images/AI.jpg"
          className="w-[650px] rounded-2xl shadow-2xl"
        />

      </section>

      {/* BENEFICIOS */}
      <section className="section grid md:grid-cols-3 gap-6">

        <div className="card">
          <h3 className="text-yellow-400 font-bold">Automatización</h3>
          <p className="text-white/75">
            Reduce trabajo manual y errores.
          </p>
        </div>

        <div className="card">
          <h3 className="text-yellow-400 font-bold">Análisis</h3>
          <p className="text-white/75">
            Obtén información clave de tus datos.
          </p>
        </div>

        <div className="card">
          <h3 className="text-yellow-400 font-bold">Escalabilidad</h3>
          <p className="text-white/75">
            Crece sin aumentar costos.
          </p>
        </div>

      </section>

    </div>
  );
}