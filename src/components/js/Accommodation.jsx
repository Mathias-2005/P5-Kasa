import { useParams } from 'react-router-dom';
import datas from "../data/datas.json";
import Carrousel from '../js/Carrousel';
import Appartment from '../js/Appartment';
import ErrorPage from '../js/ErrorPage';

function Accommodation() {
  const { id } = useParams();

  const accommodation = datas.DatasHebergements.find(item => item.id === id);

  // EN CAS D'ERREUR DANS L'URL ID
  if (!accommodation) {
    return <div>
      <ErrorPage />
    </div>;
  }

  return (
    <div>
      <Carrousel />
      <Appartment />
    </div>
  );
}

export default Accommodation;