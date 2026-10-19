import { Link } from "react-router-dom";
import HeaderTutor from "../../components/compartidos/HeaderTutor";
import Footer from "../../components/compartidos/Footer";

// 2.1 Estado · activo con ficha incompleta (faltan 2 pasos)
export default function PerfilTutorIncompleto() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderTutor />

      <main className="flex-1 px-14 py-10">
        <p className="text-[13px] text-text-muted mb-2">
          <Link to="/directorio" className="hover:text-primary">Inicio</Link> › <span className="text-text">Mi perfil de tutor</span>
        </p>

        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-[28px] font-bold leading-8 mb-1">Mi perfil de tutor</h1>
            <p className="text-[15px] text-text-muted">
              Al estar activo te comprometes a responder solicitudes en 48 horas y asistir a las sesiones aceptadas.
            </p>
          </div>
          <Link to="/tutor/perfil/inactivo" className="px-4 py-2 rounded-lg font-semibold border border-border text-danger hover:bg-danger/5">
            Desactivarme
          </Link>
        </div>

        {/* Estado: activo pero no publicado */}
        <section className="mb-6 rounded-lg bg-warning/5 border border-warning/30 border-l-4 border-l-warning">
          <div className="px-6 py-4 flex items-center justify-between border-b border-warning/20">
            <p className="text-[15px]">
              <span className="font-semibold">Activo · no publicado.</span> Faltan 2 pasos para aparecer en el directorio.
            </p>
            <span className="px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-semibold">● Ficha incompleta</span>
          </div>

          <div className="px-6 py-3 flex items-center justify-between border-b border-warning/20">
            <span className="flex items-center gap-3 text-[15px]">
              <span className="w-6 h-6 rounded-full bg-warning text-white flex items-center justify-center text-sm font-bold">!</span>
              Declarar al menos un curso
            </span>
            <Link to="/tutor/cursos/vacio" className="text-[15px] font-semibold text-primary hover:underline">Completar</Link>
          </div>

          <div className="px-6 py-3 flex items-center justify-between">
            <span className="flex items-center gap-3 text-[15px]">
              <span className="w-6 h-6 rounded-full bg-warning text-white flex items-center justify-center text-sm font-bold">!</span>
              Marcar disponibilidad semanal
            </span>
            <Link to="/tutor/disponibilidad" className="text-[15px] font-semibold text-primary hover:underline">Completar</Link>
          </div>
        </section>

        {/* Indicadores en cero */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-surface border border-border rounded-lg shadow-card p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">CURSOS DECLARADOS</p>
            <p className="text-[28px] font-bold leading-8 mb-1">0</p>
            <p className="text-[13px] text-text-muted">aún no declaras cursos</p>
          </div>
          <div className="bg-surface border border-border rounded-lg shadow-card p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">HORAS SEMANALES</p>
            <p className="text-[28px] font-bold leading-8 mb-1">0 h</p>
            <p className="text-[13px] text-text-muted">sin bloques marcados</p>
          </div>
          <div className="bg-surface border border-border rounded-lg shadow-card p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">PROMEDIO RECIBIDO</p>
            <p className="text-[28px] font-bold leading-8 mb-1">—</p>
            <p className="text-[13px] text-text-muted">sin calificaciones todavía</p>
          </div>
          <div className="bg-surface border border-border rounded-lg shadow-card p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">SOLICITUDES PENDIENTES</p>
            <p className="text-[28px] font-bold leading-8 mb-1">0</p>
            <p className="text-[13px] text-text-muted">aparecerán al publicarte</p>
          </div>
        </div>

        {/* Requisitos */}
        <section className="bg-surface border border-border rounded-lg shadow-card p-6">
          <h2 className="text-base font-semibold mb-4">Requisitos para mantener la ficha publicada</h2>
          <div className="flex gap-10 text-[15px]">
            <span className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-success/10 text-success flex items-center justify-center text-sm font-bold">✓</span>Biografía completada</span>
            <span className="flex items-center gap-2 text-text-muted"><span className="w-6 h-6 rounded-full bg-warning/10 text-warning flex items-center justify-center text-sm font-bold">!</span>Al menos un curso declarado</span>
            <span className="flex items-center gap-2 text-text-muted"><span className="w-6 h-6 rounded-full bg-warning/10 text-warning flex items-center justify-center text-sm font-bold">!</span>Disponibilidad semanal marcada</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
