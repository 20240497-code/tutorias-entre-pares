import { Link, useLocation } from 'react-router-dom';

export function Header({ rol, setRol }) {
  const ubicacion = useLocation();

  // Mismo diseño de cabecera que el resto del proyecto (76 px, 56 px de margen, activo subrayado)
  const enlaceBase = 'h-full flex items-center border-b-2 border-transparent text-[15px] text-text-muted hover:text-text';
  const obtenerLink = (path) =>
    ubicacion.pathname === path
      ? 'h-full flex items-center border-b-2 border-primary text-[15px] text-primary font-semibold'
      : enlaceBase;

  return (
    <header className="h-19 px-14 shrink-0 flex items-center justify-between bg-surface border-b border-border sticky top-0 z-10">
      <div className="flex items-center gap-10 h-full">
        <Link to={rol === 'tutor' ? '/tutor/perfil' : '/directorio'} className="text-xl font-bold text-primary whitespace-nowrap">
          Tutorías entre pares
        </Link>

        {rol === 'tutor' ? (
          <nav className="flex items-center gap-8 h-full">
            <Link to="/tutor/perfil" className={obtenerLink('/resumen-horas')}>Mi perfil de tutor</Link>
            <Link to="/tutor/cursos" className={enlaceBase}>Mis cursos</Link>
            <Link to="/tutor/disponibilidad" className={enlaceBase}>Disponibilidad</Link>
            <Link to="/solicitudes" className={enlaceBase}>Solicitudes</Link>
            <Link to="/historial-sesiones" className={obtenerLink('/historial-sesiones')}>Mis sesiones</Link>
          </nav>
        ) : (
          <nav className="flex items-center gap-8 h-full">
            <Link to="/directorio" className={enlaceBase}>Directorio</Link>
            <Link to="/mis-sesiones" className={obtenerLink('/historial-sesiones')}>Mis sesiones</Link>
            <Link to="/mis-calificaciones" className={enlaceBase}>Mis calificaciones</Link>
          </nav>
        )}
      </div>

      <div className="flex items-center gap-6 h-full">
        <div className="flex bg-primary-soft rounded-full p-1 text-sm font-semibold">
          <button
            type="button"
            onClick={() => setRol && setRol('estudiante')}
            className={`px-4 py-1 rounded-full transition-all ${
              rol === 'estudiante' ? 'bg-primary text-white' : 'text-primary hover:bg-surface'
            }`}
          >
            Estudiante
          </button>
          <button
            type="button"
            onClick={() => setRol && setRol('tutor')}
            className={`px-4 py-1 rounded-full transition-all ${
              rol === 'tutor' ? 'bg-primary text-white' : 'text-primary hover:bg-surface'
            }`}
          >
            Tutor
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
            SR
          </span>
          <span className="text-[15px] text-text">Sebastián R. ▾</span>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="h-21 px-14 shrink-0 flex items-center justify-between bg-ink text-[13px] text-white/75 mt-auto">
      <p>Programa de Tutorías entre Pares · Universidad de Lima</p>
      <div className="flex items-center gap-8">
        <a href="#" className="hover:text-white">Guía del tutor</a>
        <a href="/#preguntas-frecuentes" className="hover:text-white">Ayuda</a>
        <a href="mailto:tutorias@ulima.edu.pe" className="hover:text-white">tutorias@ulima.edu.pe</a>
      </div>
    </footer>
  );
}


export default function Diseño({ children, rol, setRol }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800 font-sans antialiased">
      <Header rol={rol} setRol={setRol} />
      <main className="flex-1 px-14 py-8 w-full">{children}</main>
      <Footer />
    </div>
  );
}

export function Estado({ tipo }) {
  const estilos = {
    Realizada: 'bg-emerald-50 text-emerald-700 border-emerald-300',
    'No asistió': 'bg-rose-50 text-rose-700 border-rose-300',
    Cancelada: 'bg-slate-100 text-slate-500 border-slate-200',
    Programada: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  };

  return (
    <span className={`px-3 py-0.5 text-xs font-semibold rounded-full border ${estilos[tipo] || 'bg-slate-100 text-slate-600'}`}>
      {tipo}
    </span>
  );
}


export function Ruta({ enlaces }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
      {enlaces.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          {item.path ? (
            <Link to={item.path} className="hover:underline hover:text-indigo-900 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-500 font-medium">{item.label}</span>
          )}
          {index < enlaces.length - 1 && <span className="text-slate-300">&gt;</span>}
        </span>
      ))}
    </div>
  );
}


export function TarjetaMetrica({ titulo, valor, subtexto, destacado = false }) {
  return (
    <div className={`border rounded-xl p-5 shadow-sm transition-all ${
      destacado ? 'bg-indigo-50/80 border-indigo-100' : 'bg-white border-slate-200'
    }`}>
      <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
        destacado ? 'text-indigo-900' : 'text-slate-400'
      }`}>
        {titulo}
      </span>
      <span className={`text-3xl font-extrabold ${destacado ? 'text-indigo-950' : 'text-slate-900'}`}>
        {valor}
      </span>
      {subtexto && <span className="text-xs text-slate-500 block mt-1">{subtexto}</span>}
    </div>
  );
}


export function MensajeAlerta({ titulo = 'Mensaje', texto }) {
  return (
    <div className="border-t border-slate-200 pt-6 mt-6">
      <h2 className="text-xs font-bold text-rose-900 mb-3">{titulo}</h2>
      <div className="max-w-[540px] bg-rose-50/80 border-2 border-rose-700/70 rounded-xl p-4 shadow-sm">
        <p className="text-xs md:text-sm font-semibold text-rose-800 leading-relaxed">
          {texto}
        </p>
      </div>
    </div>
  );
}

export function AccesoRestringido({ mensaje, botonTexto = 'Volver a Mis sesiones', ruta = '/historial-sesiones' }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-sm max-w-xl mx-auto my-12">
      <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
        🔒
      </div>
      <h2 className="text-lg font-bold text-slate-900 mb-2">Acceso restringido</h2>
      <p className="text-xs text-slate-500 mb-6">{mensaje}</p>
      <Link
        to={ruta}
        className="bg-indigo-900 text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-950 inline-block transition-colors"
      >
        {botonTexto}
      </Link>
    </div>
  );
}


export function GraficoBarras({ meses }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-sm font-bold text-slate-900 mb-8">Sesiones cerradas por mes</h2>
      <div className="flex justify-around items-end h-40 pt-6 px-12 border-b border-slate-100">
        {meses.map((bar, i) => (
          <div key={i} className="flex flex-col items-center group w-24">
            <span className="text-xs font-bold text-slate-700 mb-2">{bar.valor}</span>
            <div
              className={`w-full rounded-t-md transition-all ${bar.altura} ${
                bar.activo ? 'bg-indigo-900' : 'bg-indigo-100/70 hover:bg-indigo-200'
              }`}
            ></div>
            <span className="text-xs text-slate-500 mt-3">{bar.mes}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
