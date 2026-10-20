import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar } from '../../components/historia6/Comunes'
import { VistaHU6, Estrellas, EstadoVacio, claseTarjeta, claseSelect, claseSecundario } from '../../components/historia6/Valoraciones'
import { useValoraciones } from '../../contexto/ValoracionesContext'
import { nombreCurso, obtenerRanking } from '../../servicios/valoraciones'

export default function RankingTutores() {
  const { tutores, cursos, calificaciones } = useValoraciones()
  const [curso, setCurso] = useState('MA101')
  const [carrera, setCarrera] = useState('')
  const navegar = useNavigate()
  const carreras = [...new Set(tutores.map((item) => item.carrera))].sort((a, b) => a.localeCompare(b, 'es'))
  const ranking = obtenerRanking(tutores, calificaciones, curso, carrera)
  return (
    <VistaHU6 activo="ranking">
      <div className="mb-6"><h1 className="text-3xl font-extrabold mb-2">Ranking de tutores</h1><p className="text-sm text-slate-500">Encuentra tutores según las valoraciones de estudiantes en cada curso.</p></div>
      <section className={`${claseTarjeta} mb-6`} aria-label="Filtros del ranking">
        <div className="grid md:grid-cols-3 gap-4 items-end">
          <div><label htmlFor="ranking-curso" className="block uppercase font-bold text-slate-500 text-xs tracking-wider mb-2">Curso</label>
            <select id="ranking-curso" value={curso} onChange={(e) => setCurso(e.target.value)} className={claseSelect}>{cursos.map((item) => <option key={item.id} value={item.id}>{item.id} {item.nombre}</option>)}</select></div>
          <div><label htmlFor="ranking-carrera" className="block uppercase font-bold text-slate-500 text-xs tracking-wider mb-2">Carrera del tutor</label>
            <select id="ranking-carrera" value={carrera} onChange={(e) => setCarrera(e.target.value)} className={claseSelect}><option value="">Todas las carreras</option>{carreras.map((item) => <option key={item}>{item}</option>)}</select></div>
          <button type="button" onClick={() => { setCurso('MA101'); setCarrera('') }} className={`${claseSecundario} py-3`}>Restablecer filtros</button>
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div><h2 className="text-xl font-bold text-indigo-800">{nombreCurso(cursos, curso)}</h2><p className="text-sm text-slate-500 mt-1" aria-live="polite">{ranking.length} {ranking.length === 1 ? 'tutor con calificaciones' : 'tutores con calificaciones'}{carrera ? ` · ${carrera}` : ''}</p></div>
        <span className="bg-violet-100 text-indigo-800 rounded-full px-3 py-2 text-xs font-bold">Orden: mayor promedio</span>
      </div>
      {!ranking.length ? <EstadoVacio titulo="No hay tutores con calificaciones para estos filtros" texto="Prueba otro curso o selecciona todas las carreras. Los tutores sin opiniones todavía no tienen una posición en el ranking." /> :
        <div className="bg-white border border-slate-300 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-175 text-left text-sm">
              <caption className="sr-only">Ranking de tutores para {nombreCurso(cursos, curso)}</caption>
              <thead className="bg-slate-100 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200"><tr>
                {['Posición', 'Tutor', 'Promedio del curso', 'Calificaciones', 'Acción'].map((titulo) => <th scope="col" className="px-5 py-4" key={titulo}>{titulo}</th>)}
              </tr></thead>
              <tbody className="divide-y divide-slate-100">
                {ranking.map((tutor, i) => <tr key={tutor.id} className="hover:bg-slate-50">
                  <td className="px-5 py-5"><span className={`inline-flex w-9 h-9 items-center justify-center rounded-full font-bold ${i === 0 ? 'bg-amber-100 text-amber-800' : 'bg-violet-100 text-indigo-800'}`}>{i + 1}</span></td>
                  <th scope="row" className="px-5 py-5 font-normal"><div className="flex items-center gap-3"><Avatar size="avatar-pequeno" /><div><span className="font-bold text-slate-900">{tutor.nombre}</span><p className="text-xs text-slate-500 mt-1">{tutor.carrera} · {tutor.ciclo}.º ciclo</p></div></div></th>
                  <td className="px-5 py-5"><strong className="block text-lg">{tutor.promedio.toFixed(1)}</strong><Estrellas valor={tutor.promedio} /></td>
                  <td className="px-5 py-5 text-slate-500">{tutor.total}</td>
                  <td className="px-5 py-5"><Link to={`/valoraciones-tutor/${tutor.id}`} className="text-indigo-800 text-sm font-bold hover:underline whitespace-nowrap">Ver opiniones</Link></td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>}
      <p className="text-xs text-slate-500 mt-4">Se consideran solo las calificaciones del curso seleccionado. En caso de empate, se prioriza la cantidad de opiniones y luego el nombre. Solo se muestran tutores activos con al menos una calificación en el curso.</p>
      <div className="mt-8 max-w-sm"><label htmlFor="consultar-tutor" className="block text-sm font-bold text-slate-700 mb-2">Consultar opiniones de un tutor</label>
        <select id="consultar-tutor" className={claseSelect} value="" onChange={(e) => e.target.value && navegar(`/valoraciones-tutor/${e.target.value}`)}><option value="">Selecciona un tutor</option>{tutores.filter((item) => item.activo).map((item) => <option value={item.id} key={item.id}>{item.nombre}</option>)}</select>
      </div>
    </VistaHU6>
  )
}
