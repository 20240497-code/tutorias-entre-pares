import { Link, useLocation } from 'react-router-dom';

export function Header({ rol, setRol }) {
  const ubicacion = useLocation();

  const obtenerLink = (path) =>
    `text-xs font-medium transition-colors ${
      ubicacion.pathname === path
        ? 'text-indigo-900 font-bold border-b-2 border-indigo-900 pb-4'
        : 'text-slate-500 hover:text-slate-800'
    }`;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to={rol === 'tutor' ? '/tutor/perfil' : '/directorio'} className="text-indigo-900 font-bold text-sm tracking-tight">
            Tutorías entre pares
          </Link>

          {rol === 'tutor' ? (
            <nav className="hidden md:flex space-x-6 items-center">
              <Link to="/tutor/perfil" className={obtenerLink('/resumen-horas')}>Mi perfil de tutor</Link>
              <Link to="/tutor/cursos" className="text-xs text-slate-500 hover:text-slate-800">Mis cursos</Link>
              <Link to="/tutor/disponibilidad" className="text-xs text-slate-500 hover:text-slate-800">Disponibilidad</Link>
              <Link to="/solicitudes" className="text-xs text-slate-500 hover:text-slate-800">Solicitudes</Link>
              <Link to="/historial-sesiones" className={obtenerLink('/historial-sesiones')}>Mis sesiones</Link>
            </nav>
          ) : (
            <nav className="hidden md:flex space-x-6 items-center">
              <Link to="/directorio" className="text-xs text-slate-500 hover:text-slate-800">Directorio</Link>
              <Link to="/mis-sesiones" className={obtenerLink('/historial-sesiones')}>Mis sesiones</Link>
              <Link to="/mis-calificaciones" className="text-xs text-slate-500 hover:text-slate-800">Mis calificaciones</Link>
            </nav>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex rounded-full bg-slate-100 p-0.5 text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setRol && setRol('estudiante')}
              className={`px-3 py-1 rounded-full transition-all ${
                rol === 'estudiante' ? 'bg-indigo-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Estudiante
            </button>
            <button
              type="button"
              onClick={() => setRol && setRol('tutor')}
              className={`px-3 py-1 rounded-full transition-all ${
                rol === 'tutor' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Tutor
            </button>
          </div>
          <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-900 flex items-center justify-center font-bold text-xs border border-indigo-100">
            SR
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1B192A] text-slate-400 py-6 px-6 text-xs mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Programa de Tutorías entre Pares · Universidad de Lima</p>
        <div className="flex space-x-6 text-[11px]">
          <a href="#" className="hover:text-white">Guía del tutor</a>
          <a href="/#preguntas-frecuentes" className="hover:text-white">Ayuda</a>
          <a href="mailto:tutorias@ulima.edu.pe" className="hover:text-white">tutorias@ulima.edu.pe</a>
        </div>
      </div>
    </footer>
  );
}


export default function Diseño({ children, rol, setRol }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800 font-sans antialiased">
      <Header rol={rol} setRol={setRol} />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">{children}</main>
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
