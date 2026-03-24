import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 ${
      isActive ? "text-yellow-400" : "text-white/85 hover:text-yellow-300"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/images/Logo.png"
            alt="Hoy Mismo Digital"
            className="h-16 w-auto object-contain md:h-20"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wide text-yellow-400">
              HOY MISMO DIGITAL
            </p>
            <p className="text-xs text-white/60">
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
      </div>
    </header>
  );
}