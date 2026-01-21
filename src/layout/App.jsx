import '../layout/App.scss'
import Header from '../components/js/Header'
import Footer from '../components/js/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App;