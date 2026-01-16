import '../scss/Appartment.scss'
import datas from "../../data/datas.json"
import { useParams } from 'react-router-dom'
import Rate from './Rate'
import Tags from './Tags'
import Collapse from './Collapse'

function Appartment() {
  const { id } = useParams(); // PARAMETRE QUI REVOIE VERS L'URL APPARTMENT SUIVANT L'ID 
  const currentaApartment = datas.DatasHebergements.find(item => item.id == id); // CONTIENT l'ID CORRECTE SUIVANT L'URL 

  return (
    <div>
      <div className='appartment'>
        <div className='appartment__info'>
          <p className='appartment__title'>{currentaApartment.title}</p>
          <p className='appartment__loc'>{currentaApartment.location}</p>
            <Tags />
        </div>
        <div className='appartment__host'>
          <div className='appartment__name-img'>
            <p className='appartment__name'>{currentaApartment.host.name}</p>
            <img className='appartment__img' src={currentaApartment.host.picture} alt="images du propriétaire" />
          </div>
          <div className='appartment__stars'>
            {/* RATING = AU RATING DES APPARTEMENTS DES DATAS JSON */}
            <Rate rating={currentaApartment.rating} /> 
          </div>
        </div>
      </div>
      <Collapse type="apartment" />
    </div>
  )
};

export default Appartment;