import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom"; // 🔥 IMPORTANTE

export default function WhatsAppButton() {
  const location = useLocation();

  // 🔥 ocultar en la demo
  if (location.pathname === "/ia/demo") return null;

  const phone = "528121602495";
  const message = encodeURIComponent(
    "Hola, me interesa recibir información sobre sus servicios."
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="group fixed bottom-6 right-6 z-[999] sm:bottom-8 sm:right-8"
    >
      <span className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 blur-md animate-pulse" />

        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_40px_rgba(37,211,102,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1ebe5b] sm:h-16 sm:w-16">
          <FaWhatsapp className="h-8 w-8 text-white" />
        </span>
      </span>
    </a>
  );
}