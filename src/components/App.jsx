import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './scss/App.scss'
import ErrorPage from './ErrorPage'
import Home from './Home'
import About from './About'
import Header from './Header'
import Footer from './Footer'
import Accommodation from './Accommodation'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/Accommodation/:id' element={<Accommodation />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )

}

export default App;
