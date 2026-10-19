import { Link, useNavigate } from 'react-router-dom';
import Diseño, { Estado } from '../../components/historia5/Comunes';

export default function HistorialSesiones({ rol, setRol }) {
  const cambiar = useNavigate();
  const esTutor = rol === 'tutor';

  const historialTutor = [
    { fecha: '12/09/2026', persona: 'Antonella Vargas Ludeña', curso: 'FI202 Física II', duracion: '60 min', desenlace: 'No asistió' },
    { fecha: '09/09/2026', persona: 'Gonzalo Ramírez Ayala', curso: 'ES210 Estadística', duracion: '60 min', desenlace: 'Realizada' },
    { fecha: '05/09/2026', persona: 'Joaquín Medina Talledo', curso: 'MA101 Cálculo I', duracion: '60 min', desenlace: 'Realizada' },
    { fecha: '02/09/2026', persona: 'Micaela Zegarra Prado', curso: 'MA101 Cálculo I', duracion: '60 min', desenlace: 'Cancelada' },
    { fecha: '29/08/2026', persona: 'Piero Alcántara Núñez', curso: 'FI202 Física II', duracion: '120 min', desenlace: 'Realizada' },
    { fecha: '26/08/2026', persona: 'Daniela Ríos Camacho', curso: 'ES210 Estadística', duracion: '60 min', desenlace: 'Realizada' },
  ];

  const historialEstudiante = [
    { fecha: '14/09/2026', persona: 'Camila Quispe Andrade', curso: 'MA101 Cálculo I', duracion: '60 min', desenlace: 'Realizada' },
    { fecha: '10/09/2026', persona: 'Valeria Ccahuana Rivas', curso: 'CO105 Contabilidad', duracion: '60 min', desenlace: 'Realizada' },
    { fecha: '04/09/2026', persona: 'Diego Huamán Salcedo', curso: 'EC201 Economía', duracion: '60 min', desenlace: 'Realizada' },
    { fecha: '28/08/2026', persona: 'Sebastián Rojas Mendoza', curso: 'FI202 Física II', duracion: '120 min', desenlace: 'Cancelada' },
    { fecha: '20/08/2026', persona: 'Camila Quispe Andrade', curso: 'MA101 Cálculo I', duracion: '60 min', desenlace: 'Realizada' },
  ];

  const historial = esTutor ? historialTutor : historialEstudiante;

  return (
    <Diseño rol={rol} setRol={setRol}>
      <div className="flex space-x-6 border-b border-slate-200 mb-6 text-xs font-semibold">
        <button className="pb-2 text-slate-400 hover:text-slate-700">Próximas</button>
        <button className="pb-2 text-indigo-900 border-b-2 border-indigo-900 font-bold">Historial</button>
        <button
          onClick={() => cambiar('/material-compartido')}
          className="pb-2 text-slate-400 hover:text-indigo-900 transition-colors"
        >
          Material compartido
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Historial de sesiones</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            {esTutor ? '34 sesiones cerradas como tutor' : '12 sesiones recibidas como estudiante'}
          </p>
        </div>

        <div className="flex space-x-3 text-xs">
          <select className="border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700"><option>Curso: todos ▾</option></select>
          <select className="border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700"><option>Periodo: agosto — setiembre ▾</option></select>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50/80 text-slate-400 font-bold uppercase tracking-wider text-[10px] border-b border-slate-100">
            <tr>
              <th className="px-6 py-3">FECHA</th>
              <th className="px-6 py-3">{esTutor ? 'ESTUDIANTE' : 'TUTOR'}</th>
              <th className="px-6 py-3">CURSO</th>
              <th className="px-6 py-3">DURACIÓN</th>
              <th className="px-6 py-3">DESENLACE</th>
              <th className="px-6 py-3 text-right">ACCIÓN</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {historial.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50">
                <td className="px-6 py-4 text-slate-500">{row.fecha}</td>
                <td className="px-6 py-4 font-bold text-slate-900">{row.persona}</td>
                <td className="px-6 py-4">{row.curso}</td>
                <td className="px-6 py-4">{row.duracion}</td>
                <td className="px-6 py-4">
                  <Estado tipo={row.desenlace} />
                </td>
                <td className="px-6 py-4 text-right">
                  {esTutor ? (
                    <Link to="/cierre-sesion" className="text-indigo-800 font-semibold hover:underline">
                      Ver detalle
                    </Link>
                  ) : (
                    <Link to="/material-compartido" className="text-indigo-800 font-semibold hover:underline">
                      Ver material
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Diseño>
  );
}
