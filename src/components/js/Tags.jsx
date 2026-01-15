import datas from "../../data/datas.json"
import { useParams } from 'react-router-dom'
import '../scss/Tags.scss'

function Tags() {
    
    const { id } = useParams(); // PARAMETRE QUI REVOIE VERS L'URL APPARTMENT SUIVANT L'ID 
    const currentaApartment = datas.DatasHebergements.find(item => item.id == id); // CONTIENT l'ID CORRECTE SUIVANT L'URL 

    return <div className="tags">
        {currentaApartment.tags.map((tag, i) => (
              <span key={i}
              className='tags__tag'>{tag}</span>
            ))}
    </div>
};

export default Tags;