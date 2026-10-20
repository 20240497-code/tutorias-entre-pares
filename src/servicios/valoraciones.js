import { PLAZO_DIAS } from '../datos/datosHU6.js'

export const CLAVE_ALMACENAMIENTO = 'tutorias-hu6-v1'
export const nombreCurso = (cursos, id) => {
  const curso = cursos.find((item) => item.id === id)
  return curso ? `${curso.id} ${curso.nombre}` : id
}
export const fechaCorta = (fecha) => new Intl.DateTimeFormat('es-PE', {
  day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'America/Lima',
}).format(new Date(fecha))
export const fechaConHora = (fecha) => new Intl.DateTimeFormat('es-PE', {
  day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
  hour12: false, timeZone: 'America/Lima',
}).format(new Date(fecha))
export const fechaLimite = (sesion) => new Date(new Date(sesion.cerradaEn).getTime() + PLAZO_DIAS * 86400000).toISOString()
export function plazoVigente(sesion, ahora = Date.now()) {
  if (!sesion?.cerradaEn) return false
  const cierre = new Date(sesion.cerradaEn).getTime()
  return ahora >= cierre && ahora <= cierre + PLAZO_DIAS * 86400000
}

// Se valida también al guardar: no basta con ocultar el botón de la interfaz.
export function motivoBloqueo(sesion, usuario, ahora = Date.now()) {
  if (!sesion) return 'No encontramos esta sesión.'
  if (usuario.rol !== 'estudiante' || sesion.estudianteId !== usuario.id) return 'Solo el estudiante de esta sesión puede calificar al tutor.'
  if (sesion.estado !== 'Realizada' || !sesion.cerradaEn) return 'Solo puedes calificar sesiones cerradas como realizadas.'
  if (!plazoVigente(sesion, ahora)) return `El plazo de ${PLAZO_DIAS} días desde el cierre de la sesión ha vencido.`
  return ''
}
export function validarFormulario(valores) {
  const errores = {}
  for (const campo of ['general', 'claridad', 'puntualidad', 'dominio']) {
    if (!Number.isInteger(valores[campo]) || valores[campo] < 1 || valores[campo] > 5) errores[campo] = 'Selecciona un puntaje de 1 a 5.'
  }
  const comentario = valores.comentario.trim()
  if (!comentario) errores.comentario = 'Escribe un comentario sobre tu experiencia.'
  else if (comentario.length > 500) errores.comentario = 'El comentario debe tener como máximo 500 caracteres.'
  return errores
}
export function obtenerResumen(calificaciones) {
  const total = calificaciones.length
  const promedioDe = (campo) => total ? calificaciones.reduce((suma, item) => suma + item[campo], 0) / total : 0
  return {
    total, promedio: promedioDe('general'), claridad: promedioDe('claridad'),
    puntualidad: promedioDe('puntualidad'), dominio: promedioDe('dominio'),
    distribucion: [5, 4, 3, 2, 1].map((puntaje) => ({
      puntaje, cantidad: calificaciones.filter((item) => item.general === puntaje).length,
    })),
  }
}
export function obtenerRanking(tutores, calificaciones, cursoId, carrera = '') {
  return tutores.filter((tutor) => tutor.activo && tutor.cursos.includes(cursoId) && (!carrera || tutor.carrera === carrera))
    .map((tutor) => ({ ...tutor, ...obtenerResumen(calificaciones.filter((item) => item.tutorId === tutor.id && item.cursoId === cursoId)) }))
    .filter((tutor) => tutor.total > 0)
    .sort((a, b) => b.promedio - a.promedio || b.total - a.total || a.nombre.localeCompare(b.nombre, 'es'))
}
