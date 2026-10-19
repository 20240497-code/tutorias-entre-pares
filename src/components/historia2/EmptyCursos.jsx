import { Link } from "react-router-dom";

// Estado vacío del listado de Mis cursos (2.2).
export default function EmptyCursos() {
  return (
    <div className="py-16 px-8 bg-surface border border-border rounded-lg text-center">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-soft text-primary flex items-center justify-center text-2xl font-bold">
        +
      </div>
      <h3 className="text-xl font-bold text-text mb-2">Todavía no declaras cursos</h3>
      <p className="text-[15px] text-text-muted mb-6">
        Agrega los cursos que dominas para aparecer en el directorio.
      </p>
      <Link to="/tutor/cursos" className="inline-block px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
        Agregar mi primer curso
      </Link>
    </div>
  );
}
