import '../scss/Footer.scss'

function Footer() {
  return (
      <footer className='footer'>
        <div>
          <img src="/src/assets/images/LOGOWHITE.png" 
          alt="Logo Kasa" />
        </div>
        <div className='footer__content'>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
  )
};

export default Footer;