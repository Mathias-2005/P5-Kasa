import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Test1  from './Test'
import Test2 from './Test2'
import Errorpage from './Errorpage'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test1/>}/>
        <Route path='/test2' element={<Test2/>}/>
        <Route path='*' element={<Errorpage />} />
        <Route  />
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App
