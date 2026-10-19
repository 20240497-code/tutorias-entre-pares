import Registro from "./Registro";
import ModalCuentaCreada from "../../components/historia1/ModalCuentaCreada";

// 1.3 Estado · modal «Cuenta creada» sobre el formulario de registro.
// Reutiliza la página Registro tal cual y pone el modal encima.
export default function RegistroExito() {
  return (
    <>
      <Registro />
      <ModalCuentaCreada />
    </>
  );
}
