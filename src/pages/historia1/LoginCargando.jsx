import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.2 Estado · botón en carga, campos deshabilitados
export default function LoginCargando() {
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
              <input type="email" defaultValue="camila.quispe@aloe.ulima.edu.pe" disabled
                className="w-full px-3 py-2 rounded-lg border border-border bg-bg text-text-muted text-[15px] cursor-not-allowed" />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-wide text-text-muted mb-1">CONTRASEÑA</label>
              <input type="password" defaultValue="contraseña" disabled
                className="w-full px-3 py-2 rounded-lg border border-border bg-bg text-text-muted text-[15px] cursor-not-allowed" />
            </div>

            <button type="button" disabled
              className="w-full py-3 rounded-lg font-semibold bg-primary/70 text-white flex items-center justify-center gap-2 cursor-wait">
              <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              Ingresando…
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
