import { Link } from "react-router-dom";

// Pie común a todas las vistas (el del coordinador lo hace la Historia 7).
export default function Footer() {
  return (
    <footer className="px-14 py-6 flex items-center justify-between bg-surface border-t border-border text-[13px] text-text-muted">
      <p>Programa de Tutorías entre Pares · Universidad de Lima</p>

      <nav className="flex items-center gap-6">
        <Link to="/directorio" className="hover:text-primary">Directorio</Link>
        <a href="/#como-funciona" className="hover:text-primary">Cómo funciona</a>
        <a href="/#preguntas-frecuentes" className="hover:text-primary">Ayuda</a>
        <a href="mailto:tutorias@ulima.edu.pe" className="hover:text-primary">tutorias@ulima.edu.pe</a>
      </nav>
    </footer>
  );
}
