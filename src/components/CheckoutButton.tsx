type CheckoutButtonProps = {
  name: string;
  price: number;
};

export default function CheckoutButton({
  name,
  price,
}: CheckoutButtonProps) {
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo crear la sesión");
      }

      if (!data.url) {
        throw new Error("No se recibió la URL de Stripe");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Error al iniciar checkout:", error);
      alert("Hubo un error al iniciar el pago");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="rounded-xl bg-yellow-400 px-5 py-2 font-semibold text-black transition hover:scale-105 hover:shadow-lg"
    >
      Comprar ahora
    </button>
  );
}