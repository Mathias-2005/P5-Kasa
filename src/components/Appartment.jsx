import './scss/Appartment.scss'
import datas from "./data/datas.json";
import { useParams } from 'react-router-dom';
import CollapseAppartment from './CollapseAppartment';
import Rate from './Rate';

function Appartment() {
    const { id } = useParams();
    const currentaApartment = datas.DatasHebergements.find(item => item.id == id);

    return <div>
        <div className='appartment'>
            <div className='appartment__info'>
                <p className='appartment__title'>{currentaApartment.title}</p>
                <p className='appartment__loc'>{currentaApartment.location}</p>
                <div className='appartment__tags'>
                    {currentaApartment.tags.map((tag, i) => (
                        <span key={i} className='appartment__tag'>{tag}</span>
                    ))}
                </div>
            </div>
            <div className='appartment__host'>
                <div className='appartment__name-img'>
                    <p className='appartment__name'>{currentaApartment.host.name}</p>
                    <img className='appartment__img' src={currentaApartment.host.picture} alt="images du propriétaire" />
                </div>
                <div className='appartment__stars'>
                    <Rate rating={currentaApartment.rating} />
                </div>
            </div>
        </div>
        <CollapseAppartment />
    </div>
}

export default Appartment;