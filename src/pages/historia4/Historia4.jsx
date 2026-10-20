import { Link } from 'react-router-dom'
import { Marco, Avatar, Calendario, PerfilSebastian } from '../../components/historias3y4/Comunes'

const proximas = [
  { nombre: 'Sebastián Rojas Mendoza', curso: 'MA101 Cálculo I', tema: 'Ejercicios de integrales por partes', modalidad: 'remota', fecha: '14/09/2026', horario: '16:00 a 17:00', estado: 'Programada', enlace: '/detalle-sesion' },
  { nombre: 'Ariana Flores Bustamante', curso: 'SI401 Programación Web', tema: 'Dudas sobre el proyecto final', modalidad: 'presencial', fecha: '16/09/2026', horario: '10:00 a 11:00', estado: 'Horario propuesto', enlace: null },
  { nombre: 'Valeria Ccahuana Rivas', curso: 'CO105 Contabilidad General', tema: 'Preparación para el examen parcial', modalidad: 'remota', fecha: '18/09/2026', horario: '19:00 a 20:00', estado: 'Programada', enlace: '/detalle-sesion' },
]

const anteriores = [
  { nombre: 'Camila Quispe Andrade', curso: 'ES210 Estadística Aplicada', tema: 'Repaso para la práctica calificada 2', fecha: '05/09/2026', horario: '17:00 a 18:00', estado: 'Realizada', extra: 'Calificar' },
  { nombre: 'Diego Huamán Salcedo', curso: 'EC201 Microeconomía', tema: 'Preparación para el examen parcial', fecha: '02/09/2026', horario: '08:00 a 09:00', estado: 'Realizada', extra: 'Calificada 5.0' },
  { nombre: 'Mateo Chávez Ríos', curso: 'SI401 Programación Web', tema: 'Dudas sobre el proyecto final', fecha: '28/08/2026', horario: '16:00 a 17:00', estado: 'No asistió', extra: '—' },
  { nombre: 'Lucía Paredes Ynga', curso: 'ES210 Estadística Aplicada', tema: 'Repaso de conceptos', fecha: '22/08/2026', horario: '14:00 a 15:00', estado: 'Realizada', extra: 'Calificada 4.5' },
]

const recibidas = [
  { nombre: 'Joaquín Medina Talledo', detalle: 'Ing. Industrial · 5.º ciclo · solicitó hace 6 horas', fecha: 'Lun 14/09/2026 · 16:00 a 17:00', curso: 'MA101 Cálculo I · remota', tema: 'Ejercicios de integrales por partes' },
  { nombre: 'Antonella Vargas Ludeña', detalle: 'Administración · 4.º ciclo · solicitó hace 1 día', fecha: 'Mié 16/09/2026 · 09:00 a 10:00', curso: 'FI202 Física II · presencial', tema: 'Repaso para la práctica calificada 2' },
  { nombre: 'Gonzalo Ramírez Ayala', detalle: 'Economía · 6.º ciclo · solicitó hace 2 días', fecha: 'Vie 18/09/2026 · 17:00 a 18:00', curso: 'ES210 Estadística · remota', tema: 'Dudas sobre el proyecto final' },
]

const eventos = [
  { estado: 'Solicitud enviada', fecha: '10/09/2026 · 19:42 · Joaquín Medina', color: 'bg-blue-700' },
  { estado: 'Horario alternativo propuesto', fecha: '11/09/2026 · 08:15 · Sebastián Rojas', color: 'bg-amber-700' },
  { estado: 'Propuesta aceptada', fecha: '11/09/2026 · 12:03 · Joaquín Medina', color: 'bg-green-700' },
  { estado: 'Sesión programada', fecha: '11/09/2026 · 12:03 · sistema', color: 'bg-blue-700' },
]

function Estado({ texto }) {
  const color = {
    'Programada': 'bg-blue-50 text-blue-700 border-blue-300',
    'Horario propuesto': 'bg-amber-50 text-amber-700 border-amber-400',
    'Realizada': 'bg-green-50 text-green-700 border-green-500',
    'No asistió': 'bg-red-50 text-red-700 border-red-400',
  }
  return (
    <span className={`inline-flex items-center justify-center border rounded-full px-3 py-2 text-sm font-bold whitespace-nowrap ${color[texto] || 'bg-slate-100 text-slate-500 border-slate-200'}`}>
      {texto}
    </span>
  )
}

export function SolicitarSesion() {
  return (
    <div className="relative min-h-screen">
      <Marco activo="directorio" className="marco-modal-fondo">
        <p className="text-sm text-slate-500 mb-4"><Link to="/directorio">Directorio</Link> › Sebastián Rojas Mendoza</p>
        <PerfilSebastian compacto />
        <section className="bg-white border border-slate-300 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Elige un bloque disponible</h2>
          <Calendario />
        </section>
      </Marco>
      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 p-4" role="presentation">
        <section className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-6 md:p-8" role="dialog" aria-modal="true" aria-labelledby="solicitar-titulo">
          <div className="flex items-start justify-between gap-3 mb-5">
            <h1 id="solicitar-titulo" className="text-3xl font-extrabold">Solicitar sesión</h1>
            <Link to="/tutor" aria-label="Cerrar modal" className="text-4xl leading-none text-slate-500">×</Link>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
            <Avatar />
            <div>
              <strong>Sebastián Rojas Mendoza</strong>
              <p className="text-sm text-slate-500">Lunes 14/09/2026 · 16:00 a 17:00 · remota</p>
            </div>
          </div>
          <label htmlFor="curso-solicitud" className="block text-xs uppercase tracking-wider font-bold text-slate-500 mt-5 mb-2">Curso</label>
          <select id="curso-solicitud" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm" defaultValue="MA101 Cálculo I">
            <option>MA101 Cálculo I</option>
          </select>
          <label htmlFor="tema-solicitud" className="block text-xs uppercase tracking-wider font-bold text-slate-500 mt-5 mb-2">Tema a trabajar</label>
          <textarea id="tema-solicitud" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm resize-none" defaultValue="Ejercicios de integrales por partes" rows="4" />
          <p className="text-sm text-slate-500 mt-2">Cuéntale al tutor qué necesitas reforzar. Máximo 200 caracteres.</p>
          <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mt-5 mb-2">Modalidad</p>
          <div className="flex gap-2">
            <span className="bg-indigo-800 text-white text-sm font-bold rounded-lg px-5 py-3">Remota</span>
            <span className="border border-indigo-400 text-indigo-800 text-sm font-bold rounded-lg px-5 py-3">Presencial</span>
          </div>
          <div className="flex items-center justify-end gap-3 mt-7">
            <Link to="/tutor" className="text-indigo-800 text-sm font-bold px-5 py-3">Cancelar</Link>
            <Link to="/mis-sesiones" className="bg-indigo-800 text-white text-sm font-bold rounded-lg px-5 py-3">Enviar solicitud</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export function MisSesiones() {
  return (
    <Marco activo="mis-sesiones">
      <div className="flex flex-wrap justify-between items-start gap-5 mb-5">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Mis sesiones</h1>
          <p className="text-slate-500">3 próximas · 5 en el historial</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <select className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm" defaultValue="Estado: todos" aria-label="Filtrar por estado">
            <option>Estado: todos</option>
          </select>
          <span className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm">01/09/2026 — 30/09/2026</span>
        </div>
      </div>

      <h2 className="text-xl font-bold text-indigo-800 mt-5 mb-3">Próximas</h2>
      <div className="grid gap-3">
        {proximas.map((sesion) => (
          <article key={sesion.nombre} className="flex flex-wrap items-center gap-5 bg-white border border-slate-300 rounded-lg shadow-sm px-5 py-4">
            <Avatar />
            <div className="flex-1 min-w-40">
              <h3 className="text-lg font-bold mb-1">{sesion.nombre}</h3>
              <p className="text-sm text-slate-500">{sesion.curso} · «{sesion.tema}» · {sesion.modalidad}</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-sm">
              <b>{sesion.fecha}</b>
              <span className="text-slate-500">{sesion.horario}</span>
            </div>
            <Estado texto={sesion.estado} />
            {sesion.enlace ? (
              <Link to={sesion.enlace} className="border border-indigo-400 text-indigo-800 text-sm font-bold rounded-lg px-5 py-3">Ver detalle</Link>
            ) : (
              <span className="bg-indigo-800 text-white text-sm font-bold rounded-lg px-5 py-3">Revisar propuesta</span>
            )}
          </article>
        ))}
      </div>

      <h2 className="text-xl font-bold text-indigo-800 mt-7 mb-3">Historial</h2>
      <div className="grid gap-3">
        {anteriores.map((sesion) => (
          <article key={sesion.nombre} className="flex flex-wrap items-center gap-4 bg-white border border-slate-300 rounded-lg px-5 py-3">
            <Avatar size="avatar-pequeno" />
            <div className="flex-1 min-w-40">
              <h3 className="text-base font-bold mb-1">{sesion.nombre}</h3>
              <p className="text-sm text-slate-500">{sesion.curso} · «{sesion.tema}»</p>
            </div>
            <span className="text-sm text-slate-500">{sesion.fecha} · {sesion.horario}</span>
            <Estado texto={sesion.estado} />
            {sesion.extra === 'Calificar' ? (
              <Link to="/mis-calificaciones?vista=pendientes" className="bg-amber-400 text-slate-900 text-sm font-bold rounded-lg px-4 py-2">Calificar</Link>
            ) : (
              <span className="text-sm text-slate-500">{sesion.extra}</span>
            )}
          </article>
        ))}
      </div>
    </Marco>
  )
}

export function Solicitudes() {
  return (
    <Marco rol="tutor" activo="solicitudes">
      <div className="flex flex-wrap justify-between items-start gap-5 mb-5">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Solicitudes recibidas</h1>
          <p className="text-slate-500">Responde en menos de 48 horas para mantener tu ficha publicada.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center min-w-28 bg-amber-50 text-amber-700 border border-amber-400 rounded-xl px-4 py-3">
            <b className="text-3xl">3</b><span className="text-sm">pendientes</span>
          </div>
          <div className="flex flex-col items-center min-w-28 bg-violet-100 text-indigo-800 border border-violet-100 rounded-xl px-4 py-3">
            <b className="text-3xl">5</b><span className="text-sm">aceptadas</span>
          </div>
          <div className="flex flex-col items-center min-w-28 bg-slate-100 text-slate-500 border border-slate-200 rounded-xl px-4 py-3">
            <b className="text-3xl">1</b><span className="text-sm">rechazada</span>
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        {recibidas.map((solicitud) => (
          <article key={solicitud.nombre} className="bg-white border border-slate-300 rounded-lg shadow-sm px-5 py-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Avatar />
                <div>
                  <h3 className="text-lg font-bold mb-1">{solicitud.nombre}</h3>
                  <p className="text-sm text-slate-500">{solicitud.detalle}</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <b>{solicitud.fecha}</b>
                <p className="text-slate-500">{solicitud.curso}</p>
              </div>
            </div>
            <p className="mt-4 mb-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm">«{solicitud.tema}»</p>
            <div className="flex flex-wrap justify-end gap-3">
              <span className="text-red-700 text-sm font-bold rounded-lg px-5 py-3">Rechazar</span>
              <Link to="/proponer-horario" className="border border-indigo-400 text-indigo-800 text-sm font-bold rounded-lg px-5 py-3">Proponer otro horario</Link>
              <span className="bg-indigo-800 text-white text-sm font-bold rounded-lg px-5 py-3">Aceptar</span>
            </div>
          </article>
        ))}
      </div>
    </Marco>
  )
}

export function ProponerHorario() {
  return (
    <main className="min-h-screen bg-violet-100 flex items-center justify-center p-4 lg:p-8">
      <section className="w-full max-w-6xl bg-white border border-slate-300 rounded-xl shadow-sm p-5 lg:p-8" role="dialog" aria-labelledby="titulo-propuesta">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 id="titulo-propuesta" className="text-3xl font-extrabold mb-2">Proponer otro horario</h1>
            <p className="text-slate-500">Joaquín Medina Talledo · MA101 Cálculo I</p>
          </div>
          <Link to="/solicitudes" aria-label="Volver a solicitudes" className="text-4xl leading-none text-slate-500">×</Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-7">
          <div>
            <h2 className="text-sm uppercase tracking-widest font-extrabold text-slate-500 mb-3">Bloque solicitado</h2>
            <div className="flex flex-col gap-2 bg-amber-50 border border-amber-600 text-amber-700 rounded-xl p-5 mb-5">
              <strong className="text-xl">Lunes 14/09/2026</strong>
              <span className="text-lg">16:00 a 17:00 · remota</span>
              <p className="text-sm text-slate-500 mt-2">Tema: «Ejercicios de integrales por partes»</p>
            </div>
            <label htmlFor="mensaje-horario" className="block text-sm uppercase tracking-widest font-extrabold text-slate-500 mb-3">
              Mensaje al estudiante (opcional)
            </label>
            <textarea
              id="mensaje-horario"
              rows="4"
              className="w-full min-h-34 bg-white border border-slate-200 rounded-lg px-4 py-3 text-lg resize-none"
              defaultValue={'Ese día tengo laboratorio hasta las 18:00.\n¿Te sirve el martes a la misma hora?'}
            />
            <div className="bg-violet-100 text-indigo-800 text-sm font-bold rounded-lg p-4 mt-4">
              Nuevo bloque: martes 15/09/2026, 16:00 a 17:00
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-sm uppercase tracking-widest font-extrabold text-slate-500 mb-3">Elige el reemplazo en tu disponibilidad</h2>
            <Calendario tipo="tutor" />
            <div className="flex flex-wrap gap-4 mt-5 text-sm text-slate-500">
              <span className="flex items-center gap-2"><i className="w-4 h-4 bg-violet-100 rounded-sm" />Libre</span>
              <span className="flex items-center gap-2"><i className="w-4 h-4 bg-slate-200 rounded-sm" />Ocupado</span>
              <span className="flex items-center gap-2"><i className="w-4 h-4 bg-indigo-800 rounded-sm" />Propuesto</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-3 mt-6">
          <Link to="/solicitudes" className="text-indigo-800 font-bold text-sm px-5 py-3">Cancelar</Link>
          <Link to="/solicitudes" className="bg-indigo-800 text-white font-bold text-sm rounded-lg px-5 py-3">Enviar propuesta</Link>
        </div>
      </section>
    </main>
  )
}

export function DetalleSesion() {
  return (
    <Marco rol="tutor" activo="mis-sesiones">
      <div className="text-sm text-slate-500 mb-4">
        <Link to="/historial-sesiones" className="hover:text-indigo-800">Mis sesiones</Link> › Sesión TU-2026-0184
      </div>
      <div className="flex flex-wrap justify-between items-center gap-5 border-b border-slate-200 pb-6">
        <div>
          <h1 className="flex flex-wrap items-center gap-4 text-3xl font-extrabold mb-2">
            Sesión TU-2026-0184 <Estado texto="Programada" />
          </h1>
          <p className="text-sm text-slate-500">Lunes 14/09/2026 · 16:00 a 17:00 · modalidad remota</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-red-700 text-sm font-bold rounded-lg px-5 py-3">Cancelar sesión</span>
          <span className="border border-indigo-400 text-indigo-800 text-sm font-bold rounded-lg px-5 py-3">Reprogramar</span>
          <Link to="/cierre-sesion" className="bg-indigo-800 text-white text-sm font-bold rounded-lg px-5 py-3">Cerrar sesión</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pt-6">
        <section>
          <h2 className="text-sm uppercase tracking-widest font-extrabold text-slate-500 mb-3">Tutor</h2>
          <div className="flex items-center gap-3 mb-6">
            <Avatar />
            <div><h3 className="text-lg font-bold">Sebastián Rojas Mendoza</h3><p className="text-sm text-slate-500">Ing. Civil · 9.º ciclo · 4.7</p></div>
          </div>
          <h2 className="text-sm uppercase tracking-widest font-extrabold text-slate-500 mb-3">Estudiante</h2>
          <div className="flex items-center gap-3 mb-6">
            <Avatar />
            <div><h3 className="text-lg font-bold">Joaquín Medina Talledo</h3><p className="text-sm text-slate-500">Ing. Industrial · 5.º ciclo</p></div>
          </div>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-widest font-extrabold text-slate-500 mb-3">Curso y tema</h2>
          <div className="bg-white border border-slate-300 rounded-lg shadow-sm p-5">
            <h3 className="text-lg font-bold mb-3">Cálculo I <span className="bg-violet-100 text-indigo-800 rounded-full px-3 py-1 text-xs">MA101</span></h3>
            <p className="text-sm mb-3">«Ejercicios de integrales por partes»</p>
            <p className="text-sm text-slate-500">Enlace de la sesión remota:<br />meet.ulima.edu.pe/tu-0184</p>
          </div>
          <h2 className="text-sm uppercase tracking-widest font-extrabold text-slate-500 mt-5 mb-3">Ventana permitida</h2>
          <p className="text-sm text-slate-500 leading-relaxed">La cancelación es posible hasta 12 horas antes. El cierre se habilita al terminar el bloque y hasta 72 horas después.</p>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-widest font-extrabold text-slate-500 mb-3">Trazabilidad</h2>
          {eventos.map((evento) => (
            <div key={evento.estado} className="flex items-start gap-3 mb-5">
              <span className={`w-3 h-3 rounded-full shrink-0 mt-1 ${evento.color}`} />
              <div>
                <h3 className="text-base font-bold mb-1">{evento.estado}</h3>
                <p className="text-sm text-slate-500">{evento.fecha}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Marco>
  )
}
