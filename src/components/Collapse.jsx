import "./scss/Collapse.scss"
import aboutList from "./data/aboutList.json"
import { useState } from "react";

const datasList = aboutList.DataAboutList;

function Collapse() {

    const [openId, setOpenId] = useState(null);

    const toggleCollapse = (id) => {
        setOpenId(openId === id ? null : id);
    }

    return <div className="collapses">
        {datasList.map((e) => (
            <div key={e.id} className="collapses__collapse">
                <p onClick={() => toggleCollapse(e.id)} className="collapses__collapse--title">{e.title}</p>
                {openId === e.id && <p className="collapses__collapse--title-content">{e.content}</p>}
            </div>
        ))}
    </div>
}

export default Collapse;