import { Link } from "react-router-dom";
import HeaderTutor from "../../components/compartidos/HeaderTutor";
import Footer from "../../components/compartidos/Footer";

// 2.1 Estado · perfil inactivo (mismo bloque de la cabecera)
export default function PerfilTutorInactivo() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderTutor />

      <main className="flex-1 px-14 py-10">
        <p className="text-[13px] text-text-muted mb-2">
          <Link to="/directorio" className="hover:text-primary">Inicio</Link> › <span className="text-text">Mi perfil de tutor</span>
        </p>

        <div className="mb-8">
          <h1 className="text-[28px] font-bold leading-8 mb-1">Mi perfil de tutor</h1>
          <p className="text-[15px] text-text-muted">
            Al estar activo te comprometes a responder solicitudes en 48 horas y asistir a las sesiones aceptadas.
          </p>
        </div>

        {/* Estado: desactivado */}
        <section className="mb-6 px-6 py-5 rounded-lg bg-surface border border-border border-l-4 border-l-text-muted flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold">Perfil de tutor desactivado</h2>
            <p className="text-[15px] text-text-muted">No apareces en el directorio y no puedes recibir solicitudes.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-border text-text-muted text-xs font-semibold">○ Inactivo</span>
            <Link to="/tutor/perfil" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Activarme
            </Link>
          </div>
        </section>

        {/* Indicadores atenuados mientras el perfil está inactivo */}
        <div className="grid grid-cols-4 gap-6 opacity-50">
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">CURSOS DECLARADOS</p>
            <p className="text-[28px] font-bold leading-8 mb-1">3</p>
            <p className="text-[13px] text-text-muted">MA101 · ES210 · FI202</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">HORAS SEMANALES</p>
            <p className="text-[28px] font-bold leading-8 mb-1">18 h</p>
            <p className="text-[13px] text-text-muted">en 18 bloques de 60 minutos</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">PROMEDIO RECIBIDO</p>
            <p className="text-[28px] font-bold leading-8 mb-1">4.8</p>
            <p className="text-[13px] text-text-muted">sobre 31 calificaciones</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">SOLICITUDES PENDIENTES</p>
            <p className="text-[28px] font-bold leading-8 mb-1">0</p>
            <p className="text-[13px] text-text-muted">no recibes solicitudes</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
