import "./scss/Collapse.scss"
import aboutList from "./data/aboutList.json"
import { useState } from "react";

const datasList = aboutList.DataAboutList;

function Collapse() {

    const [openIds, setOpenIds] = useState([]);

    const toggleCollapse = (id) => {
        if (openIds.includes(id)) {
            setOpenIds(openIds.filter(openId => openId !== id));
        } else {
            setOpenIds([...openIds, id]);
        }
    };

    return <div className="collapses">
        {datasList.map((e) => (
            <div key={e.id} className={`collapses__collapse ${openIds.includes(e.id) ? 'collapses__collapse--open' : ''}`}>
                <div>
                    <div className="collapses__container--arrows">
                        <img onClick={() => toggleCollapse(e.id)} src="./src/assets/images/arrow.png" alt="arrow" className={`collapses__collapse--title-arrow ${openIds.includes(e.id) ? 'collapses__collapse--title-arrow-open' : ''}`} />
                    </div>
                    <span className="collapses__collapse--title">{e.title}</span>
                </div>
                {openIds.includes(e.id) && <p className="collapses__collapse--title-arrow-content">{e.content}</p>}
            </div>
        ))}
    </div>
}

export default Collapse;