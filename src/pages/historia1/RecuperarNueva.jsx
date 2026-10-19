import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.4 Recuperar contraseña · Paso 3 (formulario de nueva contraseña)
export default function RecuperarNueva() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1 px-14 py-16 flex justify-center items-start">
        <div className="w-120 bg-surface border border-border rounded-lg shadow-card p-10">
          <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">PASO 3 DE 3</p>
          <h1 className="text-[28px] font-bold leading-8 mb-1">Crea una nueva contraseña</h1>
          <p className="text-[15px] text-text-muted mb-8">
            Para <span className="font-semibold text-text">camila.quispe@aloe.ulima.edu.pe</span>. Usa al menos 8 caracteres.
          </p>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">NUEVA CONTRASEÑA</label>
              <input type="password" defaultValue="Tutorias2026"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />

              {/* Medidor de seguridad */}
              <div className="flex items-center gap-3 mt-2">
                <div className="flex-1 grid grid-cols-4 gap-1">
                  <span className="h-1.5 rounded-full bg-success"></span>
                  <span className="h-1.5 rounded-full bg-success"></span>
                  <span className="h-1.5 rounded-full bg-success"></span>
                  <span className="h-1.5 rounded-full bg-success"></span>
                </div>
                <span className="text-[13px] font-semibold text-success">Segura</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CONFIRMAR CONTRASEÑA</label>
              <input type="password" defaultValue="Tutorias2026"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
            </div>

            <Link to="/login" className="w-full py-3 text-center rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Guardar contraseña
            </Link>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
