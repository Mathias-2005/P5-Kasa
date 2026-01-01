import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.scss'
import Errorpage from './Errorpage'
import Home from './Home'
import About from './About'

function App() {

  return (
    <div>
      <BrowserRouter>
        <nav className='navbar'>
          <div>
            <img src="src/assets/images/LOGO.png" className='navbar__logo' alt="Logo Kasa" />
          </div>
          <div>
            <Link to="/" className='navbar__content'>Accueil</Link>
            <Link to="About" className='navbar__content'>A Propos</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<Errorpage />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App
