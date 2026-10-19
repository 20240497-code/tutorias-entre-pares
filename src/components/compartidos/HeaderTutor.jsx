import { Link, NavLink } from "react-router-dom";
import MenuCuenta from "./MenuCuenta";

// Cabecera autenticada en modo TUTOR (conmutador en "Tutor").
export default function HeaderTutor() {
  return (
    <header className="h-19 px-14 flex items-center justify-between bg-surface border-b border-border">
      <div className="flex items-center gap-10 h-full">
        <Link to="/tutor/perfil" className="text-xl font-bold text-primary">Tutorías entre pares</Link>
        <nav className="flex items-center gap-8 h-full text-[15px]">
          <NavLink to="/tutor/perfil" className="h-full flex items-center border-b-2 border-transparent text-text-muted hover:text-text aria-[current=page]:border-primary aria-[current=page]:text-primary aria-[current=page]:font-semibold">Mi perfil de tutor</NavLink>
          <NavLink to="/tutor/cursos" className="h-full flex items-center border-b-2 border-transparent text-text-muted hover:text-text aria-[current=page]:border-primary aria-[current=page]:text-primary aria-[current=page]:font-semibold">Mis cursos</NavLink>
          <NavLink to="/tutor/disponibilidad" className="h-full flex items-center border-b-2 border-transparent text-text-muted hover:text-text aria-[current=page]:border-primary aria-[current=page]:text-primary aria-[current=page]:font-semibold">Disponibilidad</NavLink>
          <NavLink to="/tutor/solicitudes" className="h-full flex items-center border-b-2 border-transparent text-text-muted hover:text-text aria-[current=page]:border-primary aria-[current=page]:text-primary aria-[current=page]:font-semibold">Solicitudes</NavLink>
          <NavLink to="/tutor/sesiones" className="h-full flex items-center border-b-2 border-transparent text-text-muted hover:text-text aria-[current=page]:border-primary aria-[current=page]:text-primary aria-[current=page]:font-semibold">Mis sesiones</NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-6 h-full">
        <div className="flex bg-primary-soft rounded-full p-1 text-sm font-semibold">
          <Link to="/directorio" className="px-4 py-1 rounded-full text-primary hover:bg-surface">Estudiante</Link>
          <Link to="/tutor/perfil" className="px-4 py-1 rounded-full bg-primary text-white">Tutor</Link>
        </div>
        <MenuCuenta />
      </div>
    </header>
  );
}
