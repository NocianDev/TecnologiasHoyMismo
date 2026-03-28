import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative transition-colors duration-300 ${
      isActive ? "text-yellow-400" : "text-white/85 hover:text-yellow-300"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-xl px-4 py-3 text-base font-medium transition-colors duration-300 ${
      isActive
        ? "bg-yellow-400/10 text-yellow-400"
        : "text-white/85 hover:bg-white/5 hover:text-yellow-300"
    }`;

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative sticky top-0 z-50 overflow-hidden border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/Hexagonos2.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-yellow-400/35 to-black/80" />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" /> */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="flex items-center gap-1"
          onClick={closeMenu}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-xl" />
            <img
              src="/images/Logo4.png"
              alt="Hoy Mismo Tecnología"
              className="relative h-14 w-auto object-contain drop-shadow-[0_0_20px_rgba(250,204,21,0.3)] sm:h-16 md:h-20 lg:h-24"
            />
          </div>

          <p className="brand-title text-xl font-extrabold tracking-wide sm:text-3xl md:text-4xl">
            HOY MISMO TECNOLOGÍA
          </p>
        </Link>

        <nav className="hidden items-center gap-7 text-[17px] font-semibold md:flex lg:text-[20px]">
          <NavLink to="/" className={navLinkClass}>Inicio</NavLink>
          <NavLink to="/servicios" className={navLinkClass}>Servicios</NavLink>
          <NavLink to="/ia" className={navLinkClass}>IA</NavLink>
          <NavLink to="/apis" className={navLinkClass}>APIs</NavLink>
          <NavLink to="/chatbots" className={navLinkClass}>Chatbots</NavLink>
          <NavLink to="/contacto" className={navLinkClass}>Contacto</NavLink>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-yellow-400/30 hover:text-yellow-300 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`relative z-10 overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-2">
            <NavLink to="/" className={mobileNavLinkClass} onClick={closeMenu}>Inicio</NavLink>
            <NavLink to="/servicios" className={mobileNavLinkClass} onClick={closeMenu}>Servicios</NavLink>
            <NavLink to="/ia" className={mobileNavLinkClass} onClick={closeMenu}>IA</NavLink>
            <NavLink to="/apis" className={mobileNavLinkClass} onClick={closeMenu}>APIs</NavLink>
            <NavLink to="/chatbots" className={mobileNavLinkClass} onClick={closeMenu}>Chatbots</NavLink>
            <NavLink to="/contacto" className={mobileNavLinkClass} onClick={closeMenu}>Contacto</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}