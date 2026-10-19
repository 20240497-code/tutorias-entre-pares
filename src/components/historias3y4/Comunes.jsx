import { Link } from 'react-router-dom'

export function Cabecera({ rol = 'estudiante', activo = 'directorio' }) {
  const tutor = rol === 'tutor'
  const enlaceBase = 'py-2 text-sm text-slate-500 hover:text-indigo-800'
  const enlaceActivo = 'font-bold text-indigo-800 border-b-2 border-indigo-800'

  return (
    <header className="flex flex-wrap items-center gap-5 bg-white border-b border-slate-200 px-6 py-4 lg:px-10">
      <Link to="/directorio" className="text-xl font-extrabold text-indigo-800 whitespace-nowrap">
        Tutorías entre pares
      </Link>

      <nav className="flex flex-wrap items-center gap-5 text-sm" aria-label="Navegación principal">
        {tutor ? (
          <>
            <Link to="/tutor/perfil" className={enlaceBase}>Mi perfil de tutor</Link>
            <Link to="/tutor/cursos" className={enlaceBase}>Mis cursos</Link>
            <Link to="/tutor/disponibilidad" className={enlaceBase}>Disponibilidad</Link>
            <Link to="/solicitudes" className={`${enlaceBase} ${activo === 'solicitudes' ? enlaceActivo : ''}`}>
              Solicitudes
            </Link>
            <Link to="/historial-sesiones" className={`${enlaceBase} ${activo === 'mis-sesiones' ? enlaceActivo : ''}`}>
              Mis sesiones
            </Link>
          </>
        ) : (
          <>
            <Link to="/directorio" className={`${enlaceBase} ${activo === 'directorio' ? enlaceActivo : ''}`}>
              Directorio
            </Link>
            <Link to="/mis-sesiones" className={`${enlaceBase} ${activo === 'mis-sesiones' ? enlaceActivo : ''}`}>
              Mis sesiones
            </Link>
            <Link to="/mis-calificaciones" className={enlaceBase}>Mis calificaciones</Link>
          </>
        )}
      </nav>

      <div className="flex items-center gap-3 ml-auto">
        <div className="flex gap-1 bg-violet-100 rounded-full p-1 text-sm font-bold">
          <Link
            to="/directorio"
            className={`px-3 py-2 rounded-full ${!tutor ? 'bg-indigo-800 text-white' : 'text-indigo-800'}`}
          >
            Estudiante
          </Link>
          <Link
            to="/tutor/perfil"
            className={`px-3 py-2 rounded-full ${tutor ? 'bg-green-700 text-white' : 'text-indigo-800'}`}
          >
            Tutor
          </Link>
        </div>
        <span className="hidden sm:flex items-center justify-center w-10 h-10 bg-violet-100 rounded-full text-indigo-800 text-xs font-bold">
          {tutor ? 'SR' : 'JM'}
        </span>
        <span className="hidden xl:inline text-sm text-slate-500">
          {tutor ? 'Sebastián R.' : 'Joaquín M.'} ▾
        </span>
      </div>
    </header>
  )
}

export function Pie({ tutor = false }) {
  return (
    <footer className="flex flex-wrap justify-between gap-4 items-center min-h-18 bg-slate-900 px-6 py-5 lg:px-10 text-slate-300 text-sm">
      <span>Programa de Tutorías entre Pares · Universidad de Lima</span>
      <div className="flex flex-wrap items-center gap-6">
        {tutor ? <span>Guía del tutor</span> : <Link to="/directorio" className="hover:text-white">Directorio</Link>}
        <span>Ayuda</span>
        {!tutor && <span>Términos del programa</span>}
        <span>tutorias@ulima.edu.pe</span>
      </div>
    </footer>
  )
}

export function Marco({ children, rol = 'estudiante', activo = 'directorio', className = '' }) {
  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 ${className === 'marco-modal-fondo' ? 'blur-sm pointer-events-none' : className}`}>
      <Cabecera rol={rol} activo={activo} />
      <main className="w-full flex-1 px-6 py-7 lg:px-10">
        {children}
      </main>
      <Pie tutor={rol === 'tutor'} />
    </div>
  )
}

export function Avatar({ size = '' }) {
  const tamanos = {
    'avatar-grande': 'w-28 h-28',
    'avatar-tarjeta': 'w-20 h-20 mx-auto mb-3',
    'avatar-pequeno': 'w-12 h-12',
  }
  return (
    <span className={`inline-block shrink-0 rounded-full bg-violet-100 ${tamanos[size] || 'w-14 h-14'}`} aria-hidden="true" />
  )
}

export function Etiquetas({ etiquetas = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {etiquetas.map((etiqueta) => (
        <span key={etiqueta} className="bg-violet-100 text-indigo-800 rounded-full px-3 py-1 text-xs font-bold">
          {etiqueta}
        </span>
      ))}
    </div>
  )
}

export function PerfilSebastian({ compacto = false }) {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 mb-5 p-6 bg-white border border-slate-300 rounded-lg shadow-sm">
      <div className="flex items-center gap-5">
        <Avatar size="avatar-grande" />
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Sebastián Rojas Mendoza</h1>
          <p className="text-sm text-slate-500 mb-3">
            Ingeniería Civil · 9.º ciclo {compacto ? '· MA101 Cálculo I · FI202 Física II · 4.7' : '· Sede Monterrico · Modalidad remota'}
          </p>
          {!compacto && <Etiquetas etiquetas={['MA101 Cálculo I', 'FI202 Física II']} />}
        </div>
      </div>
      {compacto ? (
        <span className="border border-indigo-400 text-indigo-800 rounded-lg px-5 py-3 text-sm font-bold">
          Ver reseñas
        </span>
      ) : (
        <div className="text-right">
          <strong className="block text-4xl text-slate-900">4.7</strong>
          <span className="text-sm text-slate-500">28 sesiones realizadas</span>
        </div>
      )}
    </section>
  )
}

export const dias = ['Lun 14', 'Mar 15', 'Mié 16', 'Jue 17', 'Vie 18', 'Sáb 19']

const bloqueEstilos = {
  libre: 'bg-violet-100 border-violet-300 text-indigo-800 font-semibold',
  ocupado: 'bg-slate-200 border-slate-200 text-slate-500',
  elegido: 'bg-indigo-800 border-indigo-800 text-white font-semibold',
  propuesto: 'bg-indigo-800 border-indigo-800 text-white font-semibold',
  solicitado: 'bg-amber-50 border-amber-500 text-amber-700 font-semibold',
  vacio: 'bg-slate-50 border-slate-200',
}

export function Calendario({ tipo = 'estudiante' }) {
  const bloquesEstudiante = [
    ['libre', '', 'libre', '', 'ocupado', ''],
    ['ocupado', 'libre', '', 'libre', '', 'libre'],
    ['elegido', '', 'libre', '', 'libre', ''],
    ['libre', 'ocupado', '', '', 'libre', ''],
  ]
  const bloquesTutor = [
    ['libre', 'libre', '', 'ocupado', 'libre', ''],
    ['ocupado', 'libre', 'libre', '', 'libre', 'libre'],
    ['solicitado', 'propuesto', 'libre', '', 'libre', ''],
    ['libre', 'libre', '', '', 'ocupado', ''],
    ['libre', '', 'libre', 'libre', '', ''],
  ]
  const filas = tipo === 'tutor' ? bloquesTutor : bloquesEstudiante
  const horas = tipo === 'tutor' ? ['08:00', '09:00', '16:00', '17:00', '18:00'] : ['08:00', '09:00', '16:00', '17:00']

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-7 gap-1 min-w-175">
        <span />
        {dias.map((dia) => (
          <strong key={dia} className="text-center text-sm text-slate-500 pb-2">{dia}</strong>
        ))}
        {filas.map((fila, indice) => (
          <div className="contents" key={horas[indice]}>
            <span className="flex items-center text-sm text-slate-500">{horas[indice]}</span>
            {fila.map((estado, dia) => (
              <span
                key={`${horas[indice]}-${dia}`}
                className={`flex items-center justify-center h-11 rounded-md border text-sm ${bloqueEstilos[estado || 'vacio']}`}
              >
                {tipo === 'tutor'
                  ? (estado === 'solicitado' ? 'Solicitado' : estado === 'propuesto' ? 'Propuesto' : '')
                  : (estado ? estado.charAt(0).toUpperCase() + estado.slice(1) : '')}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
