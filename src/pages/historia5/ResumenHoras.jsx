import Diseño, { TarjetaMetrica, GraficoBarras, AccesoRestringido } from '../../components/historia5/Comunes';

export default function ResumenHoras({ rol, setRol }) {
  const meses = [
    { mes: 'Mayo', valor: 4, altura: 'h-12' },
    { mes: 'Junio', valor: 7, altura: 'h-20' },
    { mes: 'Julio', valor: 9, altura: 'h-28', activo: true },
    { mes: 'Agosto', valor: 6, altura: 'h-16' },
    { mes: 'Setiembre', valor: 8, altura: 'h-24' },
  ];

  if (rol === 'estudiante') {
    return (
      <Diseño rol={rol} setRol={setRol}>
        <AccesoRestringido mensaje="El perfil de tutor y resumen de horas es una función exclusiva del rol Tutor." />
      </Diseño>
    );
  }

  return (
    <Diseño rol={rol} setRol={setRol}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Resumen de horas</h1>
          <p className="text-xs text-slate-500 mt-0.5">Periodo del 01/08/2026 al 30/09/2026</p>
        </div>
        <select className="border border-slate-300 rounded-lg px-3 py-2 text-xs bg-white text-slate-700">
          <option>01/08/2026 — 30/09/2026 ▾</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <TarjetaMetrica titulo="HORAS ACUMULADAS" valor="36 h" subtexto="en 34 sesiones cerradas" destacado={true} />
        <TarjetaMetrica titulo="MA101 CÁLCULO I" valor="18 h" subtexto="17 sesiones" />
        <TarjetaMetrica titulo="FI202 FÍSICA II" valor="12 h" subtexto="11 sesiones" />
        <TarjetaMetrica titulo="ES210 ESTADÍSTICA" valor="6 h" subtexto="6 sesiones" />
      </div>

      <GraficoBarras meses={meses} />
    </Diseño>
  );
}
