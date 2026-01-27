import '../scss/Header.scss'
import { NavLink } from 'react-router-dom';
import logoRed from '../../assets/images/LOGORED.png'

function Header() {

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none'
    }
  }

  return (
    <div>
      <nav className='navbar'>
        <div>
          <img src={logoRed}
            className='navbar__logo'
            alt="Logo Kasa" />
        </div>
        <div>
          <NavLink style={navLinkStyles} to="/" className='navbar__content'>Accueil</NavLink>
          <NavLink style={navLinkStyles} to="/About" className='navbar__content'>A Propos</NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Header;