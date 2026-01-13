import { useParams } from 'react-router-dom';
import datas from "./data/datas.json";
import Carrousel from './Carrousel';
import Appartment from './Appartment';

function Accommodation() {
  const { id } = useParams();

  const accommodation = datas.DatasHebergements.find(item => item.id === id);

  // EN CAS D'ERREUR DANS L'URL ID
  if (!accommodation) {
    return <div>Hébergement non trouvé</div>;
  }

  return (
    <div>
      <Carrousel />
      <Appartment />
    </div>
  );
}

export default Accommodation;