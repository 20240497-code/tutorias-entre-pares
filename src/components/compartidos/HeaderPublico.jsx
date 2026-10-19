import { Link, NavLink } from "react-router-dom";

// Cabecera para visitantes (sin sesión iniciada).
// NavLink marca solo la sección activa con aria-current="page",
// y las clases aria-[current=page]: la subrayan sin usar JavaScript.
export default function HeaderPublico() {
  return (
    <header className="h-19 px-14 flex items-center justify-between bg-surface border-b border-border">
      <div className="flex items-center gap-10 h-full">
        <Link to="/" className="text-xl font-bold text-primary">Tutorías entre pares</Link>
        <nav className="flex items-center gap-8 h-full text-[15px]">
          <NavLink to="/" end className="h-full flex items-center border-b-2 border-transparent text-text-muted hover:text-text aria-[current=page]:border-primary aria-[current=page]:text-primary aria-[current=page]:font-semibold">Inicio</NavLink>
          <NavLink to="/directorio" className="h-full flex items-center border-b-2 border-transparent text-text-muted hover:text-text aria-[current=page]:border-primary aria-[current=page]:text-primary aria-[current=page]:font-semibold">Directorio</NavLink>
          <a href="/#como-funciona" className="h-full flex items-center border-b-2 border-transparent text-text-muted hover:text-text">Cómo funciona</a>
          <a href="/#preguntas-frecuentes" className="h-full flex items-center border-b-2 border-transparent text-text-muted hover:text-text">Preguntas frecuentes</a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/login" className="px-4 py-2 rounded-lg font-semibold text-primary hover:bg-primary-soft">Iniciar sesión</Link>
        <Link to="/registro" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">Crear cuenta</Link>
      </div>
    </header>
  );
}
