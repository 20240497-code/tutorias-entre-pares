import { Link } from "react-router-dom";

// Pie común a todas las vistas (el del coordinador lo hace la Historia 7).
// Mismo diseño en todas las historias: oscuro, 84 px de alto, 56 px de margen lateral.
export default function Footer({ cuenta = false }) {
  return (
    <footer className="h-21 px-14 shrink-0 flex items-center justify-between bg-ink text-[13px] text-white/75">
      <p>Programa de Tutorías entre Pares · Universidad de Lima</p>

      <nav className="flex items-center gap-8">
        {cuenta ? <span>Términos del programa</span> : <>
          <Link to="/directorio" className="hover:text-white">Directorio</Link>
          <a href="/#como-funciona" className="hover:text-white">Cómo funciona</a>
        </>}
        <a href="/#preguntas-frecuentes" className="hover:text-white">Ayuda</a>
        <a href="mailto:tutorias@ulima.edu.pe" className="hover:text-white">tutorias@ulima.edu.pe</a>
      </nav>
    </footer>
  );
}
