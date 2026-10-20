import { Link } from 'react-router-dom'
import { Cabecera as CabeceraSesion } from '../historias3y4/Comunes'
import { escalaInterfaz as escala } from '../compartidos/escalaInterfaz'

// La cabecera autenticada es la misma que en Directorio y Mis sesiones.
export function Cabecera({ activo = 'mis-calificaciones', publico = false }) {
  if (!publico) return <CabeceraSesion activo={activo} />
  return (
    <header className="flex min-h-19 shrink-0 flex-wrap items-center justify-between gap-4 border-b border-border bg-surface px-6 py-3 xl:h-19 xl:flex-nowrap xl:px-14 xl:py-0">
      <div className="flex flex-wrap items-center gap-10">
        <Link to="/" className="whitespace-nowrap text-xl font-bold text-primary">Tutorías entre pares</Link>
      </div>
      <nav aria-label="Navegación pública" className="flex flex-wrap items-center gap-8 text-[15px] text-text-muted">
        <Link to="/">Inicio</Link>
        <Link to="/directorio" className="font-semibold text-primary">Directorio</Link>
        <Link to="/#como-funciona">Cómo funciona</Link>
        <Link to="/login" className={escala.botonSecundario}>Iniciar sesión</Link>
        <Link to="/registro" className={escala.botonPrimario}>Crear cuenta</Link>
      </nav>
    </header>
  )
}

export function Pie({ publico = false }) {
  return (
    <footer className="flex min-h-21 shrink-0 flex-wrap items-center justify-between gap-4 bg-ink px-6 py-5 text-[13px] text-white/75 xl:h-21 xl:px-14 xl:py-0">
      <span>Programa de Tutorías entre Pares · Universidad de Lima</span>
      <nav aria-label="Enlaces del programa" className="flex flex-wrap gap-8">
        <Link to="/directorio">Directorio</Link>
        {publico ? <Link to="/#como-funciona">Cómo funciona</Link> : <Link to="/#preguntas-frecuentes">Ayuda</Link>}
        <a href="mailto:tutorias@ulima.edu.pe">tutorias@ulima.edu.pe</a>
      </nav>
    </footer>
  )
}

export function Marco({ children, activo = 'mis-calificaciones', publico = false }) {
  return <div className="flex min-h-screen flex-col bg-bg text-text">
    <Cabecera activo={activo} publico={publico} />
    <main className="relative w-full flex-1 px-6 py-7 xl:px-14">{children}</main>
    <Pie publico={publico} />
  </div>
}

export function Avatar({ grande = false, blanco = false, className = '' }) {
  return <span aria-hidden="true" className={`block shrink-0 rounded-full border border-border ${grande ? escala.avatarPerfil : escala.avatarLista} ${blanco ? 'bg-white' : 'bg-primary-soft'} ${className}`} />
}
