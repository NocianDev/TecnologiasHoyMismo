export default function WhatsAppButton() {
  const phone = "528100000000";
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
      className="fixed bottom-4 right-4 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition hover:scale-110 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-white sm:h-8 sm:w-8"
      >
        <path d="M19.11 17.23c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.09-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.85.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.57.66.21 1.27.18 1.75.11.53-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.53-.32z" />
        <path d="M16.01 3.2c-7.07 0-12.8 5.72-12.8 12.78 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.58-1.69a12.77 12.77 0 0 0 6.23 1.59h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.63-3.76-9.05A12.72 12.72 0 0 0 16.01 3.2zm0 23.33h-.01a10.63 10.63 0 0 1-5.42-1.49l-.39-.23-3.9 1 1.04-3.8-.25-.39a10.58 10.58 0 0 1-1.63-5.65c0-5.87 4.78-10.65 10.66-10.65 2.84 0 5.51 1.1 7.52 3.12a10.57 10.57 0 0 1 3.12 7.52c0 5.88-4.78 10.66-10.64 10.66z" />
      </svg>
    </a>
  );
}