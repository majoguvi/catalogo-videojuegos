import { useEffect } from 'react'
import './DetalleModal.css'

function DetalleModal({ juego, esFavorito, onToggleFavorito, onCerrar }) {
  useEffect(() => {
    const manejarTecla = (evento) => {
      if (evento.key === 'Escape') onCerrar()
    }
    window.addEventListener('keydown', manejarTecla)
    return () => window.removeEventListener('keydown', manejarTecla)
  }, [onCerrar])

  return (
    <div className="modal__overlay" onClick={onCerrar}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalles de ${juego.titulo}`}
        onClick={(evento) => evento.stopPropagation()}
      >
        <img className="modal__img" src={juego.imagen} alt={`Portada de ${juego.titulo}`} />
        <div className="modal__body">
          <span className="modal__tag">{juego.genero}</span>
          <h3 className="modal__title">{juego.titulo}</h3>
          <p className="modal__studio">{juego.estudio}</p>
          <p className="modal__description">{juego.descripcion}</p>
          <div className="modal__actions">
            <button className="modal__btn modal__btn--primary" onClick={onToggleFavorito}>
              {esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </button>
            <button className="modal__btn" onClick={onCerrar}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleModal