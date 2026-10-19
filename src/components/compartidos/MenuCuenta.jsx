import { Link } from "react-router-dom";

// Menú de cuenta (arriba a la derecha). Se despliega al pasar el mouse
// con group-hover de Tailwind, sin JavaScript.
export default function MenuCuenta() {
  return (
    <div className="relative group h-full flex items-center">
      <button type="button" className="flex items-center gap-2">
        <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">CQ</span>
        <span className="text-[15px] text-text">Camila Q. ▾</span>
      </button>

      <div className="absolute right-0 top-full z-20 hidden group-hover:block group-focus-within:block w-56 bg-surface border border-border rounded-lg shadow-card py-2 text-[15px]">
        <p className="px-4 py-2 text-[13px] text-text-muted border-b border-border mb-1">camila.quispe@aloe.ulima.edu.pe</p>
        <Link to="/mi-cuenta" className="block px-4 py-2 hover:bg-primary-soft">Mi cuenta</Link>
        <Link to="/tutor/perfil" className="block px-4 py-2 hover:bg-primary-soft">Mi perfil de tutor</Link>
        <Link to="/" className="block px-4 py-2 text-danger hover:bg-primary-soft">Cerrar sesión</Link>
      </div>
    </div>
  );
}
