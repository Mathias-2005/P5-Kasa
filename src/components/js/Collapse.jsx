import { useState } from "react";
import { useParams } from "react-router-dom";
import aboutList from "../../data/aboutList.json";
import datas from "../../data/datas.json";
import "../scss/Collapse.scss";

function Collapse({ type = "about" }) {
  const { id } = useParams();
  const [openIds, setOpenIds] = useState([]);

  // RECUPERE LES ID, SI OPEN / CLOSE SI CLOSE / OPEN  (page About)
  const toggleCollapse = (collapseId) => {
    setOpenIds((prevOpenIds) =>
      prevOpenIds.includes(collapseId)
        ? prevOpenIds.filter((openId) => openId !== collapseId)
        : [...prevOpenIds, collapseId]
    );
  };

  // DONNÉES SELON LE TYPE DE LA PAGE
  const getCollapseData = () => {
    if (type === "about") {
      return aboutList.DataAboutList.map((item) => ({
        id: item.id,
        title: item.title,
        content: item.content,
        isArray: false,
      }));
    }

    if (type === "apartment") {
      const currentAppartment = datas.DatasHebergements.find(
        (item) => item.id == id
      );

      if (!currentAppartment) return [];

      return [
        {
          id: "description",
          title: "Description",
          content: currentAppartment.description,
          isArray: false,
        },
        {
          id: "equipments",
          title: "Équipements",
          content: currentAppartment.equipments,
          isArray: true,
        },
      ];
    }

    return [];
  };

  const collapseData = getCollapseData();
  const containerClass = type === "apartment" ? "collapses-appartment" : "collapses";

  return (
    <div className={containerClass}>
      {collapseData.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={`${containerClass}__collapse ${
              isOpen ? `${containerClass}__collapse--open` : ""
            }`}
          >
            <div className={`${containerClass}__header`}>
              <div
                className={`${containerClass}__container--arrows`}
                onClick={() => toggleCollapse(item.id)}
              >
                <span className={`${containerClass}__collapse--title`}>
                  {item.title}
                </span>

                <img
                  src="/src/assets/images/arrow.png"
                  alt="arrow"
                  className={`${containerClass}__collapse--title-arrow ${
                    isOpen ? `${containerClass}__collapse--title-arrow-open` : ""
                  }`}
                />
              </div>
            </div>

            <div
              className={`${containerClass}__collapse--content-wrapper ${
                isOpen ? `${containerClass}__collapse--content-wrapper--open` : ""
              }`}
            >
              <div
                className={`${containerClass}__collapse--title-arrow-content${
                  type === "apartment"
                    ? item.isArray
                      ? "-equipement"
                      : "-description"
                    : ""
                }`}
              >
                {item.isArray ? (
                  item.content.map((element, i) => <span key={i}>{element}</span>)
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Collapse;