import './scss/Property.scss'
import datas from "./data/datas.json";
import { useParams } from 'react-router-dom';

function Property() {
    const { id } = useParams();
    const currentProperty = datas.DatasHebergements.find(item => item.id == id);

    return <div>
        <div className='property'>
            <div className='property__info'>
                <p className='property__title'>{currentProperty.title}</p>
                <p className='property__loc'>{currentProperty.location}</p>
                <div className='property__tags'>
                    {currentProperty.tags.map((tag, i) => (
                        <span key={i} className='property__tag'>{tag}</span>
                    ))}
                </div>
            </div>
            <div className='property__host'>
                <p className='property__name'>{currentProperty.host.name}</p>
                <img className='property__img' src={currentProperty.host.picture} alt="images du propriétaire" />
            </div>
        </div>
    </div>
}

export default Property;