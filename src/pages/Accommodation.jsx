import { useParams } from 'react-router-dom'
import datas from "../data/datas.json"
import Carrousel from '../components/js/Carrousel'
import Appartment from '../components/js/Appartment'
import ErrorPage from './ErrorPage'

function Accommodation() {
  const { id } = useParams() // PARAMETRE QUI REVOIE VERS L'URL APPARTMENT SUIVANT L'ID 
  const accommodation = datas.DatasHebergements.find(item => item.id === id) // CONTIENT l'ID CORRECTE SUIVANT L'URL 

  // SI L'ID DE L'APPARTMENT ET PAS BON ALORS ON AFFICHE LA PAGE D'ERREUR 404
  if (!accommodation) {
    return (
      <div>
        <ErrorPage />
      </div>
    )
  }

  return (
    <div>
      <Carrousel />
      <Appartment />
    </div>
  )
}

export default Accommodation;