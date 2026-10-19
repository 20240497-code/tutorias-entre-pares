import { Link } from "react-router-dom";
import HeaderTutor from "../../components/compartidos/HeaderTutor";
import Footer from "../../components/compartidos/Footer";

// 2.2 Mis cursos · ROL: TUTOR
export default function MisCursos() {
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
              3 cursos declarados. Los estudiantes te encontrarán en el directorio por estos códigos.
            </p>
          </div>
          <button type="button" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
            + Agregar curso
          </button>
        </div>

        <div className="flex gap-3 mb-6">
          <input type="text" placeholder="Buscar curso por código o nombre: «FI202»"
            className="flex-1 px-3 py-2 rounded-lg border border-border bg-surface text-[15px] focus:outline-none focus:border-primary" />
          <button type="button" className="px-6 py-2 rounded-lg font-semibold border border-primary text-primary hover:bg-primary-soft">
            Buscar
          </button>
        </div>

        <div className="bg-surface border border-border rounded-lg shadow-card">
          {/* Curso 1 */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-4">
              <span className="w-20 text-center py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">MA101</span>
              <div>
                <p className="text-base font-semibold">Cálculo I</p>
                <p className="text-[13px] text-text-muted">Estudios Generales · 17 sesiones dictadas</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[13px] text-text-muted">Modalidad: <span className="font-semibold text-text">ambas</span></span>
              <button type="button" className="text-[15px] font-semibold text-primary hover:underline">Editar</button>
              <button type="button" className="text-[15px] font-semibold text-danger hover:underline">Quitar</button>
            </div>
          </div>

          {/* Curso 2 */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <div className="flex items-center gap-4">
              <span className="w-20 text-center py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">ES210</span>
              <div>
                <p className="text-base font-semibold">Estadística Aplicada</p>
                <p className="text-[13px] text-text-muted">Facultad de Ingeniería · 6 sesiones dictadas</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[13px] text-text-muted">Modalidad: <span className="font-semibold text-text">remota</span></span>
              <button type="button" className="text-[15px] font-semibold text-primary hover:underline">Editar</button>
              <button type="button" className="text-[15px] font-semibold text-danger hover:underline">Quitar</button>
            </div>
          </div>

          {/* Curso 3 (último: sin border-b) */}
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-4">
              <span className="w-20 text-center py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">FI202</span>
              <div>
                <p className="text-base font-semibold">Física II</p>
                <p className="text-[13px] text-text-muted">Estudios Generales · 11 sesiones dictadas</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[13px] text-text-muted">Modalidad: <span className="font-semibold text-text">presencial</span></span>
              <button type="button" className="text-[15px] font-semibold text-primary hover:underline">Editar</button>
              <button type="button" className="text-[15px] font-semibold text-danger hover:underline">Quitar</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
