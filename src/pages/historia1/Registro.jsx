import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.3 Registro · ROL: VISITANTE
export default function Registro() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1 px-14 py-12 flex justify-center items-start">
        <div className="w-160 bg-surface border border-border rounded-lg shadow-card p-10">
          <h1 className="text-[28px] font-bold leading-8 mb-1">Crear cuenta</h1>
          <p className="text-[15px] text-text-muted mb-8">
            Usa tu correo institucional para buscar tutores o ofrecerte como uno.
          </p>

          <form className="grid grid-cols-2 gap-x-6 gap-y-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">NOMBRES</label>
              <input type="text" placeholder="Camila Andrea"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">APELLIDOS</label>
              <input type="text" placeholder="Quispe Andrade"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CORREO INSTITUCIONAL</label>
              <input type="email" placeholder="camila.quispe@aloe.ulima.edu.pe"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
              <p className="mt-1 text-[13px] text-text-muted">Usa tu correo @aloe.ulima.edu.pe</p>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CARRERA</label>
              <select className="w-full px-3 py-2 rounded-lg border border-border text-[15px] bg-surface focus:outline-none focus:border-primary">
                <option>Selecciona tu carrera</option>
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
              <select className="w-full px-3 py-2 rounded-lg border border-border text-[15px] bg-surface focus:outline-none focus:border-primary">
                <option>Selecciona tu ciclo</option>
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
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CONTRASEÑA</label>
              <input type="password" placeholder="Mínimo 8 caracteres"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CONFIRMAR CONTRASEÑA</label>
              <input type="password" placeholder="Repite tu contraseña"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
            </div>

            <label className="col-span-2 flex items-center gap-2 text-[15px] text-text-muted">
              <input type="checkbox" className="w-4 h-4 accent-primary" />
              Acepto los <a href="/#preguntas-frecuentes" className="text-primary font-semibold hover:underline">términos del programa</a>
            </label>

            <Link to="/registro/exito"
              className="col-span-2 w-full py-3 text-center rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Crear cuenta
            </Link>

            <p className="col-span-2 text-center text-[15px] text-text-muted">
              ¿Ya tienes cuenta? <Link to="/login" className="text-primary font-semibold hover:underline">Inicia sesión</Link>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
