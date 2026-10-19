import { Link } from "react-router-dom";
import HeaderTutor from "../../components/compartidos/HeaderTutor";
import Footer from "../../components/compartidos/Footer";

// 2.1 Activarme como tutor · perfil publicado · ROL: TUTOR
export default function PerfilTutor() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderTutor />

      <main className="flex-1 px-14 py-10">
        <p className="text-[13px] text-text-muted mb-2">
          <Link to="/directorio" className="hover:text-primary">Inicio</Link> › <span className="text-text">Mi perfil de tutor</span>
        </p>

        {/* Título + acciones */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-[28px] font-bold leading-8 mb-1">Mi perfil de tutor</h1>
            <p className="text-[15px] text-text-muted">
              Al estar activo te comprometes a responder solicitudes en 48 horas y asistir a las sesiones aceptadas.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/tutor/perfil/inactivo" className="px-4 py-2 rounded-lg font-semibold border border-border text-danger hover:bg-danger/5">
              Desactivarme
            </Link>
            <Link to="/tutores/camila-quispe" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Ver mi ficha pública
            </Link>
          </div>
        </div>

        {/* Estado de publicación */}
        <section className="mb-6 px-6 py-5 rounded-lg bg-success/5 border border-success/30 border-l-4 border-l-success flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold">Publicado en el directorio</h2>
            <p className="text-[15px] text-text-muted">Desde el 03/08/2026 · apareces en las búsquedas de MA101, ES210 y FI202.</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold">● Perfil activo</span>
        </section>

        {/* Indicadores */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-surface border border-border rounded-lg shadow-card p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">CURSOS DECLARADOS</p>
            <p className="text-[28px] font-bold leading-8 mb-1">3</p>
            <p className="text-[13px] text-text-muted">MA101 · ES210 · FI202</p>
          </div>
          <div className="bg-surface border border-border rounded-lg shadow-card p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">HORAS SEMANALES</p>
            <p className="text-[28px] font-bold leading-8 mb-1">18 h</p>
            <p className="text-[13px] text-text-muted">en 18 bloques de 60 minutos</p>
          </div>
          <div className="bg-surface border border-border rounded-lg shadow-card p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">PROMEDIO RECIBIDO</p>
            <p className="text-[28px] font-bold leading-8 mb-1"><span className="text-accent">★</span> 4.8</p>
            <p className="text-[13px] text-text-muted">sobre 31 calificaciones</p>
          </div>
          <div className="bg-surface border border-border rounded-lg shadow-card p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">SOLICITUDES PENDIENTES</p>
            <p className="text-[28px] font-bold leading-8 mb-1">3</p>
            <p className="text-[13px] text-text-muted">la más antigua hace 6 horas</p>
          </div>
        </div>

        {/* Requisitos */}
        <section className="bg-surface border border-border rounded-lg shadow-card p-6">
          <h2 className="text-base font-semibold mb-4">Requisitos para mantener la ficha publicada</h2>
          <div className="flex gap-10 text-[15px]">
            <span className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-success/10 text-success flex items-center justify-center text-sm font-bold">✓</span>Biografía completada</span>
            <span className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-success/10 text-success flex items-center justify-center text-sm font-bold">✓</span>Al menos un curso declarado</span>
            <span className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-success/10 text-success flex items-center justify-center text-sm font-bold">✓</span>Disponibilidad semanal marcada</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
