// Los nombres y cursos son los mismos que aparecen en las HU-3, HU-4 y HU-5.
export const usuarioActual = { id: 'estudiante-1', nombre: 'Joaquín Medina Talledo', rol: 'estudiante' }
export const PLAZO_DIAS = 7
export const cursos = [
  { id: 'MA101', nombre: 'Cálculo I' },
  { id: 'SI401', nombre: 'Programación Web' },
  { id: 'ES210', nombre: 'Estadística Aplicada' },
  { id: 'FI202', nombre: 'Física II' },
  { id: 'CO105', nombre: 'Contabilidad General' },
  { id: 'EC201', nombre: 'Microeconomía' },
  { id: 'QU102', nombre: 'Química General' },
]
export const tutores = [
  { id: 'ariana', nombre: 'Ariana Flores Bustamante', carrera: 'Ing. de Sistemas', ciclo: 7, cursos: ['MA101', 'SI401'], modalidad: 'Remota', activo: true },
  { id: 'camila', nombre: 'Camila Quispe Andrade', carrera: 'Ing. Industrial', ciclo: 8, cursos: ['MA101', 'ES210'], modalidad: 'Ambas', activo: true },
  { id: 'sebastian', nombre: 'Sebastián Rojas Mendoza', carrera: 'Ing. Civil', ciclo: 9, cursos: ['MA101', 'FI202'], modalidad: 'Remota', activo: true },
  { id: 'valeria', nombre: 'Valeria Ccahuana Rivas', carrera: 'Contabilidad', ciclo: 6, cursos: ['CO105', 'MA101'], modalidad: 'Remota', activo: true },
  { id: 'diego', nombre: 'Diego Huamán Salcedo', carrera: 'Economía', ciclo: 7, cursos: ['EC201', 'MA101'], modalidad: 'Remota', activo: true },
  { id: 'lucia', nombre: 'Lucía Paredes Ynga', carrera: 'Psicología', ciclo: 8, cursos: ['ES210', 'MA101'], modalidad: 'Remota', activo: true },
  { id: 'mateo', nombre: 'Mateo Chávez Ríos', carrera: 'Ing. de Sistemas', ciclo: 9, cursos: ['SI401', 'MA101'], modalidad: 'Remota', activo: true },
  { id: 'fabiana', nombre: 'Fabiana Loayza Vera', carrera: 'Química', ciclo: 6, cursos: ['QU102', 'MA101'], modalidad: 'Remota', activo: true },
]

// Fechas relativas SOLO para la demostración: se fijan al abrir por primera vez.
// Luego se conserva el conjunto en localStorage; recargar no reinicia el plazo.
export function crearDatosIniciales(ahora = Date.now()) {
  const fecha = (dias) => new Date(ahora - dias * 86400000).toISOString()
  const sesion = (id, tutorId, cursoId, dias, estado = 'Realizada', estudianteId = usuarioActual.id) => ({
    id, tutorId, cursoId, estudianteId, estado,
    fecha: fecha(dias), cerradaEn: estado === 'Realizada' ? fecha(dias) : null,
  })
  const sesiones = [
    sesion('TU-2026-0184', 'sebastian', 'MA101', 1),
    sesion('TU-2026-0181', 'camila', 'ES210', 2),
    sesion('TU-2026-0176', 'diego', 'EC201', 4),
    sesion('TU-2026-0160', 'lucia', 'ES210', 12),
    sesion('TU-2026-0158', 'valeria', 'CO105', 13),
    sesion('TU-2026-0190', 'ariana', 'SI401', -2, 'Programada'),
    sesion('TU-2026-0170', 'mateo', 'SI401', 6, 'No asistió'),
    sesion('TU-2026-0168', 'sebastian', 'FI202', 8, 'Cancelada'),
  ]
  const calificacion = (id, sesionId, general, comentario, aspectos = [general, general, general]) => {
    const s = sesiones.find((item) => item.id === sesionId)
    return {
      id, sesionId, estudianteId: s.estudianteId, estudianteNombre: usuarioActual.nombre,
      tutorId: s.tutorId, cursoId: s.cursoId, general, comentario,
      claridad: aspectos[0], puntualidad: aspectos[1], dominio: aspectos[2],
      creadaEn: s.cerradaEn, actualizadaEn: s.cerradaEn,
    }
  }
  const calificaciones = [
    calificacion('cal-propia-1', 'TU-2026-0181', 5, 'Explicó los ejercicios paso a paso y resolvió todas mis dudas.', [5, 4, 5]),
    calificacion('cal-propia-2', 'TU-2026-0176', 4, 'Me ayudó a entender los gráficos de oferta y demanda.', [4, 5, 5]),
    calificacion('cal-propia-3', 'TU-2026-0160', 4, 'La práctica de estadística fue muy útil para el examen.', [4, 4, 5]),
  ]
  const opiniones = [
    ['sebastian', 'MA101', 5, 'Muy claro con las integrales y los ejemplos.', 'Antonella Vargas'],
    ['sebastian', 'MA101', 4, 'Resolvimos la práctica y pude seguir cada paso.', 'Gonzalo Ramírez'],
    ['sebastian', 'FI202', 5, 'Domina el curso y prepara buenos ejercicios.', 'María Torres'],
    ['sebastian', 'MA101', 3, 'Buena explicación, aunque faltó tiempo para practicar.', 'Luis Salas'],
    ['sebastian', 'FI202', 4, 'Me sirvió el repaso de fuerzas y movimiento.', 'Ana García'],
    ['ariana', 'MA101', 5, 'Muy paciente y ordenada al explicar.', 'María Torres'],
    ['ariana', 'MA101', 5, 'Llegó puntual y resolvió todas mis preguntas.', 'Ana García'],
    ['ariana', 'SI401', 4, 'Entendí mejor los componentes de React.', 'Luis Salas'],
    ['ariana', 'SI401', 5, 'Buenos ejemplos para practicar después.', 'Gonzalo Ramírez'],
    ['camila', 'MA101', 5, 'Explica de forma sencilla y con ejemplos.', 'Luis Salas'],
    ['camila', 'MA101', 4, 'Buen repaso para la práctica.', 'María Torres'],
    ['camila', 'ES210', 4, 'La sesión me ayudó a ordenar mis apuntes.', 'Ana García'],
    ['valeria', 'CO105', 5, 'Aclaró mis dudas con los asientos contables.', 'Ana García'],
    ['valeria', 'MA101', 4, 'Muy atenta a las preguntas.', 'Luis Salas'],
    ['diego', 'MA101', 4, 'Los ejercicios estuvieron bien explicados.', 'Ana García'],
    ['diego', 'EC201', 5, 'Excelente repaso para el parcial.', 'María Torres'],
    ['lucia', 'ES210', 5, 'Explicó cada fórmula con un caso concreto.', 'Luis Salas'],
    ['mateo', 'SI401', 3, 'Buenos ejemplos; me habría gustado más práctica.', 'Ana García'],
    ['mateo', 'MA101', 2, 'Necesité más tiempo para seguir el ritmo.', 'María Torres'],
  ]
  opiniones.forEach(([tutorId, cursoId, general, comentario, nombre], i) => {
    const id = `TU-DEMO-${i + 1}`
    const estudianteId = `otro-${i + 1}`
    sesiones.push(sesion(id, tutorId, cursoId, i + 3, 'Realizada', estudianteId))
    calificaciones.push({ ...calificacion(`cal-demo-${i + 1}`, id, general, comentario), estudianteNombre: nombre })
  })
  return { version: 1, sesiones, calificaciones }
}
