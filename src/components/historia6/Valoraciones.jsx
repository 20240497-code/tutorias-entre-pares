import { Link } from 'react-router-dom'
import { Marco } from './Comunes'
import { useValoraciones } from '../../contexto/ValoracionesContext'

export const claseTarjeta = 'bg-white border border-slate-300 rounded-lg shadow-sm p-5 md:p-6'
export const claseBoton = 'inline-flex items-center justify-center bg-indigo-800 hover:bg-indigo-900 text-white rounded-lg px-5 py-3 text-sm font-bold transition-colors'
export const claseSecundario = 'inline-flex items-center justify-center border border-indigo-400 text-indigo-800 hover:bg-violet-50 rounded-lg px-4 py-2 text-sm font-bold transition-colors'
export const claseSelect = 'w-full bg-white border border-slate-200 text-slate-900 rounded-lg px-3 py-3 text-sm'

export function VistaHU6({ children, activo = 'mis-calificaciones' }) {
  const { mensaje, setMensaje } = useValoraciones()
  return (
    <Marco activo={activo}>
      <div className="max-w-7xl mx-auto">
        {mensaje && (
          <div role="status" className="flex items-start justify-between gap-4 mb-5 bg-green-50 text-green-800 border border-green-300 rounded-lg p-4 text-sm">
            <p>{mensaje}</p>
            <button type="button" onClick={() => setMensaje('')} aria-label="Cerrar notificación" className="font-bold px-1">×</button>
          </div>
        )}
        {children}
      </div>
    </Marco>
  )
}

export function Estrellas({ valor, grande = false }) {
  return (
    <span aria-label={`${valor.toFixed(1)} de 5 estrellas`} className={`inline-flex gap-0.5 ${grande ? 'text-3xl' : 'text-lg'}`}>
      {[1, 2, 3, 4, 5].map((estrella) => <span key={estrella} aria-hidden="true" className={estrella <= Math.round(valor) ? 'text-amber-500' : 'text-slate-300'}>★</span>)}
    </span>
  )
}

export function CampoPuntaje({ nombre, titulo, valor, onChange, error, detalle }) {
  return (
    <div>
      <label htmlFor={nombre} className="block font-bold text-slate-900 text-sm mb-1">{titulo} <span className="text-rose-700">*</span></label>
      {detalle && <p className="text-xs text-slate-500 mb-3">{detalle}</p>}
      <select id={nombre} value={valor} onChange={(e) => onChange(Number(e.target.value))} className={claseSelect}
        aria-invalid={!!error} aria-describedby={error ? `${nombre}-error` : undefined}>
        <option value="0">Selecciona de 1 a 5</option>
        {[1, 2, 3, 4, 5].map((puntaje) => <option key={puntaje} value={puntaje}>{puntaje} / 5</option>)}
      </select>
      {error && <p id={`${nombre}-error`} className="text-xs text-rose-700 mt-2">{error}</p>}
    </div>
  )
}

export function EstadoVacio({ titulo, texto, enlace, boton }) {
  return (
    <div className="bg-white border border-dashed border-slate-300 rounded-lg p-8 md:p-12 text-center">
      <span aria-hidden="true" className="inline-flex items-center justify-center w-14 h-14 bg-violet-100 rounded-full text-indigo-800 text-3xl mb-4">☆</span>
      <h2 className="text-lg font-bold text-slate-900 mb-2">{titulo}</h2>
      <p className="text-sm text-slate-500 max-w-lg mx-auto">{texto}</p>
      {enlace && <Link to={enlace} className={`${claseBoton} mt-5`}>{boton}</Link>}
    </div>
  )
}
