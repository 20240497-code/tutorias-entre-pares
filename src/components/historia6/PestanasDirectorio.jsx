import { NavLink } from 'react-router-dom'

export default function PestanasDirectorio() {
  const clase = 'pb-5 aria-[current=page]:border-b-[3px] aria-[current=page]:border-primary aria-[current=page]:font-semibold aria-[current=page]:text-primary'
  return <nav aria-label="Vistas del directorio" className="mb-[18px] flex gap-8 border-b border-border text-[15px] leading-[22px] text-text-muted">
    <NavLink to="/directorio" end className={clase}>Todos los tutores</NavLink>
    <NavLink to="/ranking-tutores" className={clase}>Ranking por curso</NavLink>
  </nav>
}
