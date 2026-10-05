import './GameCard.css'

function GameCard({ juego, esFavorito, onToggleFavorito, onVerDetalles }) {
  const {
    imagen,
    titulo,
    estudio,
    pais,
    etiqueta,
    acento,
    descripcion,
    genero,
    subgenero,
    plataformas,
    precio,
  } = juego

  return (
    <article className="game-card" data-acento={acento}>
      <div className="game-card__media">
        <img className="game-card__img" src={imagen} alt={`Portada de ${titulo}`} />
        <button
          className={`game-card__fav ${esFavorito ? 'game-card__fav--active' : ''}`}
          onClick={onToggleFavorito}
          aria-label={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          title={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
              d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"
              fill={esFavorito ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <p className="game-card__tag">{etiqueta}</p>

      <div className="game-card__body">
        <h3 className="game-card__title">{titulo}</h3>
        <p className="game-card__studio">
          {estudio} · {pais}
        </p>
        <p className="game-card__description">{descripcion}</p>
        <p className="game-card__genre">
          {genero} / {subgenero}
        </p>

        <div className="game-card__footer">
          <span className="game-card__platforms">{plataformas}</span>
          <span className="game-card__price">{precio}</span>
        </div>

        <button className="game-card__btn" onClick={onVerDetalles}>
          Ver Detalles
        </button>
      </div>
    </article>
  )
}

export default GameCard