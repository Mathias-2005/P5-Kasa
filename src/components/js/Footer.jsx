import '../scss/Footer.scss'
import logoWhite from '../../assets/images/LOGOWHITE.png'

function Footer() {
  return (
      <footer className='footer'>
        <div>
          <img src={logoWhite}
          alt="Logo Kasa" />
        </div>
        <div className='footer__content'>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
  )
};

export default Footer;