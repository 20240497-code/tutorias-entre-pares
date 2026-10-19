import HeaderTutor from "../../components/compartidos/HeaderTutor";
import Footer from "../../components/compartidos/Footer";
import PestanasDisponibilidad from "../../components/historia2/PestanasDisponibilidad";

// 2.3 Disponibilidad semanal · ROL: TUTOR
// Celdas: Disponible (índigo) · Seleccionando (ámbar, arrastre) · No disponible (vacía)
export default function Disponibilidad() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderTutor />

      <main className="flex-1 px-14 py-10">
        <PestanasDisponibilidad />

        {/* Título + acciones */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-[28px] font-bold leading-8 mb-1">Disponibilidad semanal</h1>
            <p className="text-[15px] text-text-muted">
              Marca los bloques recurrentes en los que puedes atender. Arrastra para seleccionar varios.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-warning/10 text-warning text-[13px] font-semibold">● Tienes cambios sin guardar</span>
            <button type="button" className="px-4 py-2 rounded-lg font-semibold border border-border text-text hover:bg-surface">
              Limpiar semana
            </button>
            <button type="button" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Guardar disponibilidad
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 items-start">
          {/* ===== Grilla (3 de 4 columnas) ===== */}
          <section className="col-span-3 bg-surface border border-border rounded-lg shadow-card p-6">
            <div className="grid grid-cols-7 gap-2">
              {/* Cabecera */}
              <div></div>
              <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">LUNES</div>
              <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">MARTES</div>
              <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">MIÉRCOLES</div>
              <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">JUEVES</div>
              <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">VIERNES</div>
              <div className="text-center text-xs font-semibold tracking-wide text-text-muted py-2">SÁBADO</div>

              {/* 08:00 */}
              <div className="h-11 flex items-center text-[13px] text-text-muted">08:00</div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>

              {/* 09:00 */}
              <div className="h-11 flex items-center text-[13px] text-text-muted">09:00</div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>

              {/* 10:00 */}
              <div className="h-11 flex items-center text-[13px] text-text-muted">10:00</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>

              {/* 11:00 */}
              <div className="h-11 flex items-center text-[13px] text-text-muted">11:00</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>

              {/* 16:00 */}
              <div className="h-11 flex items-center text-[13px] text-text-muted">16:00</div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md bg-accent/20 border-2 border-dashed border-accent text-warning text-[13px] font-semibold flex items-center justify-center">Seleccionando</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>

              {/* 17:00 */}
              <div className="h-11 flex items-center text-[13px] text-text-muted">17:00</div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md bg-accent/20 border-2 border-dashed border-accent text-warning text-[13px] font-semibold flex items-center justify-center">Seleccionando</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>

              {/* 18:00 */}
              <div className="h-11 flex items-center text-[13px] text-text-muted">18:00</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>

              {/* 19:00 */}
              <div className="h-11 flex items-center text-[13px] text-text-muted">19:00</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md bg-primary text-white text-[13px] font-semibold flex items-center justify-center">Disponible</div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
              <div className="h-11 rounded-md border border-border hover:bg-primary-soft cursor-pointer"></div>
            </div>

            {/* Leyenda */}
            <div className="flex items-center gap-6 mt-6 text-[13px] text-text-muted">
              <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-primary"></span>Disponible</span>
              <span className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-accent/20 border-2 border-dashed border-accent"></span>Seleccionando (arrastre)</span>
              <span className="flex items-center gap-2"><span className="w-4 h-4 rounded border border-border"></span>No disponible</span>
            </div>
          </section>

          {/* ===== Resumen lateral ===== */}
          <aside className="bg-surface border border-border rounded-lg shadow-card p-6">
            <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">HORAS DECLARADAS</p>
            <p className="text-[28px] font-bold leading-8 mb-1">18 h</p>
            <p className="text-[13px] text-text-muted mb-6">por semana, en 18 bloques de 60 minutos</p>

            <p className="text-xs font-semibold tracking-wide text-text-muted mb-3">HORAS POR DÍA</p>
            <ul className="flex flex-col gap-2 text-[15px] mb-6">
              <li className="flex justify-between"><span>Lunes</span><span className="font-semibold">4 h</span></li>
              <li className="flex justify-between"><span>Martes</span><span className="font-semibold">4 h</span></li>
              <li className="flex justify-between"><span>Miércoles</span><span className="font-semibold">4 h</span></li>
              <li className="flex justify-between"><span>Jueves</span><span className="font-semibold">3 h</span></li>
              <li className="flex justify-between"><span>Viernes</span><span className="font-semibold">3 h</span></li>
              <li className="flex justify-between text-text-muted"><span>Sábado</span><span className="font-semibold">0 h</span></li>
            </ul>

            <p className="px-4 py-3 rounded-lg bg-info/10 text-info text-[13px]">
              Los bloques ocupados por sesiones ya aceptadas no pueden desmarcarse hasta cancelarlas.
            </p>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
