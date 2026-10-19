import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.4 Recuperar contraseña · Paso 2 (confirmación de envío)
export default function RecuperarEnviado() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1 px-14 py-16 flex justify-center items-start">
        <div className="w-120 bg-surface border border-border rounded-lg shadow-card p-10 text-center">
          <p className="text-xs font-semibold tracking-wide text-text-muted mb-4">PASO 2 DE 3</p>
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-info/10 text-info flex items-center justify-center text-2xl">
            ✉
          </div>
          <h1 className="text-xl font-bold mb-2">Revisa tu correo</h1>
          <p className="text-[15px] text-text-muted mb-6">
            Enviamos el enlace a <span className="font-semibold text-text">camila.quispe@aloe.ulima.edu.pe</span>.
            Podrás reenviarlo en <span className="font-semibold text-text">00:45</span>.
          </p>

          {/* Deshabilitado mientras corre la cuenta regresiva */}
          <button type="button" disabled
            className="w-full py-3 mb-4 rounded-lg font-semibold border border-border text-text-muted bg-bg cursor-not-allowed">
            Reenviar enlace
          </button>

          {/* Atajo que simula abrir el enlace recibido por correo */}
          <Link to="/recuperar/nueva" className="block mb-2 text-[15px] font-semibold text-primary hover:underline">
            Abrir el enlace del correo →
          </Link>
          <Link to="/login" className="block text-[13px] text-text-muted hover:text-primary">
            Volver a iniciar sesión
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
