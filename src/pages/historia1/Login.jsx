import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.2 Inicio de sesión · ROL: VISITANTE
export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1 px-14 py-16 flex justify-center items-start">
        <div className="w-120 bg-surface border border-border rounded-lg shadow-card p-10">
          <h1 className="text-[28px] font-bold leading-8 mb-1">Iniciar sesión</h1>
          <p className="text-[15px] text-text-muted mb-8">Ingresa con tu correo institucional.</p>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CORREO INSTITUCIONAL</label>
              <input type="email" placeholder="camila.quispe@aloe.ulima.edu.pe"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
              <p className="mt-1 text-[13px] text-text-muted">Usa tu correo @aloe.ulima.edu.pe</p>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs font-semibold tracking-wide text-text-muted">CONTRASEÑA</label>
                <Link to="/recuperar" className="text-[13px] font-semibold text-primary hover:underline">¿Olvidaste tu contraseña?</Link>
              </div>
              <input type="password" placeholder="Tu contraseña"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
            </div>

            <Link to="/directorio" className="w-full py-3 text-center rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Ingresar
            </Link>

            <p className="text-center text-[15px] text-text-muted">
              ¿No tienes cuenta? <Link to="/registro" className="text-primary font-semibold hover:underline">Crear cuenta</Link>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
