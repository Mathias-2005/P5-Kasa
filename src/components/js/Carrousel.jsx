import { useState } from 'react';
import datas from "../data/datas.json";
import { useParams } from 'react-router-dom';
import '../scss/Carrousel.scss'

function Carrousel() {
    const { id } = useParams();
    const carrousel = datas.DatasHebergements.find(item => item.id === id);
    const [currentIndex, setCurrentIndex] = useState(0);

    // EN CAS D'ERREUR DANS L'URL ID
    if (!carrousel) {
        return <div>Hébergement non trouvé</div>;
    };

    const PrevPictures = () => {
        setCurrentIndex((Index) =>
            Index === 0 ? carrousel.pictures.length - 1 : Index - 1
        );
    };

    const NextPictures = () => {
        setCurrentIndex((Index) =>
            Index === carrousel.pictures.length - 1 ? 0 : Index + 1
        );
    };

    return (
        <div className="carrousel">
            <img src={carrousel.pictures[currentIndex]}
                alt="Photo d'hébergements"
                className='carrousel__pictures' />
            <div className='carrousel__arrows'>
                <svg onClick={PrevPictures}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={carrousel.pictures.length <= 1 ? 'carrousel__arrow-none' : 'carrousel__arrow-left'}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <svg onClick={NextPictures}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={carrousel.pictures.length <= 1 ? 'carrousel__arrow-none' : 'carrousel__arrow-right'}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            {carrousel.pictures.length > 1 && (
                <p className="carrousel__slideshow">{currentIndex + 1}/{carrousel.pictures.length}</p>
            )}
        </div>
    );
};

export default Carrousel;