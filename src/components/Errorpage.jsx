import { Link } from "react-router-dom";
import "./scss/ErrorPage.scss"

function ErrorPage() {
    return <div className="error">
        <p className="error__404">404</p>
        <p className="error__404--p">Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"}><p className="error__404--p-a">Retourner sur la page d'accueil</p>
        </Link>
    </div>
}

export default ErrorPage;