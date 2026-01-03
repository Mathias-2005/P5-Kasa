import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './scss/App.scss'
import Errorpage from './Errorpage'
import Home from './Home'
import About from './About'
import Header from './Header'
import Footer from './Footer'
import Hosting from './Hosting'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<Errorpage />} />
          <Route path='/Hosting' element={<Hosting />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )

}

export default App
