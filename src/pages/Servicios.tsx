export default function Servicios() {
  return (
    <div>

      {/* HERO */}
      <section className="section grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold title-gradient">
            Nuestros Servicios
          </h1>

          <p className="subtitle">
            Ofrecemos soluciones digitales completas para empresas que buscan
            modernizarse, automatizar procesos y aumentar sus ingresos.
          </p>
        </div>

        <img
          src="/images/System.jpg"
          className="w-[600px] rounded-2xl shadow-2xl"
        />

      </section>

      {/* LISTA DETALLADA */}
      <section className="section grid md:grid-cols-2 gap-8">

        <div className="card">
          <h2 className="text-yellow-400 font-bold text-xl">
            Desarrollo Web
          </h2>
          <p className="mt-2 text-white/75">
            Creamos páginas web profesionales, rápidas y optimizadas para generar
            conversiones.
          </p>
        </div>

        <div className="card">
          <h2 className="text-yellow-400 font-bold text-xl">
            Automatización
          </h2>
          <p className="mt-2 text-white/75">
            Automatizamos procesos repetitivos para mejorar productividad.
          </p>
        </div>

        <div className="card">
          <h2 className="text-yellow-400 font-bold text-xl">
            APIs
          </h2>
          <p className="mt-2 text-white/75">
            Conectamos plataformas para crear sistemas eficientes.
          </p>
        </div>

        <div className="card">
          <h2 className="text-yellow-400 font-bold text-xl">
            Inteligencia Artificial
          </h2>
          <p className="mt-2 text-white/75">
            Implementamos IA para análisis, automatización y atención.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="section text-center">
        <h2 className="text-3xl font-bold title-gradient">
          Construyamos tu sistema ideal
        </h2>

        <button className="btn-primary mt-6">
          Solicitar servicio
        </button>
      </section>

    </div>
  );
}