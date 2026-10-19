import { Link } from "react-router-dom";

// Índice de todas las pantallas y estados (solo para la demo de la entrega).
// Cada integrante agrega aquí la sección de su historia.
export default function MapaRutas() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text px-14 py-10">
      <h1 className="text-[28px] font-bold leading-8 mb-1">Mapa de pantallas</h1>
      <p className="text-[15px] text-text-muted mb-8">Tema 4 — Tutorías entre pares · Entrega 1 (solo interfaz)</p>

      <div className="grid grid-cols-2 gap-6 items-start">
        {/* ===== Historia 1 ===== */}
        <section className="bg-surface border border-border rounded-lg shadow-card p-6">
          <h2 className="text-xl font-bold mb-4">Historia 1 · Cuenta y acceso</h2>
          <ul className="flex flex-col gap-2 text-[15px]">
            <li><Link to="/" className="text-primary font-semibold hover:underline">1.1 Landing pública</Link></li>
            <li><Link to="/login" className="text-primary font-semibold hover:underline">1.2 Inicio de sesión</Link></li>
            <li className="pl-6"><Link to="/login/error" className="text-primary hover:underline">· Credenciales incorrectas</Link></li>
            <li className="pl-6"><Link to="/login/cargando" className="text-primary hover:underline">· Botón en carga</Link></li>
            <li><Link to="/registro" className="text-primary font-semibold hover:underline">1.3 Registro</Link></li>
            <li className="pl-6"><Link to="/registro/validacion" className="text-primary hover:underline">· Validación en línea</Link></li>
            <li className="pl-6"><Link to="/registro/exito" className="text-primary hover:underline">· Modal cuenta creada</Link></li>
            <li><Link to="/recuperar" className="text-primary font-semibold hover:underline">1.4 Recuperar contraseña · paso 1</Link></li>
            <li className="pl-6"><Link to="/recuperar/enviado" className="text-primary hover:underline">· Paso 2 · revisa tu correo</Link></li>
            <li className="pl-6"><Link to="/recuperar/nueva" className="text-primary hover:underline">· Paso 3 · nueva contraseña</Link></li>
            <li><Link to="/mi-cuenta" className="text-primary font-semibold hover:underline">1.5 Mi cuenta</Link></li>
            <li><Link to="/403" className="text-primary font-semibold hover:underline">1.6 Acceso denegado (403)</Link></li>
            <li><Link to="/pagina-que-no-existe" className="text-primary font-semibold hover:underline">1.6 Página no encontrada (404)</Link></li>
          </ul>
        </section>


        {/* ===== Historia 2 ===== */}
        <section className="bg-surface border border-border rounded-lg shadow-card p-6">
          <h2 className="text-xl font-bold mb-4">Historia 2 · Ficha y disponibilidad del tutor</h2>
          <ul className="flex flex-col gap-2 text-[15px]">
            <li><Link to="/tutor/perfil" className="text-primary font-semibold hover:underline">2.1 Mi perfil de tutor · publicado</Link></li>
            <li className="pl-6"><Link to="/tutor/perfil/inactivo" className="text-primary hover:underline">· Perfil inactivo</Link></li>
            <li className="pl-6"><Link to="/tutor/perfil/incompleto" className="text-primary hover:underline">· Activo con ficha incompleta</Link></li>
            <li><Link to="/tutor/cursos" className="text-primary font-semibold hover:underline">2.2 Mis cursos</Link></li>
            <li className="pl-6"><Link to="/tutor/cursos/vacio" className="text-primary hover:underline">· Estado vacío</Link></li>
            <li><Link to="/tutor/disponibilidad" className="text-primary font-semibold hover:underline">2.3 Disponibilidad semanal</Link></li>
            <li><Link to="/tutor/disponibilidad/excepciones" className="text-primary font-semibold hover:underline">2.4 Excepciones por fecha</Link></li>
            <li><Link to="/tutores/camila-quispe" className="text-primary font-semibold hover:underline">2.5 Ficha pública del tutor</Link></li>
          </ul>
        </section>

        {/* ===== Historia 3 ===== */}
        <section className="bg-surface border border-border rounded-lg shadow-card p-6">
          <h2 className="text-xl font-bold mb-4">Historia 3 · Directorio de tutores</h2>
          <ul className="flex flex-col gap-2 text-[15px]">
            <li><Link to="/directorio" className="text-primary font-semibold hover:underline">3.1 Directorio con resultados</Link></li>
            <li><Link to="/tutor" className="text-primary font-semibold hover:underline">3.2 Detalle del tutor con selección de bloque</Link></li>
            <li><Link to="/tutor-sin-horarios" className="text-primary font-semibold hover:underline">3.3 Tutor sin bloques libres</Link></li>
          </ul>
        </section>

        {/* ===== Historia 4 ===== */}
        <section className="bg-surface border border-border rounded-lg shadow-card p-6">
          <h2 className="text-xl font-bold mb-4">Historia 4 · Agenda de sesiones</h2>
          <ul className="flex flex-col gap-2 text-[15px]">
            <li><Link to="/solicitar-sesion" className="text-primary font-semibold hover:underline">4.1 Modal de solicitud</Link></li>
            <li><Link to="/mis-sesiones" className="text-primary font-semibold hover:underline">4.2 Mis sesiones</Link></li>
            <li><Link to="/solicitudes" className="text-primary font-semibold hover:underline">4.3 Solicitudes recibidas</Link></li>
            <li><Link to="/proponer-horario" className="text-primary font-semibold hover:underline">4.4 Modal · proponer horario alternativo</Link></li>
            <li><Link to="/detalle-sesion" className="text-primary font-semibold hover:underline">4.5 Detalle de la sesión</Link></li>
          </ul>
        </section>

        {/* ===== Historia 5 ===== */}
        <section className="bg-surface border border-border rounded-lg shadow-card p-6">
          <h2 className="text-xl font-bold mb-4">Historia 5 · Desarrollo y cierre</h2>
          <ul className="flex flex-col gap-2 text-[15px]">
            <li><Link to="/cierre-sesion" className="text-primary font-semibold hover:underline">5.1 Cierre de la sesión</Link></li>
            <li><Link to="/material-compartido" className="text-primary font-semibold hover:underline">5.2 Material compartido</Link></li>
            <li><Link to="/historial-sesiones" className="text-primary font-semibold hover:underline">5.3 Historial de sesiones</Link></li>
            <li><Link to="/resumen-horas" className="text-primary font-semibold hover:underline">5.4 Resumen de horas</Link></li>
          </ul>
        </section>

        {/* Historias 6 y 7: las agregan los demás integrantes */}
      </div>
    </div>
  );
}
