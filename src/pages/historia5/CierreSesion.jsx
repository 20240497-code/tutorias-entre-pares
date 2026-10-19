import { useState } from 'react';
import { Link } from 'react-router-dom';
import Diseño, { Ruta, MensajeAlerta, AccesoRestringido } from '../../components/historia5/Comunes';

export default function CierreSesion({ rol, setRol }) {
  const [asistioEstudiante, setAsistioEstudiante] = useState(true);

  if (rol === 'estudiante') {
    return (
      <Diseño rol={rol} setRol={setRol}>
        <AccesoRestringido mensaje="El cierre de sesión y registro de asistencia es una función exclusiva del rol Tutor." />
      </Diseño>
    );
  }

  return (
    <Diseño rol={rol} setRol={setRol}>
      <Ruta
        enlaces={[
          { label: 'Mis sesiones', path: '/historial-sesiones' },
          { label: 'TU-2026-0184', path: '/detalle-sesion' },
          { label: 'Cerrar sesión' },
        ]}
      />

      <h1 className="text-2xl font-bold text-slate-900 mt-1">Cerrar sesión TU-2026-0184</h1>
      <p className="text-xs text-slate-500 mb-6">Joaquín Medina Talledo · MA101 Cálculo I · 14/09/2026, 16:00 a 17:00 · remota</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">ASISTENCIA</span>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border border-slate-200 rounded-lg">
                <span className="text-xs font-medium text-slate-700">Asistió el estudiante</span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setAsistioEstudiante(true)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                      asistioEstudiante ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    onClick={() => setAsistioEstudiante(false)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                      !asistioEstudiante ? 'bg-rose-700 text-white border-rose-700' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 border border-slate-200 rounded-lg">
                <span className="text-xs font-medium text-slate-700">Asistí como tutor</span>
                <div className="flex gap-1">
                  <button type="button" className="px-4 py-1.5 text-xs font-semibold rounded-md bg-emerald-700 text-white border border-emerald-700">Sí</button>
                  <button type="button" className="px-4 py-1.5 text-xs font-semibold rounded-md bg-white text-slate-600 border border-slate-200">No</button>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 border border-slate-200 rounded-lg">
                <span className="text-xs font-medium text-slate-700">Duración real</span>
                <select className="border border-slate-300 rounded-md text-xs px-3 py-1.5 bg-white font-medium">
                  <option>60 minutos ▾</option>
                  <option>90 minutos</option>
                  <option>120 minutos</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">NOTAS SOBRE LO TRABAJADO</label>
            <textarea
              rows="3"
              disabled={!asistioEstudiante}
              defaultValue="Resolvimos seis ejercicios de integración por partes y revisamos el criterio para elegir u y dv. Practicamos con la práctica calificada 2 del ciclo anterior."
              className={`w-full border border-slate-300 rounded-lg p-3 text-xs focus:ring-2 focus:ring-indigo-600 focus:outline-none ${
                !asistioEstudiante ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800'
              }`}
            ></textarea>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">TEMAS PENDIENTES</label>
            <textarea
              rows="3"
              disabled={!asistioEstudiante}
              defaultValue="Integrales trigonométricas y sustitución. Sugiero una segunda sesión antes del parcial."
              className={`w-full border border-slate-300 rounded-lg p-3 text-xs focus:ring-2 focus:ring-indigo-600 focus:outline-none ${
                !asistioEstudiante ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800'
              }`}
            ></textarea>
          </div>

          <div className="flex justify-end items-center gap-4 pt-4 border-t border-slate-100">
            <button type="button" className="text-xs font-semibold text-indigo-900 hover:underline">Guardar borrador</button>
            {asistioEstudiante ? (
              <Link to="/historial-sesiones" className="bg-indigo-900 text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-950">
                Cerrar sesión como realizada
              </Link>
            ) : (
              <Link to="/historial-sesiones" className="bg-rose-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-rose-800">
                Cerrar como no asistió
              </Link>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-indigo-50/70 border border-indigo-100 p-4 rounded-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 block mb-1">ESTADO ACTUAL</span>
            <p className="text-sm font-bold text-indigo-950">Programada → Realizada</p>
            <p className="text-[11px] text-slate-500 mt-1">Al cerrar, el estudiante podrá calificarte durante los siguientes 7 días.</p>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-2 text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">DATOS DE LA SESIÓN</span>
            <div className="flex justify-between"><span className="text-slate-500">Código</span><span className="font-bold text-slate-800">TU-2026-0184</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Curso</span><span className="font-bold text-slate-800">MA101</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Modalidad</span><span className="font-bold text-slate-800">Remota</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Bloque</span><span className="font-bold text-slate-800">16:00 – 17:00</span></div>
          </div>

          <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 font-medium">
            El cierre está habilitado hasta el 17/09/2026 a las 17:00 (72 horas después del bloque).
          </div>
        </div>
      </div>

      <MensajeAlerta texto="Al marcar que el estudiante no asistió, la sesión se cierra como «No asistió», no se piden notas y se suma a su tasa de inasistencia." />
    </Diseño>
  );
}
