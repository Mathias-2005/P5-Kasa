import datas from "../../data/datas.json"
import { useState } from "react"
import { useParams } from 'react-router-dom'
import '../scss/CollapseAppartment.scss'

function CollapseAppartment() {
  const { id } = useParams()
  const currentAppartment = datas.DatasHebergements.find(item => item.id == id);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  const toggleCollapse1 = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleCollapse2 = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };

  return (
    <div className="collapses-appartment">
      <div className={`collapses-appartment__collapse ${isDescriptionOpen ? 'collapses-appartment__collapse--open' : ''}`}>
        <div>
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
        {isDescriptionOpen && (
          <p className="collapses-appartment__collapse--title-arrow-content-description">
            {currentAppartment.description}
          </p>
        )}
      </div>

      <div className={`collapses-appartment__collapse ${isEquipmentsOpen ? 'collapses-appartment__collapse--open' : ''}`}>
        <div>
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