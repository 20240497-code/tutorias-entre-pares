import { useNavigate } from 'react-router-dom';
import Diseño, { Ruta } from '../../components/historia5/Comunes';

export default function MaterialCompartido({ rol, setRol }) {
  const cambiar = useNavigate();

  const materiales = [
    {
      titulo: 'Guía de integración por partes',
      desc: 'Diez ejercicios resueltos paso a paso, en PDF.',
      link: 'drive.ulima.edu.pe/guia-integrales-mp',
    },
    {
      titulo: 'Práctica calificada 2 del ciclo anterior',
      desc: 'Enunciado y solucionario para practicar antes del parcial.',
      link: 'drive.ulima.edu.pe/ma101-pc2',
    },
    {
      titulo: 'Pizarra de la sesión',
      desc: 'Capturas de la pizarra digital del 14/09/2026.',
      link: 'drive.ulima.edu.pe/pizarra-0184',
    },
  ];

  return (
    <Diseño rol={rol} setRol={setRol}>
      <div className="flex space-x-6 border-b border-slate-200 mb-6 text-xs font-semibold">
        <button onClick={() => cambiar('/historial-sesiones')} className="pb-2 text-slate-400 hover:text-slate-700">
          Próximas
        </button>
        <button onClick={() => cambiar('/historial-sesiones')} className="pb-2 text-slate-400 hover:text-slate-700">
          Historial
        </button>
        <button className="pb-2 text-indigo-900 border-b-2 border-indigo-900 font-bold">
          Material compartido
        </button>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <Ruta
            enlaces={[
              { label: 'Mis sesiones', path: '/historial-sesiones' },
              { label: 'TU-2026-0184', path: '/detalle-sesion' },
              { label: 'Material compartido' },
            ]}
          />
          <h1 className="text-2xl font-bold text-slate-900 mt-1">Material compartido</h1>
          <p className="text-xs text-slate-500">Visible para Joaquín Medina en el detalle de la sesión TU-2026-0184.</p>
        </div>

        {rol === 'tutor' && (
          <button className="bg-indigo-900 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-950 shadow-sm">
            Agregar enlace
          </button>
        )}
      </div>

      {rol === 'tutor' && (
        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-6 shadow-sm flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">TÍTULO</label>
            <input type="text" placeholder="Ej. Guía de integrales" className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-xs focus:ring-2 focus:ring-indigo-600 focus:outline-none" />
          </div>
          <div className="flex-[2] w-full">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">ENLACE</label>
            <input type="text" placeholder="https://" className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-xs focus:ring-2 focus:ring-indigo-600 focus:outline-none" />
          </div>
          <button className="border border-indigo-900 text-indigo-900 text-xs font-semibold px-5 py-2 rounded-lg hover:bg-indigo-50 w-full md:w-auto">
            Guardar
          </button>
        </div>
      )}

      <div className="space-y-3 mb-12">
        {materiales.map((item, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-xl p-4 flex justify-between items-start shadow-sm">
            <div>
              <h3 className="text-xs font-bold text-slate-900">{item.titulo}</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
              <a href={`https://${item.link}`} target="_blank" rel="noreferrer" className="text-xs text-indigo-700 font-medium underline mt-1 inline-block">
                {item.link}
              </a>
            </div>

            {rol === 'tutor' && (
              <div className="space-x-3 text-xs font-semibold">
                <button className="text-indigo-800 hover:underline">Editar</button>
                <button className="text-rose-600 hover:underline">Quitar</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-sm">
        <div className="w-10 h-10 bg-indigo-50 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">
          ↗
        </div>
        <h3 className="text-sm font-bold text-slate-900">Sin material compartido</h3>
        <p className="text-xs text-slate-500 mt-1 mb-4">Agrega enlaces a guías, prácticas o apuntes para que el estudiante los revise después.</p>

        {rol === 'tutor' && (
          <button className="bg-indigo-900 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-950">
            Agregar el primer enlace
          </button>
        )}
      </div>
    </Diseño>
  );
}
