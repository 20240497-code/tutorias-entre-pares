import { escalaInterfaz as escala } from '../../components/compartidos/escalaInterfaz'
import { Link } from 'react-router-dom'
import PestanasDirectorio from '../../components/historia6/PestanasDirectorio'
import { Marco, Avatar, Etiquetas, PerfilSebastian, Calendario } from '../../components/historias3y4/Comunes'

const tutores = [
  { nombre: 'Ariana Flores Bustamante', carrera: 'Ing. de Sistemas', ciclo: '7.º', cursos: ['MA101', 'SI401'], promedio: '4.9', sesiones: 40, modalidad: 'remota' },
  { nombre: 'Camila Quispe Andrade', carrera: 'Ing. Industrial', ciclo: '8.º', cursos: ['MA101', 'ES210'], promedio: '4.8', sesiones: 31, modalidad: 'ambas' },
  { nombre: 'Sebastián Rojas Mendoza', carrera: 'Ing. Civil', ciclo: '9.º', cursos: ['MA101', 'FI202'], promedio: '4.7', sesiones: 28, modalidad: 'remota' },
  { nombre: 'Valeria Ccahuana Rivas', carrera: 'Contabilidad', ciclo: '6.º', cursos: ['CO105', 'MA101'], promedio: '4.6', sesiones: 19, modalidad: 'remota' },
  { nombre: 'Diego Huamán Salcedo', carrera: 'Economía', ciclo: '7.º', cursos: ['EC201', 'MA101'], promedio: '4.5', sesiones: 22, modalidad: 'remota' },
  { nombre: 'Lucía Paredes Ynga', carrera: 'Psicología', ciclo: '8.º', cursos: ['ES210', 'MA101'], promedio: '4.5', sesiones: 16, modalidad: 'remota' },
  { nombre: 'Mateo Chávez Ríos', carrera: 'Ing. de Sistemas', ciclo: '9.º', cursos: ['SI401', 'MA101'], promedio: '4.4', sesiones: 25, modalidad: 'remota' },
  { nombre: 'Fabiana Loayza Vera', carrera: 'Química', ciclo: '6.º', cursos: ['QU102', 'MA101'], promedio: '4.3', sesiones: 14, modalidad: 'remota' },
]

function Filtros() {
  const claseLabel = 'block uppercase font-bold text-slate-500 text-xs tracking-wider mt-5 mb-2'
  const claseSelect = 'w-full bg-white border border-slate-200 text-slate-900 rounded-lg px-3 py-3 text-sm'
  const claseDia = 'border border-slate-200 rounded-full px-3 py-2 text-sm text-slate-500'

  return (
    <aside className="bg-white border border-slate-300 rounded-lg shadow-sm p-5">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Filtros</h2>

      <label className={claseLabel} htmlFor="curso-filtro">Curso</label>
      <select id="curso-filtro" className={claseSelect} defaultValue="MA101 Cálculo I">
        <option>MA101 Cálculo I</option>
      </select>

      <label className={claseLabel} htmlFor="carrera-filtro">Carrera</label>
      <select id="carrera-filtro" className={claseSelect} defaultValue="Todas">
        <option>Todas</option>
      </select>

      <p className={claseLabel}>Modalidad</p>
      <div className="grid gap-2 text-sm">
        <label className="flex items-center gap-2"><input className="w-5 h-5 accent-indigo-800" type="checkbox" /> Presencial</label>
        <label className="flex items-center gap-2"><input className="w-5 h-5 accent-indigo-800" type="checkbox" defaultChecked /> Remota</label>
        <label className="flex items-center gap-2"><input className="w-5 h-5 accent-indigo-800" type="checkbox" /> Ambas</label>
      </div>

      <p className={claseLabel}>Día de atención</p>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="border border-violet-200 bg-violet-100 text-indigo-800 font-bold rounded-full px-3 py-2 text-sm">Lun</span>
        {['Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((dia) => <span className={claseDia} key={dia}>{dia}</span>)}
      </div>
      <button className="w-full bg-indigo-800 text-white rounded-lg px-5 py-3 font-bold text-sm" type="button">
        Aplicar filtros
      </button>
      <span className="block text-center text-sm font-bold text-indigo-800 mt-4">Limpiar todo</span>
    </aside>
  )
}

function TarjetaTutor({ tutor }) {
  return (
    <article className="flex flex-col items-center gap-2 min-w-0 bg-white border border-slate-300 rounded-lg shadow-sm py-5 px-3 text-center">
      <Avatar size="avatar-tarjeta" />
      <h2 className="text-sm font-bold text-slate-900">{tutor.nombre}</h2>
      <p className="text-sm text-slate-500">{tutor.carrera} · {tutor.ciclo} ciclo</p>
      <Etiquetas etiquetas={tutor.cursos} />
      <p className="text-sm text-slate-500"><b className="text-slate-900">{tutor.promedio}</b> · {tutor.sesiones} ses. · {tutor.modalidad}</p>
      <Link to="/tutor" className="w-full mt-auto inline-flex items-center justify-center bg-indigo-800 text-white font-bold text-sm rounded-lg px-3 py-2">
        Ver ficha
      </Link>
    </article>
  )
}

export function Directorio() {
  return (
    <Marco activo="directorio">
      <PestanasDirectorio />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Filtros />
        <section className="lg:col-span-3">
          <div className="flex flex-wrap justify-between items-start gap-5 mb-5">
            <div>
              <h1 className={`${escala.tituloPantalla} text-slate-900 mb-2`}>Directorio de tutores</h1>
              <p className={`${escala.cuerpo} text-slate-500`}>10 tutores encontrados para MA101 Cálculo I, modalidad remota, lunes</p>
            </div>
            <select className="bg-white border border-slate-200 text-sm rounded-lg px-4 py-3" defaultValue="Ordenar: mejor promedio" aria-label="Ordenar">
              <option>Ordenar: mejor promedio</option>
            </select>
          </div>
          <div className="flex flex-wrap gap-2 items-center mb-4">
            {['Curso: MA101 ×', 'Modalidad: remota ×', 'Día: lunes ×'].map((filtro) => (
              <span className="bg-violet-100 text-indigo-800 rounded-full px-3 py-2 text-sm font-bold" key={filtro}>{filtro}</span>
            ))}
            <span className="text-indigo-800 font-bold text-sm">Limpiar todo</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {tutores.map((tutor) => <TarjetaTutor tutor={tutor} key={tutor.nombre} />)}
          </div>
          <div className="flex flex-wrap justify-between items-center gap-3 pt-5 text-sm text-slate-500">
            <span>Mostrando 1 a 8 de 24 tutores</span>
            <div className="flex items-center gap-2">
              <span className="border border-slate-200 bg-white rounded-lg px-3 py-2">‹</span>
              <strong className="bg-indigo-800 text-white rounded-lg px-3 py-2">1</strong>
              <span className="border border-slate-200 bg-white rounded-lg px-3 py-2">2</span>
              <span className="border border-slate-200 bg-white rounded-lg px-3 py-2">3</span>
              <span className="border border-slate-200 bg-white rounded-lg px-3 py-2">›</span>
            </div>
          </div>
        </section>
      </div>
    </Marco>
  )
}

export function DetalleTutor() {
  return (
    <Marco activo="directorio">
      <div className="text-sm text-slate-500 mb-4">
        <Link to="/directorio" className="hover:text-indigo-800">Directorio</Link> › Sebastián Rojas Mendoza
      </div>
      <PerfilSebastian />
      <section className="bg-white border border-slate-300 rounded-lg shadow-sm p-6">
        <div className="flex flex-wrap justify-between items-start gap-5 mb-5">
          <h2 className="text-2xl font-bold text-indigo-800">Elige un bloque disponible</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-indigo-400 text-indigo-800 font-bold text-sm rounded-lg px-3 py-2">‹ Semana anterior</span>
            <strong className="text-sm">14/09/2026 — 19/09/2026</strong>
            <Link to="/tutor-sin-horarios" className="border border-indigo-400 text-indigo-800 font-bold text-sm rounded-lg px-3 py-2">Semana siguiente ›</Link>
          </div>
        </div>
        <Calendario />
        <div className="flex flex-wrap justify-between items-center gap-4 bg-violet-100 rounded-lg px-5 py-4 mt-5">
          <p className="text-sm"><b>Bloque elegido:</b> lunes 14/09/2026, 16:00 a 17:00 · modalidad remota</p>
          <Link to="/solicitar-sesion" className="bg-indigo-800 text-white text-sm font-bold rounded-lg px-5 py-3">Continuar con la solicitud</Link>
        </div>
      </section>
    </Marco>
  )
}

export function TutorSinHorarios() {
  return (
    <Marco activo="directorio">
      <div className="text-sm text-slate-500 mb-4">
        <Link to="/directorio" className="hover:text-indigo-800">Directorio</Link> › Sebastián Rojas Mendoza
      </div>
      <PerfilSebastian compacto />
      <section className="bg-white border border-slate-300 rounded-lg shadow-sm p-6">
        <div className="flex flex-wrap justify-between items-start gap-5 mb-5">
          <h2 className="text-2xl font-bold text-indigo-800">Disponibilidad de la semana</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/tutor" className="border border-indigo-400 text-indigo-800 text-sm font-bold rounded-lg px-3 py-2">‹ Semana anterior</Link>
            <strong className="text-sm">21/09/2026 — 26/09/2026</strong>
            <span className="border border-indigo-400 text-indigo-800 text-sm font-bold rounded-lg px-3 py-2">Semana siguiente ›</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center min-h-80 border border-dashed border-slate-200 rounded-xl p-8">
          <span className="flex items-center justify-center w-18 h-18 bg-violet-100 text-indigo-800 rounded-full text-4xl mb-4">−</span>
          <h3 className="text-2xl font-bold mb-3">No hay bloques libres esta semana</h3>
          <p className="text-slate-500 max-w-175 mb-5">
            Sebastián registró una excepción del 21 al 26 de setiembre. Puedes revisar la semana siguiente o ver otros tutores de Cálculo I.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-indigo-800 text-white text-sm font-bold rounded-lg px-5 py-3">Ver semana del 28/09/2026</span>
            <Link to="/directorio" className="border border-indigo-400 text-indigo-800 text-sm font-bold rounded-lg px-5 py-3">Ver 9 tutores de MA101</Link>
          </div>
        </div>
      </section>
    </Marco>
  )
}
