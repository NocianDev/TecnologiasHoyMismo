import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 ${
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
          <img
            src="/images/Logo.png"
            alt="Hoy Mismo Tecnología"
            className="h-16 w-auto object-contain sm:h-20 md:h-24"
          />

          <div className="hidden sm:block">
            <p className="text-base font-semibold tracking-wide text-yellow-400 md:text-lg">
              HOY MISMO TECNOLOGÍA
            </p>
            <p className="text-xs text-white/60 md:text-sm">
              Web, IA, APIs y automatización
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-[17px] font-medium md:flex">
          <NavLink to="/" className={navLinkClass}>
            Inicio
          </NavLink>
          <NavLink to="/servicios" className={navLinkClass}>
            Servicios
          </NavLink>
          <NavLink to="/ia" className={navLinkClass}>
            IA
          </NavLink>
          <NavLink to="/apis" className={navLinkClass}>
            APIs
          </NavLink>
          <NavLink to="/chatbots" className={navLinkClass}>
            Chatbots
          </NavLink>
          <NavLink to="/contacto" className={navLinkClass}>
            Contacto
          </NavLink>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-yellow-400/30 hover:text-yellow-300 md:hidden"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-2">
            <NavLink to="/" className={mobileNavLinkClass} onClick={closeMenu}>
              Inicio
            </NavLink>
            <NavLink to="/servicios" className={mobileNavLinkClass} onClick={closeMenu}>
              Servicios
            </NavLink>
            <NavLink to="/ia" className={mobileNavLinkClass} onClick={closeMenu}>
              IA
            </NavLink>
            <NavLink to="/apis" className={mobileNavLinkClass} onClick={closeMenu}>
              APIs
            </NavLink>
            <NavLink to="/chatbots" className={mobileNavLinkClass} onClick={closeMenu}>
              Chatbots
            </NavLink>
            <NavLink to="/contacto" className={mobileNavLinkClass} onClick={closeMenu}>
              Contacto
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}