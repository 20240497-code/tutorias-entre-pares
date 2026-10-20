import { Link } from 'react-router-dom'
import HeaderEstudiante from '../../components/compartidos/HeaderEstudiante'
import Footer from '../../components/compartidos/Footer'
import { escalaInterfaz as escala } from '../../components/compartidos/escalaInterfaz'

const claseCampo = `${escala.control} w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`
const claseEtiqueta = `${escala.etiqueta} mb-2 block tracking-[1.2px] text-text-muted`

// 1.5 Mi cuenta: perfil lateral y dos paneles apilados, según el mockup oficial.
export default function MiCuenta() {
  return <div className="flex min-h-screen flex-col bg-bg font-sans text-text">
    <HeaderEstudiante />
    <main className="flex-1 px-6 py-10 xl:px-14">
      <p className={`${escala.auxiliar} mb-2 text-text-muted`}>
        <Link to="/directorio" className="hover:text-primary">Inicio</Link> › Mi cuenta
      </p>
      <h1 className={`${escala.tituloPantalla} mb-10`}>Mi cuenta</h1>

      <div className="grid items-stretch gap-6 lg:grid-cols-[400px_minmax(0,1fr)]">
        <aside aria-label="Perfil de la cuenta" className="rounded-lg border border-border bg-surface px-8 py-8 text-center shadow-card">
          <div role="img" aria-label="Foto de perfil de Camila Quispe Andrade" className={`${escala.avatarPerfil} mx-auto flex items-center rounded-full border border-border bg-primary-soft text-left font-mono text-[15px] leading-[22px] text-text-muted`}>foto de<br />perfil</div>
          <h2 className={`${escala.subtitulo} mt-4`}>Camila Quispe Andrade</h2>
          <p className={`${escala.cuerpo} mt-3 text-text-muted`}>Ingeniería Industrial · 8.º ciclo</p>
          <button type="button" className={`${escala.botonSecundario} mt-4`}>Cambiar fotografía</button>
          <p className={`${escala.auxiliar} mt-3 text-text-muted`}>JPG o PNG, hasta 2 MB.</p>
          <p className={`${escala.auxiliar} mt-6 border-t border-border pt-6 text-text-muted`}>Cuenta creada el 12/03/2026</p>
        </aside>

        <div className="min-w-0 space-y-6">
          <section aria-labelledby="datos-cuenta" className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <h2 id="datos-cuenta" className={`${escala.tituloSeccion} mb-6 text-primary`}>Datos personales y de contacto</h2>
            <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="cuenta-nombres" className={claseEtiqueta}>NOMBRES</label>
                <input id="cuenta-nombres" type="text" autoComplete="given-name" defaultValue="Camila Andrea" className={claseCampo} />
              </div>
              <div>
                <label htmlFor="cuenta-apellidos" className={claseEtiqueta}>APELLIDOS</label>
                <input id="cuenta-apellidos" type="text" autoComplete="family-name" defaultValue="Quispe Andrade" className={claseCampo} />
              </div>
              <div>
                <label htmlFor="cuenta-carrera" className={claseEtiqueta}>CARRERA</label>
                <select id="cuenta-carrera" defaultValue="Ingeniería Industrial" className={claseCampo}>
                  {['Ingeniería Industrial', 'Ingeniería de Sistemas', 'Ingeniería Civil', 'Administración', 'Economía', 'Contabilidad', 'Psicología'].map((carrera) => <option key={carrera}>{carrera}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="cuenta-ciclo" className={claseEtiqueta}>CICLO</label>
                <select id="cuenta-ciclo" defaultValue="8.º" className={claseCampo}>
                  {Array.from({ length: 10 }, (_, i) => `${i + 1}.º`).map((ciclo) => <option key={ciclo}>{ciclo}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="cuenta-correo" className={claseEtiqueta}>CORREO INSTITUCIONAL</label>
                <input id="cuenta-correo" type="email" defaultValue="camila.quispe@aloe.ulima.edu.pe" disabled aria-describedby="cuenta-correo-ayuda" className={`${claseCampo} disabled:cursor-not-allowed disabled:bg-bg disabled:text-text-muted`} />
                <p id="cuenta-correo-ayuda" className={`${escala.auxiliar} mt-1 text-text-muted`}>No editable.</p>
              </div>
              <div>
                <label htmlFor="cuenta-celular" className={claseEtiqueta}>CELULAR</label>
                <input id="cuenta-celular" type="tel" autoComplete="tel" defaultValue="987 654 321" className={claseCampo} />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-end gap-7">
              <button type="button" className={`${escala.cuerpo} font-semibold text-primary`}>Descartar</button>
              <button type="button" className={escala.botonPrimario}>Guardar cambios</button>
            </div>
          </section>

          <section aria-labelledby="clave-cuenta" className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <h2 id="clave-cuenta" className={`${escala.tituloSeccion} mb-6 text-primary`}>Cambiar contraseña</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[['actual', 'ACTUAL'], ['nueva', 'NUEVA'], ['confirmar', 'CONFIRMAR']].map(([id, texto]) => <div key={id}>
                <label htmlFor={`cuenta-clave-${id}`} className={claseEtiqueta}>{texto}</label>
                <input id={`cuenta-clave-${id}`} type="password" autoComplete={id === 'actual' ? 'current-password' : 'new-password'} defaultValue="12345678" className={claseCampo} />
              </div>)}
            </div>
            <div className="mt-5 flex justify-end">
              <button type="button" className={escala.botonSecundario}>Actualizar contraseña</button>
            </div>
          </section>
        </div>
      </div>
    </main>
    <Footer cuenta />
  </div>
}
