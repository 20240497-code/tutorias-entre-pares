import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Avatar } from '../../components/historia6/Comunes'
import { VistaHU6, Estrellas, EstadoVacio, claseTarjeta, claseBoton, claseSecundario, claseSelect } from '../../components/historia6/Valoraciones'
import { useValoraciones } from '../../contexto/ValoracionesContext'
import { fechaCorta, fechaConHora, fechaLimite, motivoBloqueo, nombreCurso } from '../../servicios/valoraciones'

export default function MisCalificaciones() {
  const { usuario, sesiones, calificaciones, tutores, cursos, eliminarCalificacion } = useValoraciones()
  const [parametros, setParametros] = useSearchParams()
  const pendientes = parametros.get('vista') === 'pendientes'
  const [curso, setCurso] = useState('')
  const [error, setError] = useState('')
  const propias = calificaciones.filter((item) => item.estudianteId === usuario.id).sort((a, b) => b.creadaEn.localeCompare(a.creadaEn))
  const sinCalificar = sesiones.filter((sesion) => sesion.estudianteId === usuario.id && !calificaciones.some((item) => item.sesionId === sesion.id))
  const lista = (pendientes ? sinCalificar : propias).filter((item) => !curso || item.cursoId === curso)
  function confirmar(calificacion) {
    const aceptado = window.confirm(`¿Eliminar la calificación de ${calificacion.sesionId}? El plazo para volver a calificar no se reinicia.`)
    if (!aceptado) return
    const resultado = eliminarCalificacion(calificacion.id)
    if (!resultado.ok) setError(resultado.mensaje)
  }
  if (usuario.rol !== 'estudiante') return <VistaHU6><EstadoVacio titulo="Acceso restringido" texto="Esta sección es exclusiva del estudiante que recibió la tutoría." /></VistaHU6>

  return (
    <VistaHU6>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Mis calificaciones</h1>
          <p className="text-sm text-slate-500">Comparte tu experiencia y ayuda a otros estudiantes a elegir un tutor.</p>
        </div>
        <Link to="/mis-calificaciones?vista=pendientes" className={claseBoton}>Calificar una sesión</Link>
      </div>
      {error && <p role="alert" className="text-sm text-rose-700 mb-4">{error}</p>}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-5 border-b border-slate-200">
        <nav className="flex gap-5 text-sm" aria-label="Vista de calificaciones">
          <button type="button" onClick={() => setParametros({})} aria-current={!pendientes ? 'page' : undefined}
            className={`pb-4 ${!pendientes ? 'font-bold text-indigo-800 border-b-2 border-indigo-800' : 'text-slate-500'}`}>Emitidas ({propias.length})</button>
          <button type="button" onClick={() => setParametros({ vista: 'pendientes' })} aria-current={pendientes ? 'page' : undefined}
            className={`pb-4 ${pendientes ? 'font-bold text-indigo-800 border-b-2 border-indigo-800' : 'text-slate-500'}`}>Sesiones sin calificar ({sinCalificar.length})</button>
        </nav>
        <div className="pb-3 w-full sm:w-64">
          <label htmlFor="curso-propias" className="sr-only">Filtrar mis calificaciones por curso</label>
          <select id="curso-propias" value={curso} onChange={(e) => setCurso(e.target.value)} className={claseSelect}>
            <option value="">Todos los cursos</option>
            {cursos.map((item) => <option key={item.id} value={item.id}>{item.id} {item.nombre}</option>)}
          </select>
        </div>
      </div>
      <p className="text-xs text-slate-500 mb-5">Puedes publicar y editar hasta 7 días después del cierre de la sesión. Las fechas se muestran en hora de Lima.</p>
      <div className="grid gap-4">
        {!lista.length && <EstadoVacio titulo={pendientes ? 'No hay sesiones sin calificar' : 'No hay calificaciones para mostrar'} texto={curso ? 'Prueba seleccionando otro curso o todos los cursos.' : 'Cuando tengas sesiones realizadas podrás compartir tu experiencia aquí.'} />}
        {lista.map((item) => {
          const sesion = pendientes ? item : sesiones.find((sesion) => sesion.id === item.sesionId)
          const tutor = tutores.find((tutor) => tutor.id === item.tutorId)
          const bloqueo = motivoBloqueo(sesion, usuario)
          return (
            <article key={item.id} className={claseTarjeta}>
              <div className="flex flex-wrap items-start gap-4">
                <Avatar size="avatar-pequeno" />
                <div className="flex-1 min-w-40">
                  <h2 className="font-bold text-slate-900">{tutor?.nombre}</h2>
                  <p className="text-sm text-slate-500 mt-1">{nombreCurso(cursos, item.cursoId)}</p>
                  <p className="text-xs text-slate-500 mt-1">{sesion.id} · {fechaCorta(sesion.fecha)}</p>
                </div>
                {pendientes && <span className="bg-violet-100 text-indigo-800 rounded-full px-3 py-1 text-xs font-bold">{sesion.estado}</span>}
                {!pendientes && <div className="flex items-center gap-2"><Estrellas valor={item.general} /><strong className="text-sm">{item.general}.0</strong></div>}
              </div>
              {!pendientes && <>
                <p className="text-sm text-slate-700 mt-4 whitespace-pre-wrap break-words">{item.comentario}</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 mt-3">
                  <span>Claridad <b className="text-slate-700">{item.claridad}/5</b></span>
                  <span>Puntualidad <b className="text-slate-700">{item.puntualidad}/5</b></span>
                  <span>Dominio del tema <b className="text-slate-700">{item.dominio}/5</b></span>
                </div>
              </>}
              <div className="flex flex-wrap justify-between items-center gap-4 pt-4 mt-4 border-t border-slate-100">
                <p className={`text-xs max-w-lg ${bloqueo ? 'text-slate-500' : 'text-indigo-800'}`}>
                  {bloqueo || `Disponible hasta el ${fechaConHora(fechaLimite(sesion))}.`}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link to={`/valoraciones-tutor/${tutor.id}`} className="text-sm font-bold text-indigo-800 hover:underline">Ver opiniones</Link>
                  {pendientes && !bloqueo && <Link to={`/calificar-sesion/${sesion.id}`} className={claseBoton}>Calificar</Link>}
                  {!pendientes && <>
                    {!bloqueo && <Link to={`/editar-calificacion/${item.id}`} className={claseSecundario}>Editar</Link>}
                    <button type="button" onClick={() => confirmar(item)} className="text-sm font-bold text-rose-700 hover:underline py-2">Eliminar</button>
                  </>}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </VistaHU6>
  )
}
