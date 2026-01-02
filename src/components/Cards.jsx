import "./scss/Cards.scss"
import datas from "./data/datas.json"
import { Link } from "react-router-dom";

const datasWorks = datas.DatasHebergements;

function Cards() {

    return <div>
        <div className="container">
            <div className="container__cards">
                {datasWorks.map((e) => (
                        <Link><img src={e.cover} alt="Photo d'hébergements" className="container__cards--card" id={e.id} /></Link>
                ))}
            </div>
        </div>
    </div>
}

export default Cards;