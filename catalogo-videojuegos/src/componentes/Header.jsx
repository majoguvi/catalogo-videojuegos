import './Header.css'

function Header({ sesionIniciada, onToggleSesion }) {
  return (
    <header className="header">
      <h1 className="header__title">IndiePlay - Catálogo</h1>
      <div className="header__actions">
        {sesionIniciada && <span className="header__greeting">Hola, Usuario</span>}
        <button className="header__login" onClick={onToggleSesion}>
          {sesionIniciada ? 'Cerrar Sesión' : 'Iniciar Sesión'}
        </button>
      </div>
    </header>
  )
}

export default Header