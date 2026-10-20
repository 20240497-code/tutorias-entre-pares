import { Link } from 'react-router-dom';
import '../../components/historia7/estilos-h7.css';

export default function Suspender() {
  return (
    <main className="h7 flex min-h-screen items-center justify-center bg-soft p-12">
      <section role="dialog" aria-labelledby="titulo-modal" aria-modal="true" className="w-[1040px] rounded-2xl border border-line bg-white p-9 shadow-[0_1px_8px_rgba(28,27,46,0.12)]">
        <h1 id="titulo-modal" className="mb-5 text-[28px] leading-8 font-bold">Suspender a Mateo Chávez Ríos</h1>
        <p className="mb-5 rounded-lg border border-[#B4322B] bg-[#FAEAE8] px-5 py-4 text-[17px] font-semibold text-[#B4322B]">Dejará de aparecer en el directorio y sus 4 sesiones futuras se cancelarán con aviso a los estudiantes.</p>
        <label htmlFor="motivo" className="mb-2 block text-sm font-semibold tracking-[1.5px] text-muted">MOTIVO DE LA SUSPENSIÓN (OBLIGATORIO)</label>
        <div id="motivo" className="mb-5 rounded-lg border border-line bg-page px-5 py-4 text-lg">Tasa de inasistencia del 22 % en las últimas 10 sesiones ▾</div>
        <label htmlFor="detalle" className="mb-2 block text-sm font-semibold tracking-[1.5px] text-muted">DETALLE PARA EL REGISTRO</label>
        <textarea id="detalle" className="h-32 w-full resize-none rounded-lg border border-line bg-page px-5 py-4 text-lg" defaultValue="Se le contactó el 08/09/2026 y no respondió al aviso del coordinador." />
        <div className="mt-6 flex justify-end gap-3"><Link to="/coordinador/tutores" className="rounded-lg border border-primary px-6 py-4 text-lg font-semibold text-primary">Volver</Link><Link to="/coordinador/tutores" className="rounded-lg bg-[#B4322B] px-6 py-4 text-lg font-semibold text-white">Suspender tutor</Link>
        </div>
      </section>
    </main>
  );
}
