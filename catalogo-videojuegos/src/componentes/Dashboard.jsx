import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import GameCard from './GameCard'
import DetalleModal from './DetalleModal'
import './Dashboard.css'
import gta6Img from '../assets/gta6.jpg'
import redImg from '../assets/red.jpg'
import hitmanImg from '../assets/hitman.jpg'
import forzaImg from '../assets/forza.jpg'
import hogwartsImg from '../assets/hogwarts.jpg'
import fullImg from '../assets/full.jpg'

const juegos = [
  {
    id: 1,
    titulo: 'gta 6',
    estudio: 'Rockstar Games',
    pais: 'Estados Unidos',
    genero: 'Acción',
    subgenero: 'Mundo Abierto',
    etiqueta: 'El más esperado',
    acento: 'pink',
    plataformas: 'PS5 · Xbox Series X/S',
    precio: '$69.99',
    descripcion:
      'Jason y Lucía saben que tienen todo en contra, pero un golpe que parecía fácil sale mal. Así, quedan atrapados en el lado más oscuro del lugar más soleado de Estados Unidos, envueltos en una conspiración criminal que recorre todo Leonida y obligados a confiar el uno en el otro para sobrevivir.',
    imagen: gta6Img,
  },
  {
    id: 2,
    titulo: 'red dead redemption 2',
    estudio: 'Rockstar Games',
    pais: 'Estados Unidos',
    genero: 'Acción',
    subgenero: 'Mundo Abierto',
    etiqueta: 'Obra maestra',
    acento: 'orange',
    plataformas: 'PC · PS4 · Xbox One',
    precio: '$59.99',
    descripcion:
      'es un videojuego de acción y aventura de mundo abierto desarrollado por Rockstar Games que relata el ocaso del Salvaje Oeste en Estados Unidos durante el año 1899.',
    imagen: redImg,
  },
  {
    id: 3,
    titulo: 'hitman absolution',
    estudio: 'IO Interactive',
    pais: 'Dinamarca',
    genero: 'Sigilo',
    subgenero: 'Acción',
    etiqueta: 'Agente 47',
    acento: 'lilac',
    plataformas: 'PC · PS3 · Xbox 360',
    precio: '$19.99',
    descripcion:
      'Hitman es una popular serie de videojuegos de sigilo y estrategia donde controlas al Agente 47, un asesino a sueldo calvo, vestido con traje y código de barras en la nuca, creado mediante ingeniería genética.',
    imagen: hitmanImg,
  },
  {
    id: 4,
    titulo: 'forza horizon 5',
    estudio: 'Playground Games',
    pais: 'Reino Unido',
    genero: 'Carreras',
    subgenero: 'Mundo Abierto',
    etiqueta: 'Adrenalina pura',
    acento: 'orange',
    plataformas: 'PC · Xbox One · Xbox Series X/S',
    precio: '$59.99',
    descripcion:
      'Forza Horizon 5 es un videojuego de carreras en mundo abierto ambientado en una representación masiva y detallada de México.',
    imagen: forzaImg,
  },
  {
    id: 5,
    titulo: 'hogwarts legacy',
    estudio: 'Avalanche Software',
    pais: 'Estados Unidos',
    genero: 'RPG',
    subgenero: 'Mundo Abierto',
    etiqueta: 'Magia y misterio',
    acento: 'yellow',
    plataformas: 'PC · PS5 · Xbox Series X/S · Switch',
    precio: '$59.99',
    descripcion:
      'Hogwarts Legacy es un videojuego de rol de acción en mundo abierto ambientado en el siglo XIX, alrededor de 1890, un siglo antes de los eventos de Harry Potter.',
    imagen: hogwartsImg,
  },
  {
    id: 6,
    titulo: 'fall guys',
    estudio: 'Mediatonic',
    pais: 'Reino Unido',
    genero: 'Party Royale',
    subgenero: 'Multijugador',
    etiqueta: 'Caos divertido',
    acento: 'lime',
    plataformas: 'PC · PS4 · PS5 · Xbox · Switch',
    precio: 'Gratis',
    descripcion:
      'Fall Guys es un videojuego multijugador masivo en línea de tipo party royale donde decenas de jugadores controlan a personajes torpes y coloridos con forma de gominola para superar alocadas pistas de obstáculos y minijuegos eliminatorios.',
    imagen: fullImg,
  },
]

const generos = ['Todos', ...new Set(juegos.map((juego) => juego.genero))]

const textos = {
  explorar: {
    etiqueta: '01 / Explora el catálogo',
    titulo: 'Tu próximo juego indie favorito.',
  },
  generos: {
    etiqueta: '02 / Filtra por género',
    titulo: 'Encuentra tu género.',
  },
  favoritos: {
    etiqueta: '03 / Tu colección',
    titulo: 'Tus favoritos, en un solo lugar.',
  },
}

function Dashboard() {
  const [seccion, setSeccion] = useState('explorar')
  const [sesionIniciada, setSesionIniciada] = useState(false)
  const [favoritos, setFavoritos] = useState([])
  const [generoActivo, setGeneroActivo] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null)

  const toggleSesion = () => setSesionIniciada((actual) => !actual)

  const toggleFavorito = (id) => {
    setFavoritos((actual) =>
      actual.includes(id) ? actual.filter((fav) => fav !== id) : [...actual, id],
    )
  }

  let base = juegos
  if (seccion === 'generos' && generoActivo !== 'Todos') {
    base = juegos.filter((juego) => juego.genero === generoActivo)
  }
  if (seccion === 'favoritos') {
    base = juegos.filter((juego) => favoritos.includes(juego.id))
  }

  const termino = busqueda.trim().toLowerCase()
  const juegosVisibles = termino
    ? base.filter(
        (juego) =>
          juego.titulo.toLowerCase().includes(termino) ||
          juego.estudio.toLowerCase().includes(termino),
      )
    : base

  const mensajeVacio =
    seccion === 'favoritos' && favoritos.length === 0
      ? 'Aún no tienes favoritos. Usa el marcador de cualquier tarjeta para guardarlos.'
      : 'No encontramos juegos que coincidan con tu búsqueda.'

  return (
    <div className="dashboard">
      <Header sesionIniciada={sesionIniciada} onToggleSesion={toggleSesion} />
      <div className="dashboard__layout">
        <Sidebar seccionActiva={seccion} onCambiarSeccion={setSeccion} />

        <main className="dashboard__main">
          <section className="dashboard__hero">
            <div>
              <p className="dashboard__eyebrow">{textos[seccion].etiqueta}</p>
              <h2 className="dashboard__heading">{textos[seccion].titulo}</h2>
            </div>
            <p className="dashboard__counter">{juegos.length} juegos fuera de lo común</p>
          </section>

          <label className="dashboard__search">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Busca un juego o un estudio..."
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
            />
          </label>

          {seccion === 'generos' && (
            <div className="dashboard__filters">
              {generos.map((genero) => (
                <button
                  key={genero}
                  className={`dashboard__chip ${
                    genero === generoActivo ? 'dashboard__chip--active' : ''
                  }`}
                  onClick={() => setGeneroActivo(genero)}
                >
                  {genero}
                </button>
              ))}
            </div>
          )}

          <p className="dashboard__toolbar">
            Mostrando {juegosVisibles.length} de {juegos.length} juegos
          </p>

          {juegosVisibles.length === 0 ? (
            <p className="dashboard__empty">{mensajeVacio}</p>
          ) : (
            <section className="dashboard__grid">
              {juegosVisibles.map((juego) => (
                <GameCard
                  key={juego.id}
                  juego={juego}
                  esFavorito={favoritos.includes(juego.id)}
                  onToggleFavorito={() => toggleFavorito(juego.id)}
                  onVerDetalles={() => setJuegoSeleccionado(juego)}
                />
              ))}
            </section>
          )}
        </main>
      </div>

      {juegoSeleccionado && (
        <DetalleModal
          juego={juegoSeleccionado}
          esFavorito={favoritos.includes(juegoSeleccionado.id)}
          onToggleFavorito={() => toggleFavorito(juegoSeleccionado.id)}
          onCerrar={() => setJuegoSeleccionado(null)}
        />
      )}
    </div>
  )
}

export default Dashboard