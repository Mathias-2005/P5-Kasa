import { Link } from 'react-router-dom'
import './scss/Header.scss'

function Header() {

  return <div>
    <nav className='navbar'>
      <div>
        <img src="/src/assets/images/LOGORED.png" className='navbar__logo' alt="Logo Kasa" />
      </div>
      <div>
        <Link to="/" className='navbar__content'>Accueil</Link>
        <Link to="About" className='navbar__content'>A Propos</Link>
      </div>
    </nav>
  </div>
};

export default Header;