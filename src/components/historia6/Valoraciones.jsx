import { Link } from 'react-router-dom'
import { escalaInterfaz as escala } from '../compartidos/escalaInterfaz'
import { Marco } from './Comunes'

const separaciones = { 1: 'gap-px', 2: 'gap-0.5', 3: 'gap-0.75', 4: 'gap-1', 5: 'gap-1.25', 6: 'gap-1.5', 14: 'gap-3.5' }

export function VistaHU6({ children, activo, publico = false }) {
  return <Marco activo={activo} publico={publico}>{children}</Marco>
}

// Estrellas estáticas: los puntajes reproducen el dibujo del PDF, sin formulario.
export function Estrellas({ valor = 5, size = 24, gap = 4 }) {
  return <span aria-label={`${valor} de 5 estrellas`} className={`inline-flex shrink-0 items-center ${separaciones[gap] || 'gap-1'}`}>
    {[1, 2, 3, 4, 5].map((estrella) => <svg key={estrella} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" className={estrella <= valor ? 'text-accent' : 'text-border'}>
      <path d="m12 2 2.8 6.7 7.2.6-5.5 4.7 1.7 7-6.2-3.8L5.8 21l1.7-7L2 9.3l7.2-.6L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth=".6" strokeLinejoin="round" />
    </svg>)}
  </span>
}

export function FiltroVisual({ children, etiqueta }) {
  return <button type="button" aria-label={etiqueta} className={`${escala.control} inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap text-text`}>
    {children}<span aria-hidden="true" className="text-xs">▾</span>
  </button>
}

export function EstadoVacio() {
  return <section aria-label="Listado de calificaciones vacío" className="flex min-h-75 flex-col items-center justify-center rounded-xl border border-border bg-white px-6 py-6 text-center">
    <span aria-hidden="true" className="mb-3 flex size-16 items-center justify-center rounded-full bg-primary-soft"><svg width="32" height="32" viewBox="0 0 24 24" className="text-accent"><path d="m12 2 2.8 6.7 7.2.6-5.5 4.7 1.7 7-6.2-3.8L5.8 21l1.7-7L2 9.3l7.2-.6L12 2Z" fill="currentColor" /></svg></span>
    <h2 className={escala.tituloSeccion}>Todavía no calificas ninguna sesión</h2>
    <p className={`${escala.cuerpo} mt-2 text-text-muted`}>Cuando una sesión se cierre como realizada podrás calificar al tutor.</p>
    <Link to="/mis-sesiones" className={`${escala.botonPrimario} mt-5`}>Ver mis sesiones</Link>
  </section>
}
