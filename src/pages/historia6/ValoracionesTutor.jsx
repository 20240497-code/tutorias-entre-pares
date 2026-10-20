import { escalaInterfaz as escala } from '../../components/compartidos/escalaInterfaz'
import { Link } from 'react-router-dom'
import { Avatar } from '../../components/historia6/Comunes'
import { Estrellas, FiltroVisual, VistaHU6 } from '../../components/historia6/Valoraciones'

const comentarios = [
  { nombre: 'Joaquín Medina Talledo', curso: 'MA101 Cálculo I', fecha: '05/09/2026', estrellas: 5, texto: 'Resolvió todas mis dudas de integrales y me dejó una guía para practicar antes del parcial.' },
  { nombre: 'Daniela Ríos Camacho', curso: 'ES210 Estadística Aplicada', fecha: '26/08/2026', estrellas: 4, texto: 'Muy paciente con las pruebas de hipótesis. Me habría gustado revisar un ejercicio más de regresión.' },
  { nombre: 'Piero Alcántara Núñez', curso: 'FI202 Física II', fecha: '29/08/2026', estrellas: 5, texto: 'Explicó circuitos con esquemas propios y quedamos con tarea para la siguiente sesión.' },
]

export function ResenasTutor() {
  return <div className="grid items-stretch gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
    <section aria-label="Resumen de reseñas" className="rounded-lg border border-border bg-white p-5">
      <div className="mt-1 grid grid-cols-[120px_minmax(0,1fr)] items-center gap-6">
        <div className="text-center"><strong className="block text-[40px] leading-12 font-bold">4.8</strong><div className="mt-1"><Estrellas size={20} gap={2} /></div><p className={`${escala.cuerpo} mt-1 text-text-muted`}>31 reseñas</p></div>
        <div className="grid gap-3">
          {[[5, 23, 'w-[74.2%]'], [4, 6, 'w-[19.4%]'], [3, 2, 'w-[6.5%]'], [2, 0, 'w-0'], [1, 0, 'w-0']].map(([puntaje, total, ancho]) => <div key={puntaje} className="flex items-center gap-3 text-[13px] leading-[18px] text-text-muted" aria-label={`${puntaje} estrellas: ${total} reseñas`}>
            <span className="w-3 shrink-0">{puntaje}</span><div className="h-2 flex-1 overflow-hidden rounded-full bg-border"><div className={`h-full bg-primary ${ancho}`} /></div><span className="w-7 text-right">{total}</span>
          </div>)}
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-3 gap-2">
        {[['Claridad', '4.9'], ['Puntualidad', '4.6'], ['Dominio', '4.9']].map(([nombre, promedio]) => <div key={nombre} className="rounded-lg border border-border bg-bg p-3"><dt className={`${escala.auxiliar} text-text-muted`}>{nombre}</dt><dd className="mt-1 text-xl leading-7 font-semibold">{promedio}</dd></div>)}
      </dl>
    </section>
    <section aria-label="Comentarios de estudiantes">
      <div className="mb-3.5 flex items-center justify-between gap-4"><h2 className={`${escala.tituloSeccion} text-primary`}>Comentarios</h2><FiltroVisual etiqueta="Filtrar reseñas por puntaje">Puntaje: todos</FiltroVisual></div>
      <div className="grid gap-3">
        {comentarios.map((comentario) => <article key={comentario.nombre} className="rounded-lg border border-border bg-white px-5 py-4">
          <div className="flex items-start justify-between gap-4"><div><h3 className={escala.subtitulo}>{comentario.nombre}</h3><p className={`${escala.auxiliar} mt-1 text-text-muted`}>{comentario.curso} · {comentario.fecha}</p></div><span className="pt-1"><Estrellas valor={comentario.estrellas} size={20} gap={3} /></span></div>
          <p className={`${escala.cuerpo} mt-3`}>{comentario.texto}</p>
        </article>)}
      </div>
      <button type="button" className={`${escala.botonSecundario} mt-4 w-full`}>Ver las 31 reseñas</button>
    </section>
  </div>
}

export default function ValoracionesTutor() {
  return <VistaHU6 publico>
    <div className={`${escala.auxiliar} mb-4 text-text-muted`}><Link to="/directorio">Directorio</Link> › Camila Quispe Andrade › Reseñas</div>
    <section className="mb-5 flex flex-wrap items-center gap-6 rounded-lg border border-border bg-white p-6">
      <Avatar grande />
      <div className="flex-1"><h1 className={escala.tituloPantalla}>Camila Quispe Andrade</h1><p className={`${escala.cuerpo} mt-1 text-text-muted`}>Ing. Industrial · 8.º ciclo · MA101 · ES210 · FI202</p></div>
      <button type="button" className={escala.botonPrimario}>Solicitar sesión</button>
    </section>
    <ResenasTutor />
  </VistaHU6>
}
