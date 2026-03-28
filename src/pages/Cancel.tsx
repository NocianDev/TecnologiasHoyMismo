export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold text-white">Pago cancelado</h1>
        <p className="mt-4 text-white/70">
          La compra no se completó. Puedes intentarlo de nuevo cuando quieras.
        </p>
      </div>
    </div>
  );
}