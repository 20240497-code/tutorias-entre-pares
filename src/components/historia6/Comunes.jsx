// Base de componentes y clases de la HU-3/4; navegación adaptada a la demo HU-6.
import { Link } from 'react-router-dom'

export function Cabecera({ activo = 'mis-calificaciones' }) {
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
          {[
            ['/directorio', 'directorio', 'Directorio'],
            ['/mis-sesiones', 'mis-sesiones', 'Mis sesiones'],
            ['/mis-calificaciones', 'mis-calificaciones', 'Mis calificaciones'],
            ['/ranking-tutores', 'ranking', 'Ranking de tutores'],
            ['/valoraciones-tutor/sebastian', 'valoraciones', 'Opiniones del tutor'],
          ].map(([ruta, clave, texto]) => (
            <Link key={ruta} to={ruta} className={activo === clave ? enlaceActivo : enlaceBase}>{texto}</Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6 h-full">
        <div className="flex bg-primary-soft rounded-full p-1 text-sm font-semibold">
          <span className="px-4 py-1 rounded-full bg-primary text-white">Estudiante</span>
          <Link to="/tutor/perfil" className="px-4 py-1 rounded-full text-primary hover:bg-surface">Tutor</Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
            JM
          </span>
          <span className="text-[15px] text-text">
            Joaquín M. ▾
          </span>
        </div>
      </div>
    </header>
  )
}

export function Pie() {
  return (
    <footer className="h-21 px-14 shrink-0 flex items-center justify-between bg-ink text-[13px] text-white/75">
      <span>Programa de Tutorías entre Pares · Universidad de Lima</span>
      <div className="flex items-center gap-8">
        <Link to="/mis-calificaciones" className="hover:text-white">Mis calificaciones</Link>
        <span>Ayuda</span>
        <span>Términos del programa</span>
        <span>tutorias@ulima.edu.pe</span>
      </div>
    </footer>
  )
}

export function Marco({ children, activo = 'mis-calificaciones' }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Cabecera activo={activo} />
      <main className="w-full flex-1 px-14 py-7">
        {children}
      </main>
      <Pie />
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
