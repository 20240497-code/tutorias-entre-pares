import { NavLink } from "react-router-dom";

// Pestañas compartidas por Disponibilidad semanal (2.3) y Excepciones por fecha (2.4).
// "end" evita que la primera pestaña quede activa también en /excepciones.
export default function PestanasDisponibilidad() {
  return (
    <div className="flex gap-8 border-b border-border mb-8 text-[15px]">
      <NavLink to="/tutor/disponibilidad" end className="pb-3 border-b-2 border-transparent text-text-muted hover:text-text aria-[current=page]:border-primary aria-[current=page]:text-primary aria-[current=page]:font-semibold">
        Disponibilidad recurrente
      </NavLink>
      <NavLink to="/tutor/disponibilidad/excepciones" className="pb-3 border-b-2 border-transparent text-text-muted hover:text-text aria-[current=page]:border-primary aria-[current=page]:text-primary aria-[current=page]:font-semibold">
        Excepciones por fecha
      </NavLink>
    </div>
  );
}
