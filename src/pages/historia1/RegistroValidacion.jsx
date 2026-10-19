import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.3 Estado · validación en línea del formulario (3 campos con error)
export default function RegistroValidacion() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1 px-14 py-12 flex justify-center items-start">
        <div className="w-160 bg-surface border border-border rounded-lg shadow-card p-10">
          <h1 className="text-[28px] font-bold leading-8 mb-1">Crear cuenta</h1>
          <p className="text-[15px] text-text-muted mb-6">
            Usa tu correo institucional para buscar tutores o ofrecerte como uno.
          </p>

          {/* Resumen de errores */}
          <div className="mb-6 px-4 py-3 rounded-lg bg-danger/10 border border-danger text-danger text-[15px] font-semibold">
            Revisa 3 campos antes de continuar.
          </div>

          <form className="grid grid-cols-2 gap-x-6 gap-y-5">
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

            {/* Error 1: correo no institucional */}
            <div className="col-span-2">
              <label className="block text-xs font-semibold tracking-wide text-danger mb-1">CORREO INSTITUCIONAL</label>
              <input type="email" defaultValue="camila.quispe@gmail.com"
                className="w-full px-3 py-2 rounded-lg border-2 border-danger text-[15px] focus:outline-none" />
              <p className="mt-1 text-[13px] text-danger">Debe terminar en @aloe.ulima.edu.pe</p>
            </div>

            {/* Error 2: carrera sin elegir */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-danger mb-1">CARRERA</label>
              <select className="w-full px-3 py-2 rounded-lg border-2 border-danger text-[15px] bg-surface focus:outline-none">
                <option>Selecciona tu carrera</option>
                <option>Ingeniería Industrial</option>
                <option>Ingeniería de Sistemas</option>
                <option>Ingeniería Civil</option>
                <option>Administración</option>
                <option>Economía</option>
                <option>Contabilidad</option>
                <option>Psicología</option>
              </select>
              <p className="mt-1 text-[13px] text-danger">Elige una carrera.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CICLO</label>
              <select defaultValue="8.º" className="w-full px-3 py-2 rounded-lg border border-border text-[15px] bg-surface focus:outline-none focus:border-primary">
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
              <input type="password" defaultValue="12345678"
                className="w-full px-3 py-2 rounded-lg border border-border text-[15px] focus:outline-none focus:border-primary" />
            </div>

            {/* Error 3: contraseñas distintas */}
            <div>
              <label className="block text-xs font-semibold tracking-wide text-danger mb-1">CONFIRMAR CONTRASEÑA</label>
              <input type="password" defaultValue="12345"
                className="w-full px-3 py-2 rounded-lg border-2 border-danger text-[15px] focus:outline-none" />
              <p className="mt-1 text-[13px] text-danger">Las contraseñas no coinciden.</p>
            </div>

            <label className="col-span-2 flex items-center gap-2 text-[15px] text-text-muted">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
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
