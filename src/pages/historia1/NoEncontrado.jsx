import { Link } from "react-router-dom";
import HeaderPublico from "../../components/compartidos/HeaderPublico";
import Footer from "../../components/compartidos/Footer";

// 1.6 Página no encontrada (404) · ROL: CUALQUIERA (aquí, visitante)
// En App.jsx se usa con path="*": aparece en cualquier URL que no exista.
export default function NoEncontrado() {
  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      <HeaderPublico />

      <main className="flex-1 px-14 py-24 flex justify-center items-start">
        <div className="max-w-xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-soft text-primary flex items-center justify-center text-3xl font-bold">
            ?
          </div>
          <p className="text-xs font-semibold tracking-wide text-primary mb-2">ERROR 404</p>
          <h1 className="text-[28px] font-bold leading-8 mb-3">No encontramos esta página</h1>
          <p className="text-[15px] text-text-muted mb-8">
            El enlace puede haber cambiado o la ficha del tutor ya no está publicada en el directorio.
          </p>
          <div className="flex justify-center gap-3">
            <Link to="/" className="px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary-dark">
              Ir al inicio
            </Link>
            <Link to="/directorio" className="px-4 py-2 rounded-lg font-semibold border border-border text-primary hover:bg-primary-soft">
              Buscar un tutor
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
