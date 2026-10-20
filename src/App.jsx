import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"

import MapaRutas from "./pages/MapaRutas"

// Historia 1 · Cuenta y acceso
import Landing from "./pages/historia1/Landing"
import Login from "./pages/historia1/Login"
import LoginError from "./pages/historia1/LoginError"
import LoginCargando from "./pages/historia1/LoginCargando"
import Registro from "./pages/historia1/Registro"
import RegistroValidacion from "./pages/historia1/RegistroValidacion"
import RegistroExito from "./pages/historia1/RegistroExito"
import RecuperarContrasena from "./pages/historia1/RecuperarContrasena"
import RecuperarEnviado from "./pages/historia1/RecuperarEnviado"
import RecuperarNueva from "./pages/historia1/RecuperarNueva"
import MiCuenta from "./pages/historia1/MiCuenta"
import AccesoDenegado from "./pages/historia1/AccesoDenegado"
import NoEncontrado from "./pages/historia1/NoEncontrado"

// Historia 2 · Ficha y disponibilidad del tutor
import PerfilTutor from "./pages/historia2/PerfilTutor"
import PerfilTutorInactivo from "./pages/historia2/PerfilTutorInactivo"
import PerfilTutorIncompleto from "./pages/historia2/PerfilTutorIncompleto"
import MisCursos from "./pages/historia2/MisCursos"
import MisCursosVacio from "./pages/historia2/MisCursosVacio"
import Disponibilidad from "./pages/historia2/Disponibilidad"
import Excepciones from "./pages/historia2/Excepciones"
import FichaPublicaTutor from "./pages/historia2/FichaPublicaTutor"

// Historia 3 · Directorio de tutores
import { Directorio, DetalleTutor, TutorSinHorarios } from "./pages/historia3/Historia3"

// Historia 4 · Agenda de sesiones
import { SolicitarSesion, MisSesiones, Solicitudes, ProponerHorario, DetalleSesion } from "./pages/historia4/Historia4"

// Historia 5 · Desarrollo y cierre
import { CierreSesion, MaterialCompartido, HistorialSesiones, ResumenHoras } from "./pages/historia5/Historia5"
import { LayoutRol, ConRol } from "./components/historia5/RolCompartido"

// Historia 6 · Valoraciones
import { MisCalificaciones, CalificarSesion, ValoracionesTutor, RankingTutores } from "./pages/historia6/Historia6"
import LayoutValoraciones from "./components/historia6/LayoutValoraciones"

// Historia 7 · Panel del coordinador
import { Tutores, Suspender, Usuarios, Tablero } from "./pages/historia7/Historia7"

export default function App(){
    return <BrowserRouter>
        <Routes>
            <Route path="/mapa" element={ <MapaRutas/> } />

            {/* ===== Historia 1 ===== */}
            <Route path="/" element={ <Landing/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/login/error" element={ <LoginError/> } />
            <Route path="/login/cargando" element={ <LoginCargando/> } />
            <Route path="/registro" element={ <Registro/> } />
            <Route path="/registro/validacion" element={ <RegistroValidacion/> } />
            <Route path="/registro/exito" element={ <RegistroExito/> } />
            <Route path="/recuperar" element={ <RecuperarContrasena/> } />
            <Route path="/recuperar/enviado" element={ <RecuperarEnviado/> } />
            <Route path="/recuperar/nueva" element={ <RecuperarNueva/> } />
            <Route path="/mi-cuenta" element={ <MiCuenta/> } />
            <Route path="/403" element={ <AccesoDenegado/> } />

            {/* ===== Historia 2 ===== */}
            <Route path="/tutor/perfil" element={ <PerfilTutor/> } />
            <Route path="/tutor/perfil/inactivo" element={ <PerfilTutorInactivo/> } />
            <Route path="/tutor/perfil/incompleto" element={ <PerfilTutorIncompleto/> } />
            <Route path="/tutor/cursos" element={ <MisCursos/> } />
            <Route path="/tutor/cursos/vacio" element={ <MisCursosVacio/> } />
            <Route path="/tutor/disponibilidad" element={ <Disponibilidad/> } />
            <Route path="/tutor/disponibilidad/excepciones" element={ <Excepciones/> } />
            <Route path="/tutores/camila-quispe" element={ <FichaPublicaTutor/> } />

            {/* ===== Historia 3 ===== */}
            <Route path="/directorio" element={ <Directorio/> } />
            <Route path="/tutor" element={ <DetalleTutor/> } />
            <Route path="/tutor-sin-horarios" element={ <TutorSinHorarios/> } />

            {/* ===== Historia 4 ===== */}
            <Route path="/solicitar-sesion" element={ <SolicitarSesion/> } />
            <Route path="/mis-sesiones" element={ <MisSesiones/> } />
            <Route path="/solicitudes" element={ <Solicitudes/> } />
            <Route path="/proponer-horario" element={ <ProponerHorario/> } />
            <Route path="/detalle-sesion" element={ <DetalleSesion/> } />
            {/* Ruta que ya usa el HeaderTutor de la Historia 2 → misma página de la Historia 4 */}
            <Route path="/tutor/solicitudes" element={ <Solicitudes/> } />

            {/* ===== Historia 5 ===== */}
            {/* LayoutRol guarda el rol (Estudiante / Tutor) que comparten estas páginas */}
            <Route element={ <LayoutRol/> }>
                <Route path="/cierre-sesion" element={ <ConRol pagina={CierreSesion}/> } />
                <Route path="/material-compartido" element={ <ConRol pagina={MaterialCompartido}/> } />
                <Route path="/historial-sesiones" element={ <ConRol pagina={HistorialSesiones}/> } />
                <Route path="/resumen-horas" element={ <ConRol pagina={ResumenHoras}/> } />
                {/* "Mis sesiones" del HeaderTutor de la Historia 2 → historial del tutor */}
                <Route path="/tutor/sesiones" element={ <ConRol pagina={HistorialSesiones}/> } />
            </Route>

            {/* ===== Historia 6 ===== */}
            {/* LayoutValoraciones da a estas páginas los datos de ValoracionesProvider */}
            <Route element={ <LayoutValoraciones/> }>
                <Route path="/mis-calificaciones" element={ <MisCalificaciones/> } />
                <Route path="/calificar-sesion/:sesionId" element={ <CalificarSesion/> } />
                <Route path="/editar-calificacion/:calificacionId" element={ <CalificarSesion/> } />
                <Route path="/valoraciones-tutor/:tutorId" element={ <ValoracionesTutor/> } />
                <Route path="/ranking-tutores" element={ <RankingTutores/> } />
            </Route>
            {/* "Ver reseñas" de la Ficha pública (Historia 2) → opiniones de Camila */}
            <Route path="/tutores/camila-quispe/resenas" element={ <Navigate to="/valoraciones-tutor/camila" replace/> } />

            {/* ===== Historia 7 ===== */}
            <Route path="/coordinador" element={ <Navigate to="/coordinador/tutores" replace/> } />
            <Route path="/coordinador/tutores" element={ <Tutores/> } />
            <Route path="/coordinador/tutores/suspender" element={ <Suspender/> } />
            <Route path="/coordinador/usuarios" element={ <Usuarios/> } />
            <Route path="/coordinador/tablero" element={ <Tablero/> } />

            {/* 404: debe ir SIEMPRE al final, atrapa cualquier URL que no exista */}
            <Route path="*" element={ <NoEncontrado/> } />
        </Routes>
    </BrowserRouter>
}
