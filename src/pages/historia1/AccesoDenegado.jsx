import { Link } from "react-router-dom";
import HeaderEstudiante from "../../components/compartidos/HeaderEstudiante";
import Footer from "../../components/compartidos/Footer";

// 1.6 Acceso denegado (403) · ROL: ESTUDIANTE intentando entrar al panel del coordinador
export default function AccesoDenegado() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderEstudiante />

      <main className="flex-1 px-14 py-24 flex justify-center items-start">
        <div className="max-w-xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-danger/10 text-danger flex items-center justify-center text-3xl font-bold">
            !
          </div>
          <p className="text-xs font-semibold tracking-wide text-danger mb-2">ERROR 403</p>
          <h1 className="text-[28px] font-bold leading-8 mb-3">No tienes permiso para ver esta página</h1>
          <p className="text-[15px] text-text-muted mb-8">
            Esta sección pertenece al panel del coordinador del programa. Si crees que es un error, escribe a{" "}
            <a href="mailto:tutorias@ulima.edu.pe" className="font-semibold text-primary hover:underline">tutorias@ulima.edu.pe</a>{" "}
            indicando tu código de alumno.
          </p>
          <div className="flex justify-center gap-3">
            <Link to="/directorio" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Volver al directorio
            </Link>
            <Link to="/mis-sesiones" className="px-4 py-2 rounded-lg font-semibold border border-border text-primary hover:bg-primary-soft">
              Ir a mis sesiones
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
