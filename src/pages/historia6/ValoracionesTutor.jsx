import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Avatar, Etiquetas } from '../../components/historia6/Comunes'
import { VistaHU6, Estrellas, EstadoVacio, claseTarjeta, claseSelect, claseSecundario } from '../../components/historia6/Valoraciones'
import { useValoraciones } from '../../contexto/ValoracionesContext'
import { fechaCorta, nombreCurso, obtenerResumen } from '../../servicios/valoraciones'

// Se puede insertar directamente <ResenasTutor tutorId={id} /> en DetalleTutor (HU-2/3).
export function ResenasTutor({ tutorId }) {
  const { calificaciones, cursos } = useValoraciones()
  const [puntaje, setPuntaje] = useState('')
  const opiniones = calificaciones.filter((item) => item.tutorId === tutorId)
  const resumen = obtenerResumen(opiniones)
  const visibles = opiniones.filter((item) => !puntaje || item.general === Number(puntaje))
    .sort((a, b) => b.creadaEn.localeCompare(a.creadaEn))
  return (
    <section aria-label="Valoraciones del tutor" className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className={`${claseTarjeta} text-center`}>
          <h2 className="font-bold text-indigo-800 mb-4">Promedio general</h2>
          <strong className="text-5xl text-slate-900 block mb-2">{resumen.total ? resumen.promedio.toFixed(1) : '—'}</strong>
          <Estrellas valor={resumen.promedio} grande />
          <p className="text-sm text-slate-500 mt-2">{resumen.total} {resumen.total === 1 ? 'calificación' : 'calificaciones'} · sobre 5</p>
          <div className="text-left mt-5 pt-4 border-t border-slate-100 space-y-3">
            {[['Claridad', resumen.claridad], ['Puntualidad', resumen.puntualidad], ['Dominio del tema', resumen.dominio]].map(([texto, valor]) => (
              <div className="flex justify-between text-sm gap-3" key={texto}><span className="text-slate-500">{texto}</span><b>{resumen.total ? `${valor.toFixed(1)} / 5` : '—'}</b></div>
            ))}
          </div>
        </div>
        <div className={`${claseTarjeta} lg:col-span-2`}>
          <h2 className="font-bold text-indigo-800 mb-5">Distribución de calificaciones</h2>
          <div className="space-y-4">
            {resumen.distribucion.map(({ puntaje: puntos, cantidad }) => {
              const porcentaje = resumen.total ? Math.round(cantidad / resumen.total * 100) : 0
              return (
                <div key={puntos} className="flex items-center gap-3 text-sm" aria-label={`${puntos} estrellas: ${cantidad} calificaciones, ${porcentaje}%`}>
                  <span className="w-9 shrink-0 font-bold text-slate-600">{puntos} <span aria-hidden="true" className="text-amber-500">★</span></span>
                  <div className="flex-1 h-3 bg-violet-100 rounded-full overflow-hidden" aria-hidden="true"><div className="h-full bg-indigo-800 rounded-full" style={{ width: `${porcentaje}%` }} /></div>
                  <span className="text-slate-500 w-22 text-right">{cantidad} ({porcentaje}%)</span>
                </div>
              )
            })}
          </div>
          <p className="text-xs text-slate-500 mt-6">El promedio incluye todas las calificaciones publicadas, sin importar el filtro de la lista.</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-indigo-800">Opiniones de estudiantes <span className="text-slate-500 text-sm font-normal">({visibles.length})</span></h2>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <div className="flex-1 sm:w-44"><label className="sr-only" htmlFor="puntaje-opiniones">Filtrar por puntaje</label>
            <select id="puntaje-opiniones" value={puntaje} onChange={(e) => setPuntaje(e.target.value)} className={claseSelect}>
              <option value="">Todos los puntajes</option>{[5, 4, 3, 2, 1].map((item) => <option key={item} value={item}>{item} {item === 1 ? 'estrella' : 'estrellas'}</option>)}
            </select></div>

        </div>
      </div>
      {!visibles.length && <EstadoVacio titulo={resumen.total ? 'No hay opiniones con este puntaje' : 'Este tutor aún no tiene calificaciones'} texto={resumen.total ? 'Selecciona otro puntaje o muestra todas las opiniones.' : 'Las opiniones aparecerán cuando los estudiantes califiquen sus sesiones realizadas.'} />}
      <div className="grid gap-4">
        {visibles.map((opinion) => <article className={claseTarjeta} key={opinion.id}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div><h3 className="font-bold text-sm">{opinion.estudianteNombre}</h3><p className="text-xs text-slate-500 mt-1">{nombreCurso(cursos, opinion.cursoId)} · {fechaCorta(opinion.creadaEn)}{opinion.actualizadaEn !== opinion.creadaEn ? ' · Editada' : ''}</p></div>
            <div className="flex items-center gap-2"><Estrellas valor={opinion.general} /><b className="text-sm">{opinion.general}.0</b></div>
          </div>
          <p className="text-sm text-slate-700 mt-3 whitespace-pre-wrap break-words">{opinion.comentario}</p>
          <p className="text-xs text-slate-500 mt-3">Claridad {opinion.claridad}/5 · Puntualidad {opinion.puntualidad}/5 · Dominio {opinion.dominio}/5</p>
        </article>)}
      </div>
    </section>
  )
}

export default function ValoracionesTutor() {
  const { tutorId } = useParams()
  const { tutores, cursos, calificaciones } = useValoraciones()
  const tutor = tutores.find((item) => item.id === tutorId)
  const resumen = obtenerResumen(calificaciones.filter((item) => item.tutorId === tutorId))
  return (
    <VistaHU6 activo="valoraciones">
      {!tutor ? <EstadoVacio titulo="Tutor no encontrado" texto="Revisa el enlace o consulta el ranking de tutores." enlace="/ranking-tutores" boton="Ver ranking" /> : <>
        <div className="text-sm text-slate-500 mb-4"><Link to="/ranking-tutores" className="hover:text-indigo-800">Ranking de tutores</Link> › Ficha del tutor</div>
        <section className="flex flex-wrap items-center justify-between gap-5 mb-5 p-6 bg-white border border-slate-300 rounded-lg shadow-sm">
          <div className="flex flex-wrap items-center gap-5"><Avatar size="avatar-grande" /><div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">{tutor.nombre}</h1>
            <p className="text-sm text-slate-500 mb-3">{tutor.carrera} · {tutor.ciclo}.º ciclo · Modalidad {tutor.modalidad.toLowerCase()}</p>
            <Etiquetas etiquetas={tutor.cursos.map((id) => nombreCurso(cursos, id))} />
          </div></div>
          <div className="text-right"><strong className="block text-4xl text-slate-900">{resumen.total ? resumen.promedio.toFixed(1) : '—'}</strong><span className="text-sm text-slate-500">{resumen.total} calificaciones</span></div>
        </section>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5"><h2 className="text-2xl font-bold text-indigo-800">Valoraciones del tutor</h2><Link to="/mis-calificaciones?vista=pendientes" className={claseSecundario}>Calificar una sesión</Link></div>
        <ResenasTutor key={tutorId} tutorId={tutorId} />
      </>}
    </VistaHU6>
  )
}
