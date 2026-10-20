import { escalaInterfaz as escala } from '../../components/compartidos/escalaInterfaz'
import { Link } from 'react-router-dom'
import { Avatar } from '../../components/historia6/Comunes'
import { VistaHU6 } from '../../components/historia6/Valoraciones'

const comentario = 'Explicó con calma y me dejó ejercicios para practicar. Llegó cinco minutos tarde, nada grave.'

// Vista previa con selectores CSS: no guarda ni procesa el puntaje.
function EstrellasHover({ valor, nombre, grande = false }) {
  return <span role="group" aria-label={nombre} className={`inline-flex shrink-0 flex-row-reverse items-center [&:has(button:hover)>button]:text-border [&:has(button:focus-visible)>button]:text-border ${grande ? 'gap-2' : 'gap-1'}`}>
    {[5, 4, 3, 2, 1].map((puntaje) => <button key={puntaje} type="button" aria-label={`${nombre}: ${puntaje} de 5`} className={`cursor-pointer rounded-sm transition-colors duration-150 hover:text-accent! [&:hover~button]:text-accent! focus-visible:text-accent! [&:focus-visible~button]:text-accent! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${puntaje <= valor ? 'text-accent' : 'text-border'}`}>
      <svg aria-hidden="true" width={grande ? 32 : 20} height={grande ? 32 : 20} viewBox="0 0 24 24"><path d="m12 2 2.8 6.7 7.2.6-5.5 4.7 1.7 7-6.2-3.8L5.8 21l1.7-7L2 9.3l7.2-.6L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth=".6" strokeLinejoin="round" /></svg>
    </button>)}
  </span>
}

export default function CalificarSesion() {
  return <VistaHU6 activo="mis-sesiones">
    <div className="select-none" aria-hidden="true" inert>
      <h1 className={`${escala.tituloPantalla} mb-6`}>Mis sesiones</h1>
      <div className="grid gap-4">
        {[
          ['Camila Quispe Andrade', 'ES210 Estadística Aplicada · 05/09/2026'],
          ['Diego Huamán Salcedo', 'EC201 Microeconomía · 02/09/2026'],
        ].map(([nombre, curso]) => <div key={nombre} className="flex h-24 items-center gap-6 rounded-xl border border-border bg-white px-6">
          <Avatar /><div><h2 className={escala.subtitulo}>{nombre}</h2><p className={`${escala.cuerpo} text-text-muted`}>{curso}</p></div>
          <span className="ml-auto rounded-full border border-success/25 bg-success/10 px-4 py-1.5 text-base font-semibold text-success">Realizada</span>
        </div>)}
      </div>
    </div>
    <div className="absolute inset-0 z-10 bg-ink/45 backdrop-blur-[2px]" />
    <div className="absolute inset-0 z-20 flex items-center justify-center overflow-y-auto px-4 py-8">
      <section role="dialog" aria-modal="true" aria-labelledby="calificar-titulo" className="my-auto w-full translate-y-[3px] max-w-160 rounded-2xl bg-white p-6 shadow-[0_24px_80px_rgba(28,27,46,0.25)] sm:p-8">
        <div className="mb-[18px] flex items-center justify-between">
          <h2 id="calificar-titulo" className={escala.tituloPantalla}>Califica tu sesión</h2>
          <Link to="/mis-sesiones" aria-label="Cerrar" className="flex size-8 items-center justify-center text-text-muted"><svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24"><path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" /></svg></Link>
        </div>
        <div className="flex min-h-20 items-center gap-4 rounded-lg border border-border bg-bg p-4">
          <Avatar />
          <div><h3 className={escala.subtitulo}>Camila Quispe Andrade</h3><p className={`${escala.cuerpo} mt-1 text-text-muted`}>ES210 Estadística Aplicada · 05/09/2026 · 17:00 a 18:00</p></div>
        </div>
        <div className="mt-5 mb-[18px] flex flex-col items-center">
          <h3 className="text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">PUNTAJE GENERAL</h3>
          <div className="mt-2"><EstrellasHover valor={4} nombre="Puntaje general" grande /></div>
          <p className={`${escala.cuerpo} mt-2 text-text-muted`}>4 de 5 — muy buena</p>
        </div>
        <dl className={`${escala.cuerpo} mb-5 space-y-3`}>
          {[['Claridad', 5], ['Puntualidad', 4], ['Dominio del tema', 5]].map(([nombre, puntaje]) => <div key={nombre} className="flex items-center justify-between gap-4"><dt>{nombre}</dt><dd className="flex items-center"><EstrellasHover valor={puntaje} nombre={nombre} /></dd></div>)}
        </dl>
        <label htmlFor="comentario-hu6" className="block text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">COMENTARIO</label>
        <textarea id="comentario-hu6" defaultValue={comentario} className="mt-1.5 block h-24 w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-[15px] leading-[22px]" />
        <p className={`${escala.auxiliar} mt-1 text-text-muted`}>Tu comentario será visible en la ficha del tutor con tu nombre.</p>
        <div className="mt-5 flex items-center justify-end gap-7">
          <button type="button" className={`${escala.cuerpo} font-semibold text-primary`}>Más tarde</button>
          <button type="button" className={escala.botonPrimario}>Enviar calificación</button>
        </div>
      </section>
    </div>
  </VistaHU6>
}
