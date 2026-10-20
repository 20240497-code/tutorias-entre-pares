import { escalaInterfaz as escala } from '../compartidos/escalaInterfaz'
import { Link } from 'react-router-dom'

export function Cabecera({ rol = 'estudiante', activo = 'directorio' }) {
  const tutor = rol === 'tutor'
  // Mismo diseño de cabecera que el resto del proyecto (76 px, 56 px de margen, activo subrayado)
  const enlaceBase = 'h-full flex items-center border-b-2 border-transparent text-[15px] text-text-muted hover:text-text'
  const enlaceActivo = 'h-full flex items-center border-b-2 border-primary text-[15px] text-primary font-semibold'

  return (
    <header className="h-19 px-14 shrink-0 flex items-center justify-between bg-surface border-b border-border">
      <div className="flex items-center gap-10 h-full">
        <Link to="/directorio" className="text-xl font-bold text-primary whitespace-nowrap">
          Tutorías entre pares
        </Link>

        <nav className="flex items-center gap-8 h-full" aria-label="Navegación principal">
          {tutor ? (
            <>
              <Link to="/tutor/perfil" className={enlaceBase}>Mi perfil de tutor</Link>
              <Link to="/tutor/cursos" className={enlaceBase}>Mis cursos</Link>
              <Link to="/tutor/disponibilidad" className={enlaceBase}>Disponibilidad</Link>
              <Link to="/solicitudes" className={activo === 'solicitudes' ? enlaceActivo : enlaceBase}>
                Solicitudes
              </Link>
              <Link to="/historial-sesiones" className={activo === 'mis-sesiones' ? enlaceActivo : enlaceBase}>
                Mis sesiones
              </Link>
            </>
          ) : (
            <>
              <Link to="/directorio" className={activo === 'directorio' ? enlaceActivo : enlaceBase}>
                Directorio
              </Link>
              <Link to="/mis-sesiones" className={activo === 'mis-sesiones' ? enlaceActivo : enlaceBase}>
                Mis sesiones
              </Link>
              <Link to="/mis-calificaciones" className={activo === 'mis-calificaciones' ? enlaceActivo : enlaceBase}>Mis calificaciones</Link>
            </>
          )}
        </nav>
      </div>

      <div className="flex items-center gap-6 h-full">
        <div className="flex bg-primary-soft rounded-full p-1 text-sm font-semibold">
          <Link
            to="/directorio"
            className={`px-4 py-1 rounded-full ${!tutor ? 'bg-primary text-white' : 'text-primary hover:bg-surface'}`}
          >
            Estudiante
          </Link>
          <Link
            to="/tutor/perfil"
            className={`px-4 py-1 rounded-full ${tutor ? 'bg-primary text-white' : 'text-primary hover:bg-surface'}`}
          >
            Tutor
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
            {tutor ? 'SR' : 'JM'}
          </span>
          <span className="text-[15px] text-text">
            {tutor ? 'Sebastián R.' : 'Joaquín M.'} ▾
          </span>
        </div>
      </div>
    </header>
  )
}

export function Pie({ tutor = false }) {
  return (
    <footer className="h-21 px-14 shrink-0 flex items-center justify-between bg-ink text-[13px] text-white/75">
      <span>Programa de Tutorías entre Pares · Universidad de Lima</span>
      <div className="flex items-center gap-8">
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
      <main className="w-full flex-1 px-14 py-7">
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
    <span className={`inline-block shrink-0 rounded-full bg-violet-100 ${tamanos[size] || escala.avatarLista}`} aria-hidden="true" />
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
        <Link to="/valoraciones-tutor/sebastian" className="border border-indigo-400 text-indigo-800 rounded-lg px-5 py-3 text-sm font-bold">
          Ver reseñas
        </Link>
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
