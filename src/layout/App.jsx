import '../layout/App.scss'
import Header from '../components/js/Header'
import Footer from '../components/js/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* RENVOIE TOUTES LES DIFFRENTES PAGES SELON L'URL */}
      <Footer />
    </>
  )
}

export default App;