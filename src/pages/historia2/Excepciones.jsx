import HeaderTutor from "../../components/compartidos/HeaderTutor";
import Footer from "../../components/compartidos/Footer";
import PestanasDisponibilidad from "../../components/historia2/PestanasDisponibilidad";

// 2.4 Excepciones por fecha · ROL: TUTOR
export default function Excepciones() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderTutor />

      <main className="flex-1 px-14 py-10">
        <PestanasDisponibilidad />

        <h1 className="text-[28px] font-bold leading-8 mb-1">Excepciones por fecha</h1>
        <p className="text-[15px] text-text-muted mb-8">
          Fechas puntuales en las que no atenderás, aunque tengas disponibilidad recurrente.
        </p>

        <div className="grid grid-cols-3 gap-6 items-start">
          {/* ===== Lista de excepciones (2 de 3 columnas) ===== */}
          <section className="col-span-2 flex flex-col gap-3">
            <div className="bg-surface border border-border border-l-4 border-l-danger rounded-lg shadow-card px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-base font-semibold">Viernes 18/09/2026 · todo el día</p>
                <p className="text-[15px] text-text-muted">Examen parcial de Física II</p>
              </div>
              <button type="button" className="text-[15px] font-semibold text-danger hover:underline">Quitar</button>
            </div>

            <div className="bg-surface border border-border border-l-4 border-l-danger rounded-lg shadow-card px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-base font-semibold">Viernes 25/09/2026 · 16:00 a 20:00</p>
                <p className="text-[15px] text-text-muted">Viaje de estudios</p>
              </div>
              <button type="button" className="text-[15px] font-semibold text-danger hover:underline">Quitar</button>
            </div>

            <div className="bg-surface border border-border border-l-4 border-l-danger rounded-lg shadow-card px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-base font-semibold">Jueves 08/10/2026 · todo el día</p>
                <p className="text-[15px] text-text-muted italic">Sin motivo indicado</p>
              </div>
              <button type="button" className="text-[15px] font-semibold text-danger hover:underline">Quitar</button>
            </div>

            <p className="mt-2 px-4 py-3 rounded-lg bg-warning/10 text-warning text-[13px] font-semibold">
              Las sesiones ya aceptadas en esas fechas se cancelarán con aviso automático al estudiante.
            </p>
          </section>

          {/* ===== Calendario + formulario ===== */}
          <aside className="bg-surface border border-border rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <button type="button" className="w-8 h-8 rounded-lg hover:bg-primary-soft text-primary font-bold">‹</button>
              <p className="font-semibold">Setiembre 2026</p>
              <button type="button" className="w-8 h-8 rounded-lg hover:bg-primary-soft text-primary font-bold">›</button>
            </div>

            {/* 7 columnas: L M M J V S D */}
            <div className="grid grid-cols-7 gap-1 text-center text-[13px] mb-6">
              <span className="py-1 text-xs font-semibold text-text-muted">L</span>
              <span className="py-1 text-xs font-semibold text-text-muted">M</span>
              <span className="py-1 text-xs font-semibold text-text-muted">M</span>
              <span className="py-1 text-xs font-semibold text-text-muted">J</span>
              <span className="py-1 text-xs font-semibold text-text-muted">V</span>
              <span className="py-1 text-xs font-semibold text-text-muted">S</span>
              <span className="py-1 text-xs font-semibold text-text-muted">D</span>

              <span className="py-2 rounded-md text-border">31</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">1</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">2</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">3</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">4</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">5</span>
              <span className="py-2 rounded-md text-text-muted">6</span>

              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">7</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">8</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">9</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">10</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">11</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">12</span>
              <span className="py-2 rounded-md text-text-muted">13</span>

              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">14</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">15</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">16</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">17</span>
              <span className="py-2 rounded-md bg-danger/10 text-danger font-semibold">18</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">19</span>
              <span className="py-2 rounded-md text-text-muted">20</span>

              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">21</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">22</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">23</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">24</span>
              <span className="py-2 rounded-md bg-danger/10 text-danger font-semibold">25</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">26</span>
              <span className="py-2 rounded-md text-text-muted">27</span>

              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">28</span>
              <span className="py-2 rounded-md bg-primary text-white font-semibold">29</span>
              <span className="py-2 rounded-md hover:bg-primary-soft cursor-pointer">30</span>
              <span className="py-2 rounded-md text-border">1</span>
              <span className="py-2 rounded-md text-border">2</span>
              <span className="py-2 rounded-md text-border">3</span>
              <span className="py-2 rounded-md text-border">4</span>
            </div>

            <div className="flex items-center gap-4 mb-6 text-[13px] text-text-muted">
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-danger/30"></span>Excepción</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-primary"></span>Seleccionada</span>
            </div>

            <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">RANGO HORARIO</label>
            <select className="w-full mb-4 px-3 py-2 rounded-lg border border-border text-[15px] bg-surface focus:outline-none focus:border-primary">
              <option>Todo el día</option>
              <option>08:00 a 12:00</option>
              <option>16:00 a 20:00</option>
            </select>

            <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">MOTIVO (OPCIONAL)</label>
            <input type="text" placeholder="Ej. examen parcial"
              className="w-full mb-6 px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />

            <button type="button" className="w-full py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Agregar excepción
            </button>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
