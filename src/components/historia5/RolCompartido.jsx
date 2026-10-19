import { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

// Las páginas de la Historia 5 reciben rol y setRol (el conmutador Estudiante / Tutor).
// LayoutRol guarda ese estado UNA vez para todas sus rutas hijas en App.jsx,
// así el rol elegido se mantiene al navegar entre páginas de la Historia 5.
export function LayoutRol() {
  const [rol, setRol] = useState('tutor');
  return <Outlet context={{ rol, setRol }} />;
}

// Envuelve una página de la Historia 5 y le pasa el rol compartido.
export function ConRol({ pagina: Pagina }) {
  const { rol, setRol } = useOutletContext();
  return <Pagina rol={rol} setRol={setRol} />;
}
