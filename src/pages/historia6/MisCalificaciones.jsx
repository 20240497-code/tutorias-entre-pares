import { escalaInterfaz as escala } from '../../components/compartidos/escalaInterfaz'
import { Link, useSearchParams } from 'react-router-dom'
import { Avatar } from '../../components/historia6/Comunes'
import { EstadoVacio, Estrellas, FiltroVisual, VistaHU6 } from '../../components/historia6/Valoraciones'

const calificaciones = [
  { nombre: 'Camila Quispe Andrade', curso: 'ES210 Estadística Aplicada', fecha: '05/09/2026', puntaje: 4, comentario: 'Explicó con calma y me dejó ejercicios para practicar. Llegó cinco minutos tarde, nada grave.', editable: true },
  { nombre: 'Diego Huamán Salcedo', curso: 'EC201 Microeconomía', fecha: '02/09/2026', puntaje: 5, comentario: 'Preparó ejercicios del parcial anterior y explicó los gráficos de oferta y demanda con mucha claridad.' },
  { nombre: 'Fabiana Loayza Vera', curso: 'QU102 Química General', fecha: '19/08/2026', puntaje: 4, comentario: 'Buenos ejemplos de estequiometría. Nos faltó tiempo para el laboratorio.' },
]

export default function MisCalificaciones() {
  // El parámetro existente permite visualizar la variante vacía sin añadir rutas.
  const [parametros] = useSearchParams()
  const vacio = parametros.get('vista') === 'pendientes'
  return <VistaHU6>
    <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div><h1 className={escala.tituloPantalla}>Mis calificaciones</h1><p className={`${escala.cuerpo} mt-1 text-text-muted`}>Puedes editarlas o eliminarlas dentro de los 7 días posteriores a la sesión.</p></div>
      <FiltroVisual etiqueta="Filtrar por curso">Curso: todos</FiltroVisual>
    </div>
    {vacio ? <EstadoVacio /> : <div className="grid gap-4">
      {calificaciones.map((calificacion) => <article key={calificacion.nombre} className="rounded-lg border border-border bg-white px-5 py-4 shadow-card">
        <div className="flex items-start gap-4">
          <Avatar />
          <div className="min-w-0 flex-1"><h2 className={escala.subtitulo}>{calificacion.nombre}</h2><p className={`${escala.auxiliar} mt-1 text-text-muted`}>{calificacion.curso} · {calificacion.fecha}</p></div>
          <span className="pt-1"><Estrellas valor={calificacion.puntaje} size={20} gap={4} /></span>
        </div>
        <p className={`${escala.cuerpo} mt-3`}>{calificacion.comentario}</p>
        <div className={`${escala.auxiliar} mt-3 flex flex-wrap items-center gap-4`}>
          {calificacion.editable && <><Link to="/editar-calificacion/cal-propia-1" className="font-semibold text-primary">Editar</Link><button type="button" className="font-semibold text-danger">Eliminar</button></>}
          <p className="text-text-muted">{calificacion.editable ? 'Plazo de edición hasta el 12/09/2026' : 'Plazo de edición vencido'}</p>
        </div>
      </article>)}
    </div>}
  </VistaHU6>
}
