import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function AvailabilityBadge({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  return (
    <div className="relative shrink-0">
      <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl" />

      <div
        className={`relative flex items-center justify-center rounded-full border border-yellow-300/35 bg-black/30 shadow-[0_0_16px_rgba(250,204,21,0.16)] backdrop-blur-sm ${
          mobile ? "h-[34px] w-[34px]" : "h-[42px] w-[42px]"
        }`}
      >
        <div
          className={`absolute rounded-full border-yellow-400/80 ${
            mobile ? "inset-[3px] border-[2px]" : "inset-[4px] border-[3px]"
          }`}
        />

        <div
          className={`absolute border-r-[3px] border-t-[3px] border-yellow-400 ${
            mobile
              ? "right-[2px] top-[2px] h-2.5 w-2.5 rotate-[98deg]"
              : "right-[4px] top-[2px] h-3 w-3 rotate-[98deg]"
          }`}
        />

        <span
          className={`relative z-10 font-black tracking-tight text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.35)] ${
            mobile ? "text-[14px]" : "text-[15px]"
          }`}
        >
          24
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative whitespace-nowrap transition-colors duration-300 ${
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          onClick={closeMenu}
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-xl" />
            <img
              src="/images/Logo4.png"
              alt="Hoy Mismo Tecnología"
              className="relative h-12 w-auto object-contain drop-shadow-[0_0_20px_rgba(250,204,21,0.3)] sm:h-14 lg:h-16 xl:h-18 2xl:h-22"
            />
          </div>

          {/* Móvil y tablet */}
          <div className="flex min-w-0 items-center gap-2 lg:hidden">
            <p className="brand-title text-base font-extrabold leading-none tracking-wide sm:text-lg md:text-xl">
              HOY MISMO TECNOLOGÍA
            </p>
            <AvailabilityBadge mobile />
          </div>

          {/* Desktop */}
          <div className="hidden min-w-0 items-center lg:flex">
            <p className="brand-title whitespace-nowrap text-[24px] font-extrabold leading-none tracking-wide xl:text-[28px] 2xl:text-[34px]">
              HOY MISMO TECNOLOGÍA
            </p>

            {/* El 24 solo en pantallas muy amplias */}
            <div className="ml-2 hidden 2xl:flex">
              <AvailabilityBadge />
            </div>
          </div>
        </Link>

        {/* Menú desktop */}
        <nav className="hidden flex-1 items-center justify-end gap-4 text-[15px] font-semibold lg:flex xl:gap-5 xl:text-[17px] 2xl:gap-7 2xl:text-[20px]">
          <NavLink to="/" className={navLinkClass}>Inicio</NavLink>
          <NavLink to="/servicios" className={navLinkClass}>Servicios</NavLink>
          <NavLink to="/ia" className={navLinkClass}>IA</NavLink>
          <NavLink to="/apis" className={navLinkClass}>APIs</NavLink>
          <NavLink to="/chatbots" className={navLinkClass}>Chatbots</NavLink>
          <NavLink to="/contacto" className={navLinkClass}>Contacto</NavLink>
        </nav>

        {/* Botón hamburguesa */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-yellow-400/30 hover:text-yellow-300 lg:hidden"
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

      {/* Menú móvil / tablet */}
      <div
        className={`relative z-10 overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
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