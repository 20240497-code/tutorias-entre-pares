import { Link } from "react-router-dom";
import HeaderEstudiante from "../../components/compartidos/HeaderEstudiante";
import Footer from "../../components/compartidos/Footer";

// 1.5 Mi cuenta · ROL: ESTUDIANTE (USUARIO NORMAL)
export default function MiCuenta() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderEstudiante />

      <main className="flex-1 px-14 py-10">
        <p className="text-[13px] text-text-muted mb-2">
          <Link to="/directorio" className="hover:text-primary">Inicio</Link> › <span className="text-text">Mi cuenta</span>
        </p>

        <h1 className="text-[28px] font-bold leading-8 mb-8">Mi cuenta</h1>

        <div className="grid grid-cols-3 gap-6 items-start">
          {/* ===== Datos personales (2 de 3 columnas) ===== */}
          <section className="col-span-2 bg-surface border border-border rounded-lg shadow-card p-8">
            <h2 className="text-xl font-bold mb-6">Datos personales y de contacto</h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">NOMBRES</label>
                <input type="text" defaultValue="Camila Andrea"
                  className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">APELLIDOS</label>
                <input type="text" defaultValue="Quispe Andrade"
                  className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CARRERA</label>
                <select defaultValue="Ingeniería Industrial"
                  className="w-full px-3 py-2 rounded-lg border border-border text-[15px] bg-surface focus:outline-none focus:border-primary">
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
                <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CICLO</label>
                <select defaultValue="8.º"
                  className="w-full px-3 py-2 rounded-lg border border-border text-[15px] bg-surface focus:outline-none focus:border-primary">
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
                <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CORREO INSTITUCIONAL</label>
                <input type="email" defaultValue="camila.quispe@aloe.ulima.edu.pe" disabled
                  className="w-full px-3 py-2 rounded-lg border border-border text-[15px] bg-bg text-text-muted cursor-not-allowed" />
                <p className="mt-1 text-[13px] text-text-muted">No editable.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CELULAR</label>
                <input type="tel" defaultValue="987 654 321"
                  className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-border">
              <button type="button" className="px-4 py-2 rounded-lg font-semibold border border-border text-text hover:bg-bg">
                Descartar
              </button>
              <button type="button" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
                Guardar cambios
              </button>
            </div>
          </section>

          {/* ===== Cambiar contraseña (1 columna) ===== */}
          <section className="bg-surface border border-border rounded-lg shadow-card p-8">
            <h2 className="text-xl font-bold mb-6">Cambiar contraseña</h2>

            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">ACTUAL</label>
                <input type="password" defaultValue="12345678"
                  className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">NUEVA</label>
                <input type="password" defaultValue="12345678"
                  className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CONFIRMAR</label>
                <input type="password" defaultValue="12345678"
                  className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
              </div>

              <button type="button" className="w-full py-2 rounded-lg font-semibold border border-primary text-primary hover:bg-primary-soft">
                Actualizar contraseña
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
