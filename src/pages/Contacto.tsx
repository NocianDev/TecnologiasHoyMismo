export default function Contacto() {
  return (
    <div className="section text-center">

      <h1 className="text-5xl font-bold title-gradient">
        Contáctanos
      </h1>

      <p className="subtitle mx-auto">
        Estamos listos para ayudarte a crear una solución digital real.
      </p>

      <img
        src="/images/Contacto.jpg"
        className="w-[500px] mx-auto mt-10"
      />

      <div className="mt-10 space-y-3">
        <p>📱 WhatsApp: +52 81 XXX XXXX</p>
        <p>📧 Email: contacto@empresa.com</p>
      </div>

      <button className="btn-primary mt-6">
        Enviar mensaje
      </button>

    </div>
  );
}