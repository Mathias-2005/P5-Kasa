import datas from "../../data/datas.json"
import { useState } from "react"
import { useParams } from 'react-router-dom'
import '../scss/CollapseAppartment.scss'

function CollapseAppartment() {
  const { id } = useParams(); // PARAMETRE QUI REVOIE VERS L'URL APPARTMENT SUIVANT L'ID 
  const currentAppartment = datas.DatasHebergements.find(item => item.id == id); // CONTIENT l'ID CORRECTE SUIVANT L'URL 
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); // USE STATE EN BOLLEAN DE BASE EN FALSE
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false); // USE STATE EN BOLLEAN DE BASE EN FALSE

  const toggleCollapse1 = () => {
    setIsDescriptionOpen(!isDescriptionOpen); // AU CLICK OUVRER (TRUE) / AU CLICK SI (TRUE) FERMER DONC (FALSE)
  };

  const toggleCollapse2 = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen); // AU CLICK OUVRER (TRUE) / AU CLICK SI (TRUE) FERMER DONC (FALSE)
  };

  return (
    <div className="collapses-appartment">
      <div className={`collapses-appartment__collapse ${isDescriptionOpen ? 'collapses-appartment__collapse--open' : ''}`}>
        <div className="collapses-appartment__header">
          <div className="collapses-appartment__container--arrows">
            <span className="collapses-appartment__collapse--title">Description</span>
            <img
              onClick={toggleCollapse1}
              src="/src/assets/images/arrow.png"
              alt="arrow"
              className={`collapses-appartment__collapse--title-arrow ${isDescriptionOpen ? 'collapses-appartment__collapse--title-arrow-open' : ''}`}
            />
          </div>
        </div>
        {/* SI TRUE AFFICHER LE CONTENT DESCRIPTION */}
        {isDescriptionOpen && (
          <p className="collapses-appartment__collapse--title-arrow-content-description">
            {currentAppartment.description}
          </p>
        )}
      </div>

      <div className={`collapses-appartment__collapse ${isEquipmentsOpen ? 'collapses-appartment__collapse--open' : ''}`}>
        <div className="collapses-appartment__header">
          <div className="collapses-appartment__container--arrows">
            <span className="collapses-appartment__collapse--title">Équipements</span>
            <img
              onClick={toggleCollapse2}
              src="/src/assets/images/arrow.png"
              alt="arrow"
              className={`collapses-appartment__collapse--title-arrow ${isEquipmentsOpen ? 'collapses-appartment__collapse--title-arrow-open' : ''}`}
            />
          </div>
        </div>
        {/* SI TRUE AFFICHER LE CONTENT EQUIPEMENTS */}
        {isEquipmentsOpen && (
          <div className="collapses-appartment__collapse--title-arrow-content-equipement">
            {currentAppartment.equipments.map((equipment, i) => (
              <span key={i}>{equipment}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
};

export default CollapseAppartment;