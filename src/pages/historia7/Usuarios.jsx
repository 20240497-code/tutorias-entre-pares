import { Link } from 'react-router-dom';
import { Cabecera, Pie } from '../../components/historia7/Compartidos';
import '../../components/historia7/estilos-h7.css';

export default function Usuarios() {
  return (
    <div className="h7 screen">
      <Cabecera>
        <Link to="/coordinador/tutores" className="py-2 text-white/80">Tutores</Link>
        <Link to="/coordinador/usuarios" className="border-b-2 border-accent py-2 font-semibold">Usuarios</Link>
        <a href="#" className="py-2 text-white/80">Sesiones</a>
        <Link to="/coordinador/tablero" className="py-2 text-white/80">Tablero</Link>
      </Cabecera>
      <main className="px-14 pt-8 pb-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] leading-8 font-bold">Usuarios</h1>
            <p className="mt-1 text-[15px] text-muted">312 cuentas registradas · 2 bloqueadas</p>
          </div>
          <div className="flex gap-3"><input className="field w-[310px]" placeholder="Buscar usuario" aria-label="Buscar usuario" /><button className="field">Rol: todos ▾</button><button className="field">Estado: todos ▾</button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-line bg-white">
          <table className="usuarios">
            <thead>
              <tr>
                <th>USUARIO</th>
                <th>ROL</th>
                <th>CORREO</th>
                <th>REGISTRO</th>
                <th>ESTADO</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Camila Quispe Andrade</td>
                <td>Estudiante · Tutor</td>
                <td><span className="text-muted">camila.quispe@aloe.ulima.edu.pe</span>
                </td>
                <td>12/03/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Joaquín Medina Talledo</td>
                <td>Estudiante</td>
                <td><span className="text-muted">joaquin.medina@aloe.ulima.edu.pe</span>
                </td>
                <td>18/03/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Ariana Flores Bustamante</td>
                <td>Tutor</td>
                <td><span className="text-muted">ariana.flores@aloe.ulima.edu.pe</span>
                </td>
                <td>20/03/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Sebastián Rojas Mendoza</td>
                <td>Estudiante · Tutor</td>
                <td><span className="text-muted">sebastian.rojas@aloe.ulima.edu.pe</span>
                </td>
                <td>25/03/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Valeria Ccahuana Rivas</td>
                <td>Tutor</td>
                <td><span className="text-muted">valeria.ccahuana@aloe.ulima.edu.pe</span>
                </td>
                <td>02/04/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Diego Huamán Salcedo</td>
                <td>Tutor</td>
                <td><span className="text-muted">diego.huaman@aloe.ulima.edu.pe</span>
                </td>
                <td>07/04/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Lucía Paredes Ynga</td>
                <td>Estudiante · Tutor</td>
                <td><span className="text-muted">lucia.paredes@aloe.ulima.edu.pe</span>
                </td>
                <td>11/04/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Mateo Chávez Ríos</td>
                <td>Tutor</td>
                <td><span className="text-muted">mateo.chavez@aloe.ulima.edu.pe</span>
                </td>
                <td>15/04/2026</td>
                <td><span className="badge revision">En revisión</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Fabiana Loayza Vera</td>
                <td>Tutor</td>
                <td><span className="text-muted">fabiana.loayza@aloe.ulima.edu.pe</span>
                </td>
                <td>19/04/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Renzo Aguilar Peña</td>
                <td>Tutor</td>
                <td><span className="text-muted">renzo.aguilar@aloe.ulima.edu.pe</span>
                </td>
                <td>23/04/2026</td>
                <td><span className="badge suspendido">Suspendido</span>
                </td>
                <td><button type="button" className="font-semibold text-primary">Reactivar</button>
                </td>
              </tr>
              <tr>
                <td>Antonella Vargas Ludeña</td>
                <td>Estudiante</td>
                <td><span className="text-muted">antonella.vargas@aloe.ulima.edu.pe</span>
                </td>
                <td>02/05/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Gonzalo Ramírez Ayala</td>
                <td>Estudiante</td>
                <td><span className="text-muted">gonzalo.ramirez@aloe.ulima.edu.pe</span>
                </td>
                <td>09/05/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Micaela Zegarra Prado</td>
                <td>Estudiante</td>
                <td><span className="text-muted">micaela.zegarra@aloe.ulima.edu.pe</span>
                </td>
                <td>14/05/2026</td>
                <td><span className="badge suspendido">Bloqueado</span>
                </td>
                <td><button type="button" className="font-semibold text-primary">Reactivar</button>
                </td>
              </tr>
              <tr>
                <td>Piero Alcántara Núñez</td>
                <td>Estudiante</td>
                <td><span className="text-muted">piero.alcantara@aloe.ulima.edu.pe</span>
                </td>
                <td>21/05/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-[#B4322B]">Bloquear</button>
                </td>
              </tr>
              <tr>
                <td>Rosa Enríquez Béjar</td>
                <td>Coordinador</td>
                <td><span className="text-muted">rosa.enriquez@ulima.edu.pe</span>
                </td>
                <td>01/03/2026</td>
                <td><span className="badge activo">Activo</span>
                </td>
                <td><button type="button" className="font-semibold text-muted">—</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5 flex items-center justify-between text-sm text-muted"><span>Mostrando 1 a 15 de 312 usuarios</span>
          <div className="flex gap-2"><button type="button" className="page-number">‹</button><button type="button" className="page-number selected">1</button><button type="button" className="page-number">2</button><button type="button" className="page-number">3</button><button type="button" className="page-number">›</button>
          </div>
        </div>
      </main>
      <Pie />
    </div>
  );
}
