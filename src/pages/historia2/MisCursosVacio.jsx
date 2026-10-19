import { Link } from "react-router-dom";
import HeaderTutor from "../../components/compartidos/HeaderTutor";
import Footer from "../../components/compartidos/Footer";
import EmptyCursos from "../../components/historia2/EmptyCursos";

// 2.2 Estado vacío del listado (dentro de la misma pantalla)
export default function MisCursosVacio() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderTutor />

      <main className="flex-1 px-14 py-10">
        <p className="text-[13px] text-text-muted mb-2">
          <Link to="/tutor/perfil" className="hover:text-primary">Mi perfil de tutor</Link> › <span className="text-text">Mis cursos</span>
        </p>

        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-[28px] font-bold leading-8 mb-1">Mis cursos</h1>
            <p className="text-[15px] text-text-muted">
              0 cursos declarados. Los estudiantes te encontrarán en el directorio por estos códigos.
            </p>
          </div>
          <Link to="/tutor/cursos" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
            + Agregar curso
          </Link>
        </div>

        <div className="flex gap-3 mb-6">
          <input type="text" placeholder="Buscar curso por código o nombre: «FI202»"
            className="flex-1 px-3 py-2 rounded-lg border border-border bg-surface text-[15px] focus:outline-none focus:border-primary" />
          <button type="button" className="px-6 py-2 rounded-lg font-semibold border border-primary text-primary hover:bg-primary-soft">
            Buscar
          </button>
        </div>

        <EmptyCursos />
      </main>

      <Footer />
    </div>
  );
}
