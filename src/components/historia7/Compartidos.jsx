import { Link } from 'react-router-dom';

export function Cabecera({ children }) {
  return (
    <header className="flex h-[76px] shrink-0 items-center gap-5 bg-dark px-14 text-white">
      <Link to="/coordinador/tutores" className="text-xl font-bold whitespace-nowrap">Tutorías entre pares</Link>
      <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold tracking-[1.5px] text-ink whitespace-nowrap">PANEL DEL COORDINADOR</span>
      <nav className="ml-5 flex h-full items-center gap-7 text-[15px]">{children}</nav>
      <div className="ml-auto flex items-center gap-3 whitespace-nowrap text-[13px]">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-soft font-bold text-primary">RE</span>
        Rosa Enríquez · coordinadora ▾
      </div>
    </header>
  );
}

export function Pie() {
  return (
    <footer className="mt-auto flex h-[84px] shrink-0 items-center justify-between bg-ink px-14 text-[13px] text-white/75">
      <span>Panel del coordinador · Programa de Tutorías entre Pares · Universidad de Lima</span>
      <div className="flex gap-8"><span>Reglamento del programa</span><span>Soporte interno</span><span>tutorias@ulima.edu.pe</span></div>
    </footer>
  );
}
