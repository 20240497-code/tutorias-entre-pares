import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 2.5 Ficha pública del tutor · ROL: VISITANTE (sin sesión iniciada)
export default function FichaPublicaTutor() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1 px-14 py-10">
        <p className="text-[13px] text-text-muted mb-6">
          <Link to="/" className="hover:text-primary">Inicio</Link> ›{" "}
          <Link to="/directorio" className="hover:text-primary">Directorio</Link> ›{" "}
          <span className="text-text">Camila Quispe Andrade</span>
        </p>

        {/* ===== Perfil ===== */}
        <section className="bg-surface border border-border rounded-lg shadow-card p-8 mb-6 flex items-start gap-8">
          <div className="w-28 h-28 shrink-0 rounded-full bg-primary-soft text-primary flex items-center justify-center text-4xl font-bold">
            CQ
          </div>

          <div className="flex-1">
            <h1 className="text-[28px] font-bold leading-8 mb-1">Camila Quispe Andrade</h1>
            <p className="text-[15px] text-text-muted mb-3">Ingeniería Industrial · 8.º ciclo</p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">MA101 Cálculo I</span>
              <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">ES210 Estadística Aplicada</span>
              <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">FI202 Física II</span>
            </div>

            <p className="text-[15px] max-w-3xl">
              Me gusta explicar con ejercicios resueltos paso a paso. Llevé Cálculo I y Física II con nota sobresaliente
              y desde hace dos ciclos apoyo a compañeros que se preparan para prácticas y exámenes parciales.
            </p>
          </div>

          <div className="w-60 shrink-0 text-right">
            <p className="text-[28px] font-bold leading-8"><span className="text-accent">★</span> 4.8</p>
            <p className="text-[13px] text-text-muted mb-1">
              31 reseñas · <Link to="/tutores/camila-quispe/resenas" className="text-primary font-semibold hover:underline">Ver reseñas</Link>
            </p>
            <p className="text-[13px] text-text-muted mb-5">Modalidad: <span className="font-semibold text-text">remota y presencial</span></p>
            {/* Visitante: solicitar lleva a iniciar sesión */}
            <Link to="/login" className="block w-full py-2 text-center rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Solicitar sesión
            </Link>
            <p className="mt-2 text-[13px] text-text-muted">Debes iniciar sesión para solicitar.</p>
          </div>
        </section>

        {/* ===== Disponibilidad ===== */}
        <section className="bg-surface border border-border rounded-lg shadow-card p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Disponibilidad de esta semana</h2>
            <div className="flex items-center gap-4 text-[15px]">
              <button type="button" className="text-primary font-semibold hover:underline">‹ Semana anterior</button>
              <span className="font-semibold">14/09/2026 — 19/09/2026</span>
              <button type="button" className="text-primary font-semibold hover:underline">Semana siguiente ›</button>
            </div>
          </div>

          {/* 1 columna de horas + 6 días */}
          <div className="grid grid-cols-7 gap-2">
            <div></div>
            <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">LUN 14</div>
            <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">MAR 15</div>
            <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">MIÉ 16</div>
            <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">JUE 17</div>
            <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">VIE 18</div>
            <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">SÁB 19</div>

            {/* 08:00 */}
            <div className="h-12 flex items-center text-[13px] text-text-muted">08:00</div>
            <div className="h-12 rounded-lg bg-success/10 text-success text-[13px] font-semibold flex items-center justify-center">Libre</div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg bg-success/10 text-success text-[13px] font-semibold flex items-center justify-center">Libre</div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>

            {/* 09:00 */}
            <div className="h-12 flex items-center text-[13px] text-text-muted">09:00</div>
            <div className="h-12 rounded-lg bg-success/10 text-success text-[13px] font-semibold flex items-center justify-center">Libre</div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg bg-primary-soft text-primary text-[13px] font-semibold flex items-center justify-center">Ocupado</div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>

            {/* 16:00 */}
            <div className="h-12 flex items-center text-[13px] text-text-muted">16:00</div>
            <div className="h-12 rounded-lg bg-primary-soft text-primary text-[13px] font-semibold flex items-center justify-center">Ocupado</div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg bg-success/10 text-success text-[13px] font-semibold flex items-center justify-center">Libre</div>
            <div className="h-12 rounded-lg bg-success/10 text-success text-[13px] font-semibold flex items-center justify-center">Libre</div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>

            {/* 17:00 */}
            <div className="h-12 flex items-center text-[13px] text-text-muted">17:00</div>
            <div className="h-12 rounded-lg bg-success/10 text-success text-[13px] font-semibold flex items-center justify-center">Libre</div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg bg-success/10 text-success text-[13px] font-semibold flex items-center justify-center">Libre</div>
            <div className="h-12 rounded-lg bg-primary-soft text-primary text-[13px] font-semibold flex items-center justify-center">Ocupado</div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
            <div className="h-12 rounded-lg border border-dashed border-border"></div>
          </div>

          <div className="flex items-center gap-6 mt-6 text-[13px] text-text-muted">
            <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-success/10 border border-success"></span>Libre</span>
            <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-primary-soft border border-primary"></span>Ocupado</span>
            <span className="flex items-center gap-2"><span className="w-4 h-4 rounded border border-dashed border-border"></span>No disponible</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
