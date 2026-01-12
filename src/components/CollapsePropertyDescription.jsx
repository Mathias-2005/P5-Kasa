import datas from "./data/datas.json"
import { useState } from "react";
import { useParams } from 'react-router-dom';
import './scss/CollapseProperty.scss'


function CollapsePropertyDescritpion() {
    const { id } = useParams();
    const currentProperty = datas.DatasHebergements.find(item => item.id == id);

    // État séparé pour chaque collapse
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

    const toggleCollapse1 = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };

    const toggleCollapse2 = () => {
        setIsEquipmentsOpen(!isEquipmentsOpen);
    };

    return <div className="collapses-property">
        <div className={`collapses-property__collapse ${isDescriptionOpen ? 'collapses-property__collapse--open' : ''}`}>
            <div>
                <div className="collapses-property__container--arrows">
                    <span className="collapses-property__collapse--title">Description</span>
                    <img 
                        onClick={toggleCollapse1} 
                        src="/src/assets/images/arrow.png" 
                        alt="arrow" 
                        className={`collapses-property__collapse--title-arrow ${isDescriptionOpen ? 'collapses-property__collapse--title-arrow-open' : ''}`} 
                    />
                </div>
            </div>
            {isDescriptionOpen && <p className="collapses-property__collapse--title-arrow-content-description">{currentProperty.description}</p>}
        </div>
        
        <div className={`collapses-property__collapse ${isEquipmentsOpen ? 'collapses-property__collapse--open' : ''}`}>
            <div>
                <div className="collapses-property__container--arrows">
                    <span className="collapses-property__collapse--title">Équipements</span>
                    <img 
                        onClick={toggleCollapse2} 
                        src="/src/assets/images/arrow.png" 
                        alt="arrow" 
                        className={`collapses-property__collapse--title-arrow ${isEquipmentsOpen ? 'collapses-property__collapse--title-arrow-open' : ''}`} 
                    />
                </div>
            </div>
            {isEquipmentsOpen && <div className="collapses-property__collapse--title-arrow-content-equipement">
                {currentProperty.equipments.map((equipment, i) => (
                    <span key={i}>{equipment}</span>
                ))}
            </div>}
        </div>
    </div>
}

export default CollapsePropertyDescritpion;