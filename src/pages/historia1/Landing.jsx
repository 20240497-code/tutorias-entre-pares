import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.1 Landing pública · ROL: VISITANTE
export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1">
        {/* ===== Portada ===== */}
        <section className="px-14 py-20 bg-primary-soft">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight text-primary-dark mb-4">
              Refuerza tus cursos con estudiantes que ya los dominan
            </h1>
            <p className="text-lg text-text-muted mb-8">
              Busca por curso, revisa la ficha del tutor y reserva un bloque de su disponibilidad semanal.
            </p>

            <form className="flex gap-3 max-w-2xl">
              <input type="text" placeholder="Busca un curso: «Cálculo I» o «MA101»"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-surface text-[15px] focus:outline-none focus:border-primary" />
              <Link to="/directorio" className="px-8 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
                Buscar
              </Link>
            </form>
          </div>
        </section>

        {/* ===== Tutores destacados ===== */}
        <section className="px-14 py-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-bold">Tutores destacados</h2>
            <Link to="/directorio" className="text-[15px] font-semibold text-primary hover:underline">
              Ver todo el directorio →
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {/* Tutor 1 */}
            <div className="bg-surface border border-border rounded-lg shadow-card p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary-soft text-primary flex items-center justify-center text-xl font-bold">AF</div>
                <div>
                  <h3 className="text-base font-semibold">Ariana Flores Bustamante</h3>
                  <p className="text-[13px] text-text-muted">Ing. de Sistemas · 10.º ciclo</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">MA101</span>
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">SI401</span>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                <span className="text-accent">★</span> <span className="font-semibold text-text">4.9</span> · 40 sesiones · remota
              </p>
              <Link to="/tutores/camila-quispe" className="mt-auto text-center px-4 py-2 rounded-lg font-semibold border border-primary text-primary hover:bg-primary-soft">
                Ver ficha
              </Link>
            </div>

            {/* Tutor 2 */}
            <div className="bg-surface border border-border rounded-lg shadow-card p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary-soft text-primary flex items-center justify-center text-xl font-bold">CQ</div>
                <div>
                  <h3 className="text-base font-semibold">Camila Quispe Andrade</h3>
                  <p className="text-[13px] text-text-muted">Ing. Industrial · 8.º ciclo</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">MA101</span>
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">ES210</span>
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">FI202</span>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                <span className="text-accent">★</span> <span className="font-semibold text-text">4.8</span> · 31 sesiones · ambas
              </p>
              <Link to="/tutores/camila-quispe" className="mt-auto text-center px-4 py-2 rounded-lg font-semibold border border-primary text-primary hover:bg-primary-soft">
                Ver ficha
              </Link>
            </div>

            {/* Tutor 3 */}
            <div className="bg-surface border border-border rounded-lg shadow-card p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary-soft text-primary flex items-center justify-center text-xl font-bold">SR</div>
                <div>
                  <h3 className="text-base font-semibold">Sebastián Rojas Mendoza</h3>
                  <p className="text-[13px] text-text-muted">Ing. Civil · 9.º ciclo</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">MA101</span>
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">FI202</span>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                <span className="text-accent">★</span> <span className="font-semibold text-text">4.7</span> · 28 sesiones · remota
              </p>
              <Link to="/tutores/camila-quispe" className="mt-auto text-center px-4 py-2 rounded-lg font-semibold border border-primary text-primary hover:bg-primary-soft">
                Ver ficha
              </Link>
            </div>

            {/* Tutor 4 */}
            <div className="bg-surface border border-border rounded-lg shadow-card p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary-soft text-primary flex items-center justify-center text-xl font-bold">VC</div>
                <div>
                  <h3 className="text-base font-semibold">Valeria Ccahuana Rivas</h3>
                  <p className="text-[13px] text-text-muted">Contabilidad · 7.º ciclo</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">CO105</span>
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold">MA101</span>
              </div>
              <p className="text-[13px] text-text-muted mb-6">
                <span className="text-accent">★</span> <span className="font-semibold text-text">4.6</span> · 19 sesiones · remota
              </p>
              <Link to="/tutores/camila-quispe" className="mt-auto text-center px-4 py-2 rounded-lg font-semibold border border-primary text-primary hover:bg-primary-soft">
                Ver ficha
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Cómo funciona (el header enlaza a #como-funciona) ===== */}
        <section id="como-funciona" className="px-14 py-14 bg-surface border-y border-border">
          <h2 className="text-xl font-bold mb-6">Cómo funciona</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border">
              <span className="w-10 h-10 mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</span>
              <h3 className="text-base font-semibold mb-1">Busca tu curso</h3>
              <p className="text-[15px] text-text-muted">Filtra por curso, carrera, modalidad y día de atención.</p>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <span className="w-10 h-10 mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</span>
              <h3 className="text-base font-semibold mb-1">Elige un bloque</h3>
              <p className="text-[15px] text-text-muted">Revisa la disponibilidad semanal del tutor y solicita la sesión.</p>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <span className="w-10 h-10 mb-4 rounded-full bg-accent text-text flex items-center justify-center font-bold">3</span>
              <h3 className="text-base font-semibold mb-1">Estudia y califica</h3>
              <p className="text-[15px] text-text-muted">Al cerrar la sesión recibes el material y calificas al tutor.</p>
            </div>
          </div>
        </section>

        {/* ===== Preguntas frecuentes (acordeón con <details>, sin JavaScript) ===== */}
        <section id="preguntas-frecuentes" className="px-14 py-14">
          <h2 className="text-xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="max-w-3xl flex flex-col gap-3">
            <details className="bg-surface border border-border rounded-lg px-6 py-4">
              <summary className="font-semibold cursor-pointer">¿Las tutorías tienen costo?</summary>
              <p className="mt-2 text-[15px] text-text-muted">No. El programa es gratuito para todos los estudiantes de la Universidad de Lima.</p>
            </details>
            <details className="bg-surface border border-border rounded-lg px-6 py-4">
              <summary className="font-semibold cursor-pointer">¿Quién puede ser tutor?</summary>
              <p className="mt-2 text-[15px] text-text-muted">Cualquier estudiante con cuenta activa puede activarse como tutor y declarar los cursos que domina.</p>
            </details>
            <details className="bg-surface border border-border rounded-lg px-6 py-4">
              <summary className="font-semibold cursor-pointer">¿Puedo cancelar una sesión?</summary>
              <p className="mt-2 text-[15px] text-text-muted">Sí, hasta 12 horas antes del bloque. El tutor recibe un aviso y el bloque queda libre.</p>
            </details>
            <details className="bg-surface border border-border rounded-lg px-6 py-4">
              <summary className="font-semibold cursor-pointer">¿Necesito mi correo institucional?</summary>
              <p className="mt-2 text-[15px] text-text-muted">Sí. Solo se aceptan cuentas con correo @aloe.ulima.edu.pe.</p>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
