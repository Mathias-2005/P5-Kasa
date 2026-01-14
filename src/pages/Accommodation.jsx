import { useParams } from 'react-router-dom'
import datas from "../data/datas.json"
import Carrousel from '../components/js/Carrousel'
import Appartment from '../components/js/Appartment'
import ErrorPage from './ErrorPage'

function Accommodation() {
  const { id } = useParams()
  const accommodation = datas.DatasHebergements.find(item => item.id === id)

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