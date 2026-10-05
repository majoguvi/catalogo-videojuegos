import './Sidebar.css'

const opciones = [
  { id: 'explorar', etiqueta: 'Explorar' },
  { id: 'generos', etiqueta: 'Géneros' },
  { id: 'favoritos', etiqueta: 'Mis Favoritos' },
]

function Sidebar({ seccionActiva, onCambiarSeccion }) {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar__list">
          {opciones.map((opcion) => (
            <li key={opcion.id}>
              <button
                className={`sidebar__item ${
                  seccionActiva === opcion.id ? 'sidebar__item--active' : ''
                }`}
                onClick={() => onCambiarSeccion(opcion.id)}
              >
                {opcion.etiqueta}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar