import { Link } from 'react-router-dom';
import { Cabecera, Pie } from '../../components/historia7/Compartidos';
import '../../components/historia7/estilos-h7.css';

export default function Tablero() {
  return (
    <div className="h7 screen screen-compact">
      <Cabecera>
        <Link to="/coordinador/tutores" className="py-2 text-white/80">Tutores</Link>
        <Link to="/coordinador/usuarios" className="py-2 text-white/80">Usuarios</Link>
        <a href="#" className="py-2 text-white/80">Sesiones</a>
        <Link to="/coordinador/tablero" className="border-b-2 border-accent py-2 font-semibold">Tablero</Link>
      </Cabecera>
      <main className="px-14 pt-8 pb-10">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] leading-8 font-bold">Tablero del programa</h1>
            <p className="mt-1 text-[15px] text-muted">Datos del 01/08/2026 al 30/09/2026</p>
          </div>
          <div className="flex gap-3"><button className="field">01/08/2026 — 30/09/2026 ▾</button><button className="rounded-lg border border-primary bg-white px-6 py-3 text-[15px] font-semibold text-primary">Exportar CSV</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <article className="rounded-lg border border-line bg-soft p-6">
            <h2 className="text-xs font-semibold tracking-[1.4px] text-muted">SESIONES DEL PERIODO</h2>
            <p className="mt-1 text-[36px] leading-10 font-bold text-primary">248</p>
            <p className="mt-1 text-sm text-muted">211 realizadas · 37 canceladas</p>
          </article>
          <article className="rounded-lg border border-line bg-white p-6">
            <h2 className="text-xs font-semibold tracking-[1.4px] text-muted">TASA DE INASISTENCIA</h2>
            <p className="mt-1 text-[36px] leading-10 font-bold text-[#B7791F]">9 %</p>
            <p className="mt-1 text-sm text-muted">22 sesiones sin asistencia</p>
          </article>
          <article className="rounded-lg border border-line bg-white p-6">
            <h2 className="text-xs font-semibold tracking-[1.4px] text-muted">HORAS ACUMULADAS</h2>
            <p className="mt-1 text-[36px] leading-10 font-bold text-ink">263 h</p>
            <p className="mt-1 text-sm text-muted">24 tutores activos</p>
          </article>
          <article className="rounded-lg border border-line bg-white p-6">
            <h2 className="text-xs font-semibold tracking-[1.4px] text-muted">PROMEDIO DEL PROGRAMA</h2>
            <p className="mt-1 text-[36px] leading-10 font-bold text-[#1E7F4D]">4.6</p>
            <p className="mt-1 text-sm text-muted">sobre 187 calificaciones</p>
          </article>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-6">
          <section className="rounded-lg border border-line bg-white p-7">
            <h2 className="mb-5 text-xl font-bold text-primary">Sesiones por curso</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>MA101 Cálculo I</span>
                <div className="bar"><span className="bg-primary" style={{ width: "91.9%" }}></span>
                </div><span className="text-right font-semibold">68</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>FI202 Física II</span>
                <div className="bar"><span className="bg-primary" style={{ width: "70.3%" }}></span>
                </div><span className="text-right font-semibold">52</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>ES210 Estadística</span>
                <div className="bar"><span className="bg-primary" style={{ width: "55.4%" }}></span>
                </div><span className="text-right font-semibold">41</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>SI401 Programación Web</span>
                <div className="bar"><span className="bg-primary" style={{ width: "44.6%" }}></span>
                </div><span className="text-right font-semibold">33</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>CO105 Contabilidad</span>
                <div className="bar"><span className="bg-primary" style={{ width: "32.4%" }}></span>
                </div><span className="text-right font-semibold">24</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>EC201 Microeconomía</span>
                <div className="bar"><span className="bg-primary" style={{ width: "24.3%" }}></span>
                </div><span className="text-right font-semibold">18</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>QU102 Química General</span>
                <div className="bar"><span className="bg-primary" style={{ width: "16.2%" }}></span>
                </div><span className="text-right font-semibold">12</span>
              </div>
            </div>
          </section>
          <section className="rounded-lg border border-line bg-white p-7">
            <h2 className="mb-5 text-xl font-bold text-primary">Sesiones por carrera</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>Ingeniería Industrial</span>
                <div className="bar"><span className="bg-accent" style={{ width: "86.5%" }}></span>
                </div><span className="text-right font-semibold">64</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>Ingeniería de Sistemas</span>
                <div className="bar"><span className="bg-accent" style={{ width: "64.9%" }}></span>
                </div><span className="text-right font-semibold">48</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>Administración</span>
                <div className="bar"><span className="bg-accent" style={{ width: "51.4%" }}></span>
                </div><span className="text-right font-semibold">38</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>Economía</span>
                <div className="bar"><span className="bg-accent" style={{ width: "40.5%" }}></span>
                </div><span className="text-right font-semibold">30</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>Contabilidad</span>
                <div className="bar"><span className="bg-accent" style={{ width: "32.4%" }}></span>
                </div><span className="text-right font-semibold">24</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>Psicología</span>
                <div className="bar"><span className="bg-accent" style={{ width: "32.4%" }}></span>
                </div><span className="text-right font-semibold">24</span>
              </div>
              <div className="grid grid-cols-[235px_1fr_40px] items-center gap-4 text-sm"><span>Ingeniería Civil</span>
                <div className="bar"><span className="bg-accent" style={{ width: "27.0%" }}></span>
                </div><span className="text-right font-semibold">20</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Pie />
    </div>
  );
}
