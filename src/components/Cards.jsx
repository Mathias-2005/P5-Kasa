import "./scss/Cards.scss"
import datas from "./data/datas.json"
import { Link } from "react-router-dom";

const datasWorks = datas.DatasHebergements;

function Cards() {

    return <div>
        <div className="container">
            <div className="container__cards">
                {datasWorks.map((e) => (
                    <Link to={`/Accommodation/${e.id}`} key={e.id} className="container__cards--card"><img src={e.cover} alt="Photo d'hébergements" />
                        <div className="container__cards--card-overlay">
                            <p className="container__cards--card-title">{e.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
}

export default Cards;