import { Link } from "react-router-dom";
import HeaderEstudiante from "../../components/compartidos/HeaderEstudiante";
import Footer from "../../components/compartidos/Footer";

// 1.5 Mi cuenta · ROL: ESTUDIANTE (USUARIO NORMAL)
// Perfil lateral a la izquierda y dos paneles apilados a la derecha, según el mockup.
export default function MiCuenta() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderEstudiante />

      <main className="flex-1 px-14 py-10">
        {/* Migas de pan + título */}
        <p className="text-[13px] leading-4.5 text-text-muted mb-2">
          <Link to="/directorio" className="hover:text-primary">Inicio</Link> › Mi cuenta
        </p>
        <h1 className="text-[28px] leading-8 font-bold mb-10">Mi cuenta</h1>

        {/* 2 columnas: perfil de 400 px + el resto para los formularios */}
        <div className="grid grid-cols-[400px_1fr] gap-6">

          {/* ===== Perfil lateral ===== */}
          <aside className="rounded-lg border border-border bg-surface px-8 py-8 text-center shadow-card">
            <div className="size-28 mx-auto flex items-center justify-center rounded-full border border-border bg-primary-soft text-center font-mono text-[15px] leading-5.5 text-text-muted">
              foto de<br />perfil
            </div>
            <h2 className="text-base leading-6 font-semibold mt-4">Camila Quispe Andrade</h2>
            <p className="text-[15px] leading-5.5 text-text-muted mt-3">Ingeniería Industrial · 8.º ciclo</p>
            <button type="button" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg border border-primary px-5 py-2.5 text-[15px] leading-5.5 font-semibold text-primary">
              Cambiar fotografía
            </button>
            <p className="text-[13px] leading-4.5 text-text-muted mt-3">JPG o PNG, hasta 2 MB.</p>
            <p className="text-[13px] leading-4.5 text-text-muted mt-6 pt-6 border-t border-border">Cuenta creada el 12/03/2026</p>
          </aside>

          {/* ===== Formularios (columna derecha) ===== */}
          <div className="min-w-0 space-y-6">

            {/* Datos personales y de contacto: 6 campos en 2 columnas */}
            <section className="rounded-lg border border-border bg-surface p-8">
              <h2 className="text-xl leading-7 font-bold text-primary mb-6">Datos personales y de contacto</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">NOMBRES</label>
                  <input type="text" defaultValue="Camila Andrea"
                    className="w-full h-11 rounded-lg border border-border bg-white px-4 text-[15px] leading-5.5 focus:outline-none focus:border-primary" />
                </div>

                <div>
                  <label className="block mb-2 text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">APELLIDOS</label>
                  <input type="text" defaultValue="Quispe Andrade"
                    className="w-full h-11 rounded-lg border border-border bg-white px-4 text-[15px] leading-5.5 focus:outline-none focus:border-primary" />
                </div>

                <div>
                  <label className="block mb-2 text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">CARRERA</label>
                  <select defaultValue="Ingeniería Industrial"
                    className="w-full h-11 rounded-lg border border-border bg-white px-4 text-[15px] leading-5.5 focus:outline-none focus:border-primary">
                    <option>Ingeniería Industrial</option>
                    <option>Ingeniería de Sistemas</option>
                    <option>Ingeniería Civil</option>
                    <option>Administración</option>
                    <option>Economía</option>
                    <option>Contabilidad</option>
                    <option>Psicología</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">CICLO</label>
                  <select defaultValue="8.º"
                    className="w-full h-11 rounded-lg border border-border bg-white px-4 text-[15px] leading-5.5 focus:outline-none focus:border-primary">
                    <option>1.º</option>
                    <option>2.º</option>
                    <option>3.º</option>
                    <option>4.º</option>
                    <option>5.º</option>
                    <option>6.º</option>
                    <option>7.º</option>
                    <option>8.º</option>
                    <option>9.º</option>
                    <option>10.º</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">CORREO INSTITUCIONAL</label>
                  <input type="email" defaultValue="camila.quispe@aloe.ulima.edu.pe" disabled
                    className="w-full h-11 rounded-lg border border-border bg-bg px-4 text-[15px] leading-5.5 text-text-muted cursor-not-allowed" />
                  <p className="text-[13px] leading-4.5 text-text-muted mt-1">No editable.</p>
                </div>

                <div>
                  <label className="block mb-2 text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">CELULAR</label>
                  <input type="tel" defaultValue="987 654 321"
                    className="w-full h-11 rounded-lg border border-border bg-white px-4 text-[15px] leading-5.5 focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-7">
                <button type="button" className="text-[15px] leading-5.5 font-semibold text-primary">
                  Descartar
                </button>
                <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-[15px] leading-5.5 font-semibold text-white hover:bg-primary-dark">
                  Guardar cambios
                </button>
              </div>
            </section>

            {/* Cambiar contraseña: 3 campos en 3 columnas */}
            <section className="rounded-lg border border-border bg-surface p-8">
              <h2 className="text-xl leading-7 font-bold text-primary mb-6">Cambiar contraseña</h2>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block mb-2 text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">ACTUAL</label>
                  <input type="password" defaultValue="12345678"
                    className="w-full h-11 rounded-lg border border-border bg-white px-4 text-[15px] leading-5.5 focus:outline-none focus:border-primary" />
                </div>

                <div>
                  <label className="block mb-2 text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">NUEVA</label>
                  <input type="password" defaultValue="12345678"
                    className="w-full h-11 rounded-lg border border-border bg-white px-4 text-[15px] leading-5.5 focus:outline-none focus:border-primary" />
                </div>

                <div>
                  <label className="block mb-2 text-xs leading-4 font-semibold tracking-[1.2px] text-text-muted">CONFIRMAR</label>
                  <input type="password" defaultValue="12345678"
                    className="w-full h-11 rounded-lg border border-border bg-white px-4 text-[15px] leading-5.5 focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-primary px-5 py-2.5 text-[15px] leading-5.5 font-semibold text-primary hover:bg-primary-soft">
                  Actualizar contraseña
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer universal; "cuenta" muestra su variante de Mi cuenta (Términos del programa) */}
      <Footer cuenta />
    </div>
  );
}
