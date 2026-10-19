import { Link } from "react-router-dom";

// Modal de éxito que aparece sobre el Registro (1.3).
export default function ModalCuentaCreada() {
  return (
    <div className="fixed inset-0 z-30 bg-text/50 flex items-center justify-center">
      <div className="w-120 bg-surface rounded-lg shadow-card p-8 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-success/10 text-success flex items-center justify-center text-2xl font-bold">
          ✓
        </div>

        <h2 className="text-xl font-bold text-text mb-2">Cuenta creada</h2>
        <p className="text-[15px] text-text-muted mb-6">
          Enviamos un enlace de verificación a{" "}
          <span className="font-semibold text-text">camila.quispe@aloe.ulima.edu.pe</span>. Es válido por 24 horas.
        </p>

        <div className="flex justify-center gap-3">
          <Link to="/directorio" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
            Ir al directorio
          </Link>
          <button type="button" className="px-4 py-2 rounded-lg font-semibold border border-border text-primary hover:bg-primary-soft">
            Reenviar correo
          </button>
        </div>
      </div>
    </div>
  );
}
