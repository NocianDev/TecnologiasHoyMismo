export default function Chatbots() {
  return (
    <div>

      <section className="section grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/images/Chatbot.jpg"
          className="w-[600px] rounded-2xl shadow-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold title-gradient">
            Chatbots Inteligentes
          </h1>

          <p className="subtitle">
            Automatiza la atención al cliente y aumenta tus ventas 24/7.
          </p>
        </div>

      </section>

      <section className="section grid md:grid-cols-3 gap-6">

        <div className="card">
          <h3 className="text-yellow-400">Ventas</h3>
          <p className="text-white/75">
            Genera clientes automáticamente.
          </p>
        </div>

        <div className="card">
          <h3 className="text-yellow-400">Soporte</h3>
          <p className="text-white/75">
            Responde dudas al instante.
          </p>
        </div>

        <div className="card">
          <h3 className="text-yellow-400">Disponibilidad</h3>
          <p className="text-white/75">
            Funciona 24/7 sin descanso.
          </p>
        </div>

      </section>

    </div>
  );
}