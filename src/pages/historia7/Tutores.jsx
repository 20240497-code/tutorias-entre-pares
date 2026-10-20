import { Link } from 'react-router-dom';
import { Cabecera, Pie } from '../../components/historia7/Compartidos';
import '../../components/historia7/estilos-h7.css';

export default function Tutores() {
  return (
    <div className="h7 screen screen-bottom">
      <Cabecera>
        <Link to="/coordinador/tutores" className="border-b-2 border-accent py-2 font-semibold">Tutores</Link>
        <Link to="/coordinador/usuarios" className="py-2 text-white/80">Usuarios</Link>
        <a href="#" className="py-2 text-white/80">Sesiones</a>
        <Link to="/coordinador/tablero" className="py-2 text-white/80">Tablero</Link>
      </Cabecera>
      <main className="px-14 pt-8 pb-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] leading-8 font-bold">Tutores del programa</h1>
            <p className="mt-1 text-[15px] text-muted">24 tutores activos · 1 en revisión · 2 suspendidos</p>
          </div>
          <div className="flex gap-3"><input className="field w-[350px]" placeholder="Buscar por nombre o correo" aria-label="Buscar por nombre o correo" /><button className="field">Curso: todos ▾</button><button className="field">Estado: todos ▾</button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-line bg-white">
          <table className="">
            <thead>
              <tr>
                <th>TUTOR</th>
                <th>CURSOS</th>
                <th>SESIONES</th>
                <th>PROMEDIO</th>
                <th>INASISTENCIA</th>
                <th>ESTADO</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong className="font-semibold">Ariana Flores Bustamante</strong>
                </td>
                <td><span className="text-muted">MA101 · SI401</span>
                </td>
                <td>40</td>
                <td>4.9</td>
                <td><span style={{ color: "#1E7F4D" }} className="font-semibold">2 %</span>
                </td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-primary">Ver ficha</button>
                </td>
              </tr>
              <tr>
                <td><strong className="font-semibold">Camila Quispe Andrade</strong>
                </td>
                <td><span className="text-muted">MA101 · ES210 · FI202</span>
                </td>
                <td>31</td>
                <td>4.8</td>
                <td><span style={{ color: "#1E7F4D" }} className="font-semibold">3 %</span>
                </td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><Link to="/tutores/camila-quispe" className="font-semibold text-primary">Ver ficha</Link>
                </td>
              </tr>
              <tr>
                <td><strong className="font-semibold">Sebastián Rojas Mendoza</strong>
                </td>
                <td><span className="text-muted">MA101 · FI202</span>
                </td>
                <td>28</td>
                <td>4.7</td>
                <td><span style={{ color: "#B7791F" }} className="font-semibold">11 %</span>
                </td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-primary">Ver ficha</button>
                </td>
              </tr>
              <tr>
                <td><strong className="font-semibold">Mateo Chávez Ríos</strong>
                </td>
                <td><span className="text-muted">SI401 · MA101</span>
                </td>
                <td>25</td>
                <td>4.4</td>
                <td><span style={{ color: "#B4322B" }} className="font-semibold">22 %</span>
                </td>
                <td><span className="badge revision">En revisión</span>
                </td>
                <td><Link to="/coordinador/tutores/suspender" className="font-semibold text-primary">Ver ficha</Link>
                </td>
              </tr>
              <tr>
                <td><strong className="font-semibold">Valeria Ccahuana Rivas</strong>
                </td>
                <td><span className="text-muted">CO105 · MA101</span>
                </td>
                <td>19</td>
                <td>4.6</td>
                <td><span style={{ color: "#1E7F4D" }} className="font-semibold">5 %</span>
                </td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-primary">Ver ficha</button>
                </td>
              </tr>
              <tr>
                <td><strong className="font-semibold">Lucía Paredes Ynga</strong>
                </td>
                <td><span className="text-muted">ES210 · MA101</span>
                </td>
                <td>16</td>
                <td>4.5</td>
                <td><span style={{ color: "#1E7F4D" }} className="font-semibold">6 %</span>
                </td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-primary">Ver ficha</button>
                </td>
              </tr>
              <tr>
                <td><strong className="font-semibold">Renzo Aguilar Peña</strong>
                </td>
                <td><span className="text-muted">MA101</span>
                </td>
                <td>11</td>
                <td>4.2</td>
                <td><span style={{ color: "#B4322B" }} className="font-semibold">31 %</span>
                </td>
                <td><span className="badge suspendido">Suspendido</span>
                </td>
                <td><button type="button" className="font-semibold text-primary">Ver ficha</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5 flex items-center justify-between text-sm text-muted"><span>Mostrando 1 a 7 de 27 tutores</span>
          <div className="flex gap-2"><button type="button" className="page-number">‹</button><button type="button" className="page-number selected">1</button><button type="button" className="page-number">2</button><button type="button" className="page-number">›</button>
          </div>
        </div>
      </main>
      <Pie />
    </div>
  );
}
