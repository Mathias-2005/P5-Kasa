import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../js/ErrorPage'
import Home from '../js/Home'
import About from '../js/About'
import Header from '../js/Header'
import Footer from '../js/Footer'
import Accommodation from '../js/Accommodation'

function Routing() {

  return <div>
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
};

export default Routing;