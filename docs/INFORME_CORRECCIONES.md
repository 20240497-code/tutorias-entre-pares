# Informe de correcciones de interfaz

Fecha: 20 de octubre de 2026

Proyecto: Tutorías entre pares, Programación Web

Rama de entrega: `correccion`

Punto de partida local: `8673941` (`main`)

## 1. Resumen para el grupo

Se reconstruyeron las cuatro pantallas de la Historia de Usuario 6 (Valoraciones) siguiendo los mockups oficiales. Se corrigió la navegación entre el Directorio y el Ranking, se unificaron tamaños de los elementos equivalentes entre las vistas revisadas y se reorganizó Mi cuenta para incorporar el perfil lateral y los formularios del ejemplo.

La versión final mantiene el alcance de una entrega visual: React, JSX, Tailwind CSS y datos estáticos. La HU6 no realiza peticiones HTTP, autenticación, validaciones de negocio, operaciones CRUD ni persistencia. Se conservaron las URLs existentes y se añadieron únicamente interacciones de presentación solicitadas: hover en estrellas, escritura en el comentario y cierre del modal mediante navegación.

Se utilizaron como referencias `Tema4_Mockups_f (1).pdf` y `Proyecto_PW_2026-2_Tema4_Tutorias_entre_Pares (3).docx`. El PDF contiene el sistema de diseño y las pantallas; el documento funcional exige consistencia entre vistas y reutilización de componentes comunes. Los documentos de referencia no se incorporan al repositorio.

## 2. HU6: reconstrucción de las pantallas

### 2.1 Calificación de sesión

**Situación inicial:** formulario independiente con listas desplegables para los puntajes y un panel lateral de datos de la sesión.

**Resultado:** modal centrado sobre un fondo atenuado y desenfocado de Mis sesiones, con ficha de Camila Quispe Andrade, puntaje general, claridad, puntualidad, dominio del tema y comentario. Se reprodujeron los textos y puntajes del mockup.

Las estrellas permiten previsualizar un puntaje acumulado al pasar el cursor. El efecto también se ofrece con foco de teclado y se implementa con selectores CSS de Tailwind, sin estado de React ni almacenamiento de la selección. Al retirar el hover se recupera la valoración de ejemplo. El texto auxiliar del puntaje sigue siendo estático.

El comentario dejó de ser de solo lectura y permite escribir sin guardar. La X es un enlace de React Router que cierra la vista del modal navegando a `/mis-sesiones`. Los botones Más tarde y Enviar calificación permanecen visuales.

### 2.2 Reseñas del tutor

**Situación inicial:** cabecera autenticada, varios bloques de resumen separados y opiniones basadas en los datos de demostración anteriores.

**Resultado:** cabecera pública y ficha estática de Camila, resumen lateral con promedio 4.8, distribución de 31 reseñas y promedios por aspecto. A la derecha se presentan los tres comentarios del ejemplo, el control de puntaje y el botón Ver las 31 reseñas.

El filtro, la solicitud de sesión y el botón de reseñas son representaciones visuales. Los distintos identificadores de tutor en esta ruta presentan el mismo ejemplo de Camila; no se consulta un tutor real.

### 2.3 Mis calificaciones y estado vacío

Se reemplazaron las tarjetas y controles anteriores por las tres calificaciones del mockup: Camila, Diego y Fabiana. Se incluyeron sus cursos, fechas, estrellas, comentarios, plazo de edición y acciones según el ejemplo.

Se implementó el estado vacío con el mensaje Todavía no calificas ninguna sesión y el enlace Ver mis sesiones. Para revisarlo se reutilizó el parámetro existente `?vista=pendientes`; en esta entrega muestra la variante visual vacía, no una lista funcional de sesiones pendientes.

Editar abre la ruta existente del modal. Eliminar y el filtro de curso permanecen visuales; no modifican datos.

### 2.4 Ranking de tutores

Se sustituyó la tabla anterior por seis filas compactas con posición, avatar, nombre, carrera, cursos, estrellas, promedio y número de sesiones. Se incorporaron los datos de Ariana, Camila, Sebastián, Valeria, Diego y Mateo tal como aparecen en el ejemplo. La primera posición está destacada.

Los controles de curso y carrera y el texto del mínimo de cinco calificaciones son parte del mockup estático: no se ejecuta un cálculo de ranking ni un filtro real.

### 2.5 Separación de la lógica anterior

`LayoutValoraciones.jsx` conserva el `Outlet` de React Router y dejó de montar `ValoracionesProvider`. Las vistas y componentes visuales de HU6 ya no utilizan `useValoraciones` ni escriben en `localStorage`.

Los módulos previos de contexto, servicios y datos se conservaron sin cambios finales para evitar eliminaciones innecesarias. Los datos ya guardados en el navegador no se borraron.

Durante una primera revisión se corrigieron aspectos conservando la lógica anterior. Después, por la solicitud de rehacer la entrega como mockups sin lógica, esa aproximación se sustituyó por la implementación estática descrita aquí. El CSS exclusivo creado durante esa etapa se retiró: el resultado final utiliza clases Tailwind.

## 3. Navegación entre Directorio y Ranking

Se creó `PestanasDirectorio.jsx`, reutilizado en Directorio y Ranking. Contiene Todos los tutores y Ranking por curso, implementados con `NavLink` para marcar automáticamente la pestaña activa.

Esto permite llegar al ranking desde el Directorio y regresar sin utilizar enlaces externos al flujo de la aplicación. En HU3 se añadió el componente sobre el contenido existente. No se cambió el sistema de rutas ni se eliminaron pantallas.

## 4. Consistencia de tamaños

Se detectó que HU6 utilizaba títulos de 40 px y navegación de 18 px, mientras las otras vistas tenían una escala menor. La leyenda del PDF sí especifica medidas de tipografía y estructura.

Se creó `src/components/compartidos/escalaInterfaz.js` como fuente compartida de clases Tailwind para las vistas revisadas:

| Elemento | Medida |
| --- | --- |
| Título de pantalla | 28 px, interlineado 32 px |
| Título de sección | 20 px, interlineado 28 px |
| Subtítulo o nombre | 16 px, interlineado 24 px |
| Cuerpo | 15 px, interlineado 22 px |
| Texto auxiliar | 13 px, interlineado 18 px |
| Etiqueta | 12 px, interlineado 16 px |
| Filtro de una línea | 44 px de alto |
| Botón estándar | Alto mínimo de 44 px |
| Avatar de lista | 56 × 56 px |
| Avatar de perfil | 112 × 112 px |

Los tamaños de tipografía proceden de la leyenda. Las medidas de controles y avatares se unificaron como criterio de implementación, tomando en cuenta los componentes existentes; no se presentan como medidas explícitas del PDF.

HU6 reutiliza la cabecera autenticada de Directorio y Mis sesiones: 76 px de alto, marca de 20 px y navegación de 15 px. Se corrigió además el indicador de sección activa para Mis calificaciones. Los pies conservan 84 px de alto y texto de 13 px.

Se ajustaron clases de títulos y, en Mis sesiones, filtros, nombres, metadatos, avatares y botones equivalentes. Se mantuvieron tamaños mayores para elementos de función distinta, como un avatar de perfil o una cifra de promedio.

En `App.css` se añadió únicamente `scrollbar-gutter: stable` a `html`. Esta regla reserva el espacio de la barra vertical para evitar que la cabecera se desplace horizontalmente al navegar entre páginas largas y cortas.

El alcance de esta unificación es Directorio, Agenda y HU6 en los elementos revisados, además de Mi cuenta. No se realizó una revisión completa de todos los componentes de las siete historias.

## 5. Corrección de Mi cuenta

**Diferencias encontradas:** faltaba el panel lateral de perfil; los datos personales ocupaban dos columnas de una grilla general y la contraseña aparecía a la derecha, en lugar de debajo. También faltaban datos del ejemplo y había diferencias en títulos, botones y pie.

**Cambios realizados:**

- Tarjeta lateral con marcador de foto, nombre de Camila, carrera, ciclo, Cambiar fotografía, formatos permitidos y fecha de creación de cuenta.
- Dos paneles apilados a la derecha: Datos personales y de contacto y Cambiar contraseña.
- Datos personales en dos columnas y tres campos de contraseña en una fila en escritorio.
- Títulos de sección en color primario y acciones alineadas a la derecha.
- Descartar como acción de texto y Guardar cambios como botón principal.
- Asociación de cada etiqueta con su campo mediante `htmlFor` e `id`, además de ayudas y autocompletado adecuados.
- Conservación del correo deshabilitado y de la edición nativa de los demás campos.
- Uso de la escala compartida para mantener consistencia con las otras vistas.

El pie compartido recibió la propiedad opcional `cuenta`. Solo en esta pantalla muestra Términos del programa, Ayuda y correo. Sin esa propiedad conserva los enlaces anteriores.

Las grillas se apilan en anchos menores, aunque la comparación visual principal se realizó en escritorio. Cambiar fotografía, Descartar, Guardar cambios y Actualizar contraseña continúan siendo controles visuales: no existe carga, guardado ni cambio real de credenciales.

## 6. Archivos de la entrega

| Archivo | Cambio |
| --- | --- |
| `src/App.css` | Reserva de espacio para la barra vertical. |
| `src/components/compartidos/escalaInterfaz.js` | Nuevo módulo de tamaños y clases comunes. |
| `src/components/compartidos/Footer.jsx` | Variante opcional para Mi cuenta. |
| `src/components/historias3y4/Comunes.jsx` | Indicador activo de Mis calificaciones y avatar de lista con escala común. |
| `src/components/historia6/Comunes.jsx` | Marco HU6, cabeceras, pie y avatares; reutilización de cabecera autenticada. |
| `src/components/historia6/LayoutValoraciones.jsx` | Desconexión del proveedor de datos manteniendo el enrutamiento. |
| `src/components/historia6/Valoraciones.jsx` | Estrellas, controles y estado vacío estáticos. |
| `src/components/historia6/PestanasDirectorio.jsx` | Nuevo componente de navegación Directorio/Ranking. |
| `src/pages/historia6/CalificarSesion.jsx` | Modal, hover CSS, comentario editable y enlace de cierre. |
| `src/pages/historia6/ValoracionesTutor.jsx` | Ficha pública y reseñas del ejemplo. |
| `src/pages/historia6/MisCalificaciones.jsx` | Listado y variante vacía. |
| `src/pages/historia6/RankingTutores.jsx` | Ranking estático en filas. |
| `src/pages/historia3/Historia3.jsx` | Pestañas, títulos y descripción del Directorio. |
| `src/pages/historia4/Historia4.jsx` | Ajustes de escala; estructura y navegación conservadas. |
| `src/pages/historia1/MiCuenta.jsx` | Reconstrucción de perfil lateral y formularios. |
| `README.md` | Actualización del alcance visual de HU6 y enlace al informe. |
| `docs/INFORME_CORRECCIONES.md` | Este informe. |

No se modificaron `App.jsx`, las URLs, las dependencias, la configuración de Tailwind ni los archivos de HU2, HU5 y HU7.

## 7. Verificación y límites

- `npm run build`: compilación de producción satisfactoria.
- ESLint de las vistas y componentes HU6, páginas HU3/HU4, Mi cuenta, Footer y escala compartida: sin errores nuevos en los archivos comprobados.
- `git diff --check`: sin errores de espacios.
- Comparación visual en Chrome, incluyendo revisiones a 1920 × 1080 de las pantallas corregidas.
- Medición en navegador de Mis sesiones y Mis calificaciones: cabecera de 76 px, títulos de 28/32 px, filtros de 44 px y avatares de lista de 56 px.
- Verificación de navegación en ambos sentidos entre Directorio y Ranking, ruta de edición y redirección de reseñas desde HU2.
- Comprobación del efecto acumulado de las estrellas y del comentario editable a nivel de interfaz.

El lint global sigue reportando tres errores preexistentes de `react-refresh/only-export-components`: `src/components/historia5/Comunes.jsx`, `src/components/historias3y4/Comunes.jsx` y `src/contexto/ValoracionesContext.jsx`. No se incluyeron refactorizaciones de esos módulos para resolverlos.

La entrega no constituye una implementación funcional de las reglas de negocio. No se verificaron guardado, eliminación, autenticación, carga de fotografías ni cambio real de contraseñas, ya que no forman parte de las interfaces estáticas solicitadas. Tampoco se certifica una equivalencia píxel a píxel ni una revisión exhaustiva de todos los tamaños móviles; pueden existir diferencias menores de rasterizado y de las estrellas SVG. Se priorizó la estructura de los mockups y la escala compartida solicitada posteriormente.

## 8. Cómo revisar la entrega

Con las dependencias ya instaladas, ejecutar desde la carpeta del proyecto:

```bash
npm run dev
```

Abrir la dirección que indique Vite, normalmente `http://localhost:5173`, y visitar:

| Vista | Ruta |
| --- | --- |
| Directorio y pestañas | `/directorio` |
| Mis sesiones | `/mis-sesiones` |
| Modal de calificación | `/calificar-sesion/TU-2026-0184` |
| Ruta de edición visual | `/editar-calificacion/cal-propia-1` |
| Reseñas de Camila | `/valoraciones-tutor/camila` |
| Redirección de reseñas de HU2 | `/tutores/camila-quispe/resenas` |
| Mis calificaciones | `/mis-calificaciones` |
| Variante vacía | `/mis-calificaciones?vista=pendientes` |
| Ranking | `/ranking-tutores` |
| Mi cuenta | `/mi-cuenta` |

La entrega se prepara en la rama `correccion`. Publicar esta rama no integra automáticamente los cambios en `main`; la revisión y una eventual integración quedan a cargo del grupo. No se crea un Pull Request como parte de esta solicitud.
