import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.4 Recuperar contraseña · Paso 1 (pedir el enlace) · ROL: VISITANTE
export default function RecuperarContrasena() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1 px-14 py-16 flex justify-center items-start">
        <div className="w-120 bg-surface border border-border rounded-lg shadow-card p-10">
          <p className="text-xs font-semibold tracking-wide text-text-muted mb-2">PASO 1 DE 3</p>
          <h1 className="text-[28px] font-bold leading-8 mb-1">Recuperar contraseña</h1>
          <p className="text-[15px] text-text-muted mb-8">
            Ingresa tu correo institucional y te enviaremos un enlace para crear una nueva contraseña.
          </p>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CORREO INSTITUCIONAL</label>
              <input type="email" placeholder="camila.quispe@aloe.ulima.edu.pe"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
              <p className="mt-1 text-[13px] text-text-muted">Usa tu correo @aloe.ulima.edu.pe</p>
            </div>

            <Link to="/recuperar/enviado" className="w-full py-3 text-center rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Enviar enlace
            </Link>

            <Link to="/login" className="text-center text-[15px] font-semibold text-primary hover:underline">
              ‹ Volver a iniciar sesión
            </Link>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
