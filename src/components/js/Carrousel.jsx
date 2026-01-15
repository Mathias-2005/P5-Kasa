import { useState } from 'react'
import datas from "../../data/datas.json"
import { useParams } from 'react-router-dom'
import '../scss/Carrousel.scss'
import ErrorPage from '../../pages/ErrorPage'

function Carrousel() {
  const { id } = useParams(); // PARAMETRE QUI REVOIE VERS L'URL APPARTMENT SUIVANT L'ID 
  const carrousel = datas.DatasHebergements.find(item => item.id === id); // CONTIENT l'ID CORRECTE SUIVANT L'URL 
  const [currentIndex, setCurrentIndex] = useState(0);

  // SI L'ID CARROUSEL ET PAS BON ALORS ON AFFICHE LA PAGE D'ERREUR 404
  if (!carrousel) {
    return <div><ErrorPage /></div>
  }

  // SI INDEX ET A LA PREMIERE IMAGE ALORS ON VA A LA DERNIERE SINON ON VA A L'IMAGE PRECEDENTES
  const PrevPictures = () => {
    setCurrentIndex((Index) =>
      Index === 0 ? carrousel.pictures.length - 1 : Index - 1
    )
  }

  // SI INDEX ET A LA DERNIERE IMAGES ALORS ON REPASSE A LA PREMIERE SINON ON VA A L'IMAGE SUIVANTES
  const NextPictures = () => {
    setCurrentIndex((Index) =>
      Index === carrousel.pictures.length - 1 ? 0 : Index + 1
    )
  }

  return (
    <div className="carrousel">
      <img 
        src={carrousel.pictures[currentIndex]}
        alt="Photo d'hébergements"
        className='carrousel__pictures' 
      />
      <div className='carrousel__arrows'>
        <svg 
          onClick={PrevPictures}
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={carrousel.pictures.length <= 1 ? 'carrousel__arrow-none' : 'carrousel__arrow-left'} 
        >
          {/* SI IL Y A PLUS DE 1 IMAGES ALORS ON AFFICHE LA FLECHE DE GAUCHE */}
          <path strokeLinecap="round"
          strokeLinejoin="round" 
          d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <svg 
          onClick={NextPictures}
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={carrousel.pictures.length <= 1 ? 'carrousel__arrow-none' : 'carrousel__arrow-right'}
        >
          {/* SI IL Y A PLUS DE 1 IMAGES ALORS ON AFFICHE LA FLECHE DE DROITE */}
          <path strokeLinecap="round"
          strokeLinejoin="round" 
          d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      {/* SI IL Y A PLUS DE 1 IMAGES ON AFFICHE LE SLIDESHOW / ON AFFICHE LE CURRENT INDEX +1 '/' LE NOMBRE D'IMAGES QUE CONTIENT LE CARROUSEL */} 
      {carrousel.pictures.length > 1 && (
        <p className="carrousel__slideshow">{currentIndex + 1}/{carrousel.pictures.length}</p>
      )}
    </div>
  )
};

export default Carrousel;