export default function APIs() {
  return (
    <div>

      <section className="section grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold title-gradient">
            APIs e Integraciones
          </h1>

          <p className="subtitle">
            Conectamos tus sistemas para crear flujos automáticos eficientes.
          </p>
        </div>

        <img
          src="/images/API.jpg"
          className="w-[650px] rounded-2xl shadow-2xl"
        />

      </section>

      <section className="section grid md:grid-cols-3 gap-6">

        <div className="card">
          <h3 className="text-yellow-400">Integración</h3>
          <p className="text-white/75">
            Conecta plataformas fácilmente.
          </p>
        </div>

        <div className="card">
          <h3 className="text-yellow-400">Seguridad</h3>
          <p className="text-white/75">
            Datos protegidos.
          </p>
        </div>

        <div className="card">
          <h3 className="text-yellow-400">Velocidad</h3>
          <p className="text-white/75">
            Procesos rápidos y eficientes.
          </p>
        </div>

      </section>

    </div>
  );
}