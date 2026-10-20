import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Avatar } from '../../components/historia6/Comunes'
import { VistaHU6, CampoPuntaje, EstadoVacio, claseTarjeta, claseBoton, claseSecundario } from '../../components/historia6/Valoraciones'
import { useValoraciones } from '../../contexto/ValoracionesContext'
import { fechaCorta, fechaConHora, fechaLimite, motivoBloqueo, nombreCurso } from '../../servicios/valoraciones'

// El formulario se reutiliza para registrar y editar; no hay dos reglas distintas.
function Formulario({ sesion, calificacion }) {
  const { tutores, cursos, guardarCalificacion, setMensaje } = useValoraciones()
  const navegar = useNavigate()
  const tutor = tutores.find((item) => item.id === sesion.tutorId)
  const [valores, setValores] = useState({
    general: calificacion?.general || 0, claridad: calificacion?.claridad || 0,
    puntualidad: calificacion?.puntualidad || 0, dominio: calificacion?.dominio || 0,
    comentario: calificacion?.comentario || '',
  })
  const [errores, setErrores] = useState({})
  const [error, setError] = useState('')

  function cambiar(campo, valor) {
    setValores((anteriores) => ({ ...anteriores, [campo]: valor }))
    setErrores((anteriores) => ({ ...anteriores, [campo]: '' }))
    setError('')
  }
  function guardar(evento) {
    evento.preventDefault()
    // guardarCalificacion valida los campos y también los permisos y el plazo.
    const resultado = guardarCalificacion(sesion.id, valores, calificacion?.id)
    if (!resultado.ok) {
      setErrores(resultado.errores || {})
      setError(resultado.mensaje)
      return
    }
    navegar('/mis-calificaciones')
  }

  return (
    <>
      <div className="text-sm text-slate-500 mb-4"><Link to="/mis-calificaciones" className="hover:text-indigo-800">Mis calificaciones</Link> › {calificacion ? 'Editar' : 'Calificar sesión'}</div>
      <h1 className="text-3xl font-extrabold mb-2">{calificacion ? 'Editar calificación' : 'Calificar al tutor'}</h1>
      <p className="text-sm text-slate-500 mb-6">Tu opinión ayuda a mejorar las tutorías entre pares.</p>
      <div className="grid lg:grid-cols-3 gap-6 items-start">
        <form noValidate onSubmit={guardar} className={`${claseTarjeta} lg:col-span-2 space-y-6`}>
          <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
            <Avatar />
            <div><h2 className="text-lg font-bold">{tutor.nombre}</h2><p className="text-sm text-slate-500">{nombreCurso(cursos, sesion.cursoId)}</p></div>
          </div>
          <CampoPuntaje nombre="general" titulo="Puntaje general" detalle="¿Cómo fue tu experiencia en esta sesión? 1 es muy mala y 5 es excelente." valor={valores.general} onChange={(valor) => cambiar('general', valor)} error={errores.general} />
          <div className="border-t border-slate-100 pt-5 space-y-5">
            <h2 className="text-lg font-bold text-indigo-800">Calificación por aspectos</h2>
            {[
              ['claridad', 'Claridad', 'Explicó los conceptos de una forma comprensible.'],
              ['puntualidad', 'Puntualidad', 'Respetó el horario acordado.'],
              ['dominio', 'Dominio del tema', 'Demostró conocimiento y resolvió tus dudas.'],
            ].map(([campo, titulo, detalle]) => <CampoPuntaje key={campo} nombre={campo} titulo={titulo} detalle={detalle} valor={valores[campo]} onChange={(valor) => cambiar(campo, valor)} error={errores[campo]} />)}
          </div>
          <div>
            <label htmlFor="comentario" className="block text-sm font-bold mb-2">Comentario <span className="text-rose-700">*</span></label>
            <textarea id="comentario" rows="4" maxLength="500" value={valores.comentario} onChange={(e) => cambiar('comentario', e.target.value)}
              placeholder="Cuéntanos qué te ayudó y qué se podría mejorar…" aria-invalid={!!errores.comentario}
              aria-describedby={errores.comentario ? 'comentario-error comentario-ayuda' : 'comentario-ayuda'}
              className={`w-full border rounded-lg px-4 py-3 text-sm resize-y ${errores.comentario ? 'border-rose-600' : 'border-slate-200'}`} />
            <div id="comentario-ayuda" className="flex justify-between gap-4 text-xs text-slate-500 mt-2"><span>Se publicará en la ficha del tutor con tu nombre.</span><span className="shrink-0">{valores.comentario.length}/500</span></div>
            {errores.comentario && <p id="comentario-error" className="text-xs text-rose-700 mt-2">{errores.comentario}</p>}
          </div>
          {error && <p role="alert" className="text-rose-700 text-sm">{error}</p>}
          <div className="flex flex-wrap justify-end gap-3 pt-5 border-t border-slate-100">
            <Link to="/mis-calificaciones" onClick={() => setMensaje('')} className={claseSecundario}>Cancelar</Link>
            <button type="submit" className={claseBoton}>{calificacion ? 'Guardar cambios' : 'Publicar calificación'}</button>
          </div>
        </form>
        <aside className="space-y-4">
          <section className={claseTarjeta}>
            <h2 className="font-bold text-indigo-800 mb-4">Datos de la sesión</h2>
            <dl className="space-y-3 text-sm">
              <div><dt className="text-slate-500 text-xs">Código</dt><dd className="font-bold mt-1">{sesion.id}</dd></div>
              <div><dt className="text-slate-500 text-xs">Fecha</dt><dd className="mt-1">{fechaCorta(sesion.fecha)}</dd></div>
              <div><dt className="text-slate-500 text-xs">Estado</dt><dd className="text-green-700 font-bold mt-1">Realizada</dd></div>
              <div><dt className="text-slate-500 text-xs">Plazo para publicar y editar</dt><dd className="mt-1">Hasta el {fechaConHora(fechaLimite(sesion))}</dd></div>
            </dl>
          </section>
          <p className="text-sm text-slate-500 leading-relaxed">Puedes registrar una sola calificación por sesión. El plazo de 7 días se cuenta desde el cierre y se mantiene aunque edites o elimines tu opinión.</p>
        </aside>
      </div>
    </>
  )
}

export default function CalificarSesion() {
  const { sesionId, calificacionId } = useParams()
  const { usuario, sesiones, calificaciones } = useValoraciones()
  const calificacion = calificacionId ? calificaciones.find((item) => item.id === calificacionId) : null
  const sesion = sesiones.find((item) => item.id === (calificacionId ? calificacion?.sesionId : sesionId))
  let bloqueo = motivoBloqueo(sesion, usuario)
  if (calificacionId && !calificacion) bloqueo = 'Esta calificación no existe o ya fue eliminada.'
  if (calificacion && calificacion.estudianteId !== usuario.id) bloqueo = 'Solo puedes editar las calificaciones que has emitido.'
  const existente = !calificacionId && calificaciones.find((item) => item.sesionId === sesionId && item.estudianteId === usuario.id)
  if (bloqueo) return <VistaHU6><EstadoVacio titulo="No puedes calificar esta sesión" texto={bloqueo} enlace="/mis-calificaciones?vista=pendientes" boton="Volver a mis sesiones" /></VistaHU6>
  if (existente) return <VistaHU6><EstadoVacio titulo="Esta sesión ya está calificada" texto="Solo se permite una calificación por sesión. Puedes editar la que ya publicaste dentro del plazo." enlace={`/editar-calificacion/${existente.id}`} boton="Editar mi calificación" /></VistaHU6>
  return <VistaHU6><Formulario key={calificacion?.id || sesion.id} sesion={sesion} calificacion={calificacion} /></VistaHU6>
}
