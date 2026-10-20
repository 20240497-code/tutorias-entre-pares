import { Outlet } from 'react-router-dom'
import ValoracionesProvider from '../../contexto/ValoracionesContext'

// Las páginas de la Historia 6 leen sus datos con useValoraciones(),
// así que necesitan estar dentro de ValoracionesProvider.
// En App.jsx este layout envuelve todas las rutas de la Historia 6.
export default function LayoutValoraciones() {
  return (
    <ValoracionesProvider>
      <Outlet />
    </ValoracionesProvider>
  )
}
