import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.2 Estado · credenciales incorrectas (mensaje sobre el mismo formulario)
export default function LoginError() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1 px-14 py-16 flex justify-center items-start">
        <div className="w-120 bg-surface border border-border rounded-lg shadow-card p-10">
          <h1 className="text-[28px] font-bold leading-8 mb-1">Iniciar sesión</h1>
          <p className="text-[15px] text-text-muted mb-6">Ingresa con tu correo institucional.</p>

          {/* Mensaje de error */}
          <div className="mb-6 px-4 py-3 rounded-lg bg-danger/10 border border-danger text-danger text-[15px]">
            <span className="font-semibold">Correo o contraseña incorrectos.</span> Te quedan 4 intentos antes de bloquear el
            acceso por 15 minutos.
          </div>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CORREO INSTITUCIONAL</label>
              <input type="email" defaultValue="camila.quispe@aloe.ulima.edu.pe"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-xs font-semibold tracking-wide text-danger">CONTRASEÑA</label>
                <Link to="/recuperar" className="text-[13px] font-semibold text-primary hover:underline">¿Olvidaste tu contraseña?</Link>
              </div>
              <input type="password" defaultValue="123456"
                className="w-full px-3 py-2 rounded-lg border-2 border-danger text-[15px] focus:outline-none" />
              <p className="mt-1 text-[13px] text-danger">Verifica tus datos e inténtalo otra vez.</p>
            </div>

            <Link to="/login/cargando" className="w-full py-3 text-center rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
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
