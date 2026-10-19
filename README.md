<div align="center">

# 🎓 Tutorías entre pares

**Plataforma que conecta estudiantes que necesitan reforzar un curso con estudiantes que se ofrecen como tutores.**

Programación Web · Universidad de Lima · Tema 4

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Estado](https://img.shields.io/badge/Entrega_1-en_progreso-E0A03A)

</div>

---

## 📸 Vista previa

<table>
  <tr>
    <td align="center"><b>Landing pública</b><br><img src="docs/capturas/landing.png" width="400"></td>
    <td align="center"><b>Registro</b><br><img src="docs/capturas/registro.png" width="400"></td>
  </tr>
  <tr>
    <td align="center"><b>Mi perfil de tutor</b><br><img src="docs/capturas/perfil-tutor.png" width="400"></td>
    <td align="center"><b>Disponibilidad semanal</b><br><img src="docs/capturas/disponibilidad.png" width="400"></td>
  </tr>
</table>

---

## 📋 Avance de la Entrega 1 (solo interfaz)

| Historia | Tema | Responsable | Estado |
| :---: | --- | --- | :---: |
| 1 | Cuenta y acceso | Rodrigo | ✅ Completa |
| 2 | Ficha y disponibilidad del tutor | Rodrigo | ✅ Completa |
| 3 | Directorio de tutores | NOMBRE | ⏳ Pendiente |
| 4 | Agenda de sesiones | NOMBRE | ⏳ Pendiente |
| 5 | Desarrollo y cierre | NOMBRE | ⏳ Pendiente |
| 6 | Valoraciones | NOMBRE | ⏳ Pendiente |
| 7 | Panel del coordinador | NOMBRE | ⏳ Pendiente |

> ✅ Completa · 🚧 En progreso · ⏳ Pendiente

<details>
<summary><b>Ver detalle de pantallas de las Historias 1 y 2</b></summary>

### Historia 1 · Cuenta y acceso

| Pantalla | Estados incluidos | Ruta |
| --- | --- | --- |
| 1.1 Landing pública | — | `/` |
| 1.2 Inicio de sesión | credenciales incorrectas · cargando | `/login` |
| 1.3 Registro | validación en línea · cuenta creada | `/registro` |
| 1.4 Recuperar contraseña | pasos 1, 2 y 3 | `/recuperar` |
| 1.5 Mi cuenta | — | `/mi-cuenta` |
| 1.6 Errores 403 y 404 | — | `/403` |

### Historia 2 · Ficha y disponibilidad del tutor

| Pantalla | Estados incluidos | Ruta |
| --- | --- | --- |
| 2.1 Mi perfil de tutor | inactivo · ficha incompleta | `/tutor/perfil` |
| 2.2 Mis cursos | estado vacío | `/tutor/cursos` |
| 2.3 Disponibilidad semanal | — | `/tutor/disponibilidad` |
| 2.4 Excepciones por fecha | — | `/tutor/disponibilidad/excepciones` |
| 2.5 Ficha pública del tutor | — | `/tutores/camila-quispe` |

</details>

---

## 🚀 Cómo correr el proyecto

```bash
git clone https://github.com/20240497-code/tutorias-entre-pares.git
cd tutorias-entre-pares
npm install
npm run dev
```

Abre **http://localhost:5173/mapa** para ver el índice de todas las pantallas.

---

## 🗂️ Estructura

```
src/
├── App.jsx              rutas de toda la app
├── App.css              Tailwind + colores del sistema de diseño
├── components/
│   ├── compartidos/     headers y footer (los usan todas las historias)
│   └── historiaN/       componentes propios de cada historia
└── pages/
    ├── MapaRutas.jsx    índice de pantallas
    └── historiaN/       páginas de cada historia
```

---

## 🤝 Reglas para integrar

1. Trabaja solo en `pages/historiaN/` y `components/historiaN/`.
2. Usa los headers y el `Footer` de `components/compartidos/`; no crees otros.
3. Agrega tus rutas en `App.jsx` **antes** de la ruta `*` (404).
4. Agrega tu historia en `pages/MapaRutas.jsx`.
5. Usa los colores del tema (`bg-primary`, `text-text-muted`…), no códigos hex.

---

## 🎨 Sistema de diseño

| Color | Hex | Clase |
| --- | --- | --- |
| Primario | `#3B3596` | `bg-primary` |
| Primario oscuro | `#2B2670` | `bg-primary-dark` |
| Acento | `#E0A03A` | `bg-accent` |
| Éxito | `#1E7F4D` | `text-success` |
| Peligro | `#B4322B` | `text-danger` |

Tipografía: **Source Sans 3** · Escritorio 1920 × 1080
