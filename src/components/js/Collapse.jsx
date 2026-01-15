import "../scss/Collapse.scss"
import aboutList from "../../data/aboutList.json"
import { useState } from "react"

const datasList = aboutList.DataAboutList // VIA UNE VIARIABLE ON VIENS PRENDRE LES DATAS DE NOTRE JSON CORRESPONDANT

function Collapse() {
  const [openIds, setOpenIds] = useState([]); // USESTATE SOUS FORME DE TABLEAU QUI PREND LES ID OPENS 

  // RECUPERE LES ID, SI OPEN / CLOSE SI CLOSE / OPEN 
  const toggleCollapse = (id) => {
    setOpenIds((prevOpenIds) =>
      prevOpenIds.includes(id)
        ? prevOpenIds.filter((openId) => openId !== id)
        : [...prevOpenIds, id]
    );
  };

  return (
    <div className="collapses">
      {datasList.map((e) => {
        const isOpen = openIds.includes(e.id); // VARIABLE SI OPEN OUI SINON NON

        return (
          <div
            key={e.id}
            className={`collapses__collapse ${
              isOpen ? "collapses__collapse-open" : ""
            }`}
          >
            <div className="collapses__header">
              <div
                className="collapses__container--arrows"
                onClick={() => toggleCollapse(e.id)}
              >
                <span className="collapses__collapse--title">{e.title}</span>

                <img
                  src="/src/assets/images/arrow.png"
                  alt="arrow"
                  className={`collapses__collapse--title-arrow ${
                    isOpen ? "collapses__collapse--title-arrow-open" : ""
                  }`}
                />
              </div>
            </div>
            {/* SI OPEN ON AFFICHE LE CONTENT SUIVANT LE BON ID OPEN */}
            {isOpen && (
              <p className="collapses__collapse--title-arrow-content">
                {e.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Collapse;
