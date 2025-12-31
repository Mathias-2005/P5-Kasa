import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Errorpage from './Errorpage'
import Home from './Home'
import About from './About'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={<Errorpage />} />
        <Route  />
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App
