import { escalaInterfaz as escala } from '../../components/compartidos/escalaInterfaz'
import PestanasDirectorio from '../../components/historia6/PestanasDirectorio'
import { Avatar } from '../../components/historia6/Comunes'
import { Estrellas, FiltroVisual, VistaHU6 } from '../../components/historia6/Valoraciones'

const tutores = [
  { nombre: 'Ariana Flores Bustamante', detalle: 'Ing. de Sistemas · MA101 · SI401 · remota', promedio: '4.9', sesiones: 40, estrellas: 5 },
  { nombre: 'Camila Quispe Andrade', detalle: 'Ing. Industrial · MA101 · ES210 · FI202 · ambas', promedio: '4.8', sesiones: 31, estrellas: 5 },
  { nombre: 'Sebastián Rojas Mendoza', detalle: 'Ing. Civil · MA101 · FI202 · remota', promedio: '4.7', sesiones: 28, estrellas: 4 },
  { nombre: 'Valeria Ccahuana Rivas', detalle: 'Contabilidad · CO105 · MA101 · remota', promedio: '4.6', sesiones: 19, estrellas: 4 },
  { nombre: 'Diego Huamán Salcedo', detalle: 'Economía · EC201 · MA101 · remota', promedio: '4.5', sesiones: 22, estrellas: 4 },
  { nombre: 'Mateo Chávez Ríos', detalle: 'Ing. de Sistemas · SI401 · MA101 · remota', promedio: '4.4', sesiones: 25, estrellas: 4 },
]

export default function RankingTutores() {
  return <VistaHU6 activo="directorio">
    <PestanasDirectorio />
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div><h1 className={escala.tituloPantalla}>Ranking de tutores</h1><p className={`${escala.cuerpo} text-text-muted`}>Ordenado por promedio recibido. Solo se listan tutores con 5 o más calificaciones.</p></div>
      <div className="flex flex-wrap gap-3"><FiltroVisual etiqueta="Curso del ranking">Curso: MA101 Cálculo I</FiltroVisual><FiltroVisual etiqueta="Carrera del tutor">Carrera: todas</FiltroVisual></div>
    </div>
    <ol className="grid gap-3">
      {tutores.map((tutor, indice) => <li key={tutor.nombre} className={`flex min-h-20 flex-wrap items-center gap-5 rounded-lg border px-5 py-3 sm:flex-nowrap ${indice === 0 ? 'border-primary bg-primary-soft' : 'border-border bg-white'}`}>
        <span className="w-8 shrink-0 text-2xl leading-8 font-bold text-primary">{indice + 1}</span>
        <Avatar blanco={indice === 0}  />
        <div className="min-w-0 flex-1"><h2 className={escala.subtitulo}>{tutor.nombre}</h2><p className={`${escala.auxiliar} text-text-muted`}>{tutor.detalle}</p></div>
        <div className="flex items-center gap-8 lg:gap-12"><Estrellas valor={tutor.estrellas} size={20} gap={2} /><strong className="w-15 text-center text-xl leading-7">{tutor.promedio}</strong><span className={`${escala.auxiliar} w-22 text-right text-text-muted`}>{tutor.sesiones} sesiones</span></div>
      </li>)}
    </ol>
  </VistaHU6>
}
