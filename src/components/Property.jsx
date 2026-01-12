import './scss/Property.scss'
import datas from "./data/datas.json";
import { useParams } from 'react-router-dom';
import CollapsePropertyDescritpion from './CollapsePropertyDescription';
import inactiveStar from '/src/assets/images/star-inactive.png';
import activeStar from '/src/assets/images/star-active.png';

function Property() {
    const { id } = useParams();
    const currentProperty = datas.DatasHebergements.find(item => item.id == id);


    function Rate(props) {
        const rating = props.rating;
        const notes = [1, 2, 3, 4, 5];


        return (
            <>
                {notes.map((note) =>
                    rating >= note ? (
                        <img
                            key={note.toString()}
                            className="property__star"
                            src={activeStar}
                            alt="star"
                        />
                    ) : (
                        <img
                            key={note.toString()}
                            className="property__star"
                            src={inactiveStar}
                            alt="star"
                        />
                    )
                )}
            </>
        );
    }



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
                <div className='property__name-img'>
                    <p className='property__name'>{currentProperty.host.name}</p>
                    <img className='property__img' src={currentProperty.host.picture} alt="images du propriétaire" />
                </div>
                <div className='property__stars'>
                    <Rate rating={currentProperty.rating} />
                </div>
            </div>
        </div>
        <CollapsePropertyDescritpion />
    </div>
}

export default Property;