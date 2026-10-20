import { createContext, useContext, useState } from 'react'
import { crearDatosIniciales, cursos, tutores, usuarioActual } from '../datos/datosHU6'
import { CLAVE_ALMACENAMIENTO, motivoBloqueo, validarFormulario } from '../servicios/valoraciones'

const ValoracionesContext = createContext(null)
export function useValoraciones() {
  return useContext(ValoracionesContext)
}

function cargarDatos(clave, datosCompartidos) {
  let iniciales = crearDatosIniciales()
  if (datosCompartidos) iniciales = { version: 1, sesiones: [], calificaciones: datosCompartidos.calificacionesIniciales || [] }
  try {
    const texto = localStorage.getItem(clave)
    if (texto) {
      const datos = JSON.parse(texto)
      if (datos.version === 1 && Array.isArray(datos.sesiones) && Array.isArray(datos.calificaciones)) return datos
    }
    localStorage.setItem(clave, JSON.stringify(iniciales))
  } catch { /* Se pueden consultar los datos aunque el navegador no permita guardarlos. */ }
  return iniciales
}

// El Context comparte datos y operaciones entre las cuatro pantallas.
export default function ValoracionesProvider({ children, usuario = usuarioActual, datosCompartidos }) {
  const clave = datosCompartidos ? `${CLAVE_ALMACENAMIENTO}-integrado` : CLAVE_ALMACENAMIENTO
  const [datos, setDatos] = useState(() => cargarDatos(clave, datosCompartidos))
  const [mensaje, setMensaje] = useState('')
  const sesiones = datosCompartidos?.sesiones || datos.sesiones

  function persistir(calificaciones, texto) {
    const nuevosDatos = { ...datos, calificaciones }
    try {
      localStorage.setItem(clave, JSON.stringify(nuevosDatos))
    } catch {
      return { ok: false, mensaje: 'No se pudo guardar. Revisa el espacio o los permisos del navegador.' }
    }
    setDatos(nuevosDatos)
    setMensaje(texto)
    return { ok: true }
  }

  function guardarCalificacion(sesionId, valores, calificacionId = null) {
    const sesion = sesiones.find((item) => item.id === sesionId)
    const bloqueo = motivoBloqueo(sesion, usuario)
    if (bloqueo) return { ok: false, mensaje: bloqueo }
    const errores = validarFormulario(valores)
    if (Object.keys(errores).length) return { ok: false, mensaje: 'Revisa los campos señalados.', errores }
    const existente = datos.calificaciones.find((item) => item.sesionId === sesionId)
    if (calificacionId && (!existente || existente.id !== calificacionId || existente.estudianteId !== usuario.id)) return { ok: false, mensaje: 'No puedes editar esta calificación.' }
    if (!calificacionId && existente) return { ok: false, mensaje: 'Esta sesión ya tiene una calificación.' }
    const ahora = new Date().toISOString()
    const nueva = {
      ...valores, comentario: valores.comentario.trim(),
      id: calificacionId || crypto.randomUUID(), sesionId, estudianteId: usuario.id,
      estudianteNombre: usuario.nombre, tutorId: sesion.tutorId, cursoId: sesion.cursoId,
      creadaEn: ahora, actualizadaEn: ahora,
    }
    if (existente) nueva.creadaEn = existente.creadaEn
    // Quitamos la versión anterior, si existe, y añadimos la nueva.
    const lista = datos.calificaciones.filter((item) => item.id !== nueva.id)
    lista.push(nueva)
    const texto = calificacionId ? 'Calificación actualizada correctamente.' : 'Calificación publicada correctamente.'
    return persistir(lista, texto)
  }

  function eliminarCalificacion(id) {
    const calificacion = datos.calificaciones.find((item) => item.id === id)
    if (!calificacion || usuario.rol !== 'estudiante' || calificacion.estudianteId !== usuario.id) return { ok: false, mensaje: 'No puedes eliminar esta calificación.' }
    return persistir(datos.calificaciones.filter((item) => item.id !== id), 'Calificación eliminada correctamente.')
  }

  return <ValoracionesContext.Provider value={{
    usuario, cursos: datosCompartidos?.cursos || cursos, tutores: datosCompartidos?.tutores || tutores,
    sesiones, calificaciones: datos.calificaciones, guardarCalificacion, eliminarCalificacion, mensaje, setMensaje,
  }}>{children}</ValoracionesContext.Provider>
}
