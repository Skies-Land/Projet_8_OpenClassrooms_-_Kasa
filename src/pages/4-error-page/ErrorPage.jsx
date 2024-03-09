import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import Main_content from '../../layout/main-content/MainContent';
import { Link } from "react-router-dom";



function ErrorPage() {
    return (
    <>
        <Header />
        <Main_content>
            <div className="error-page">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </Main_content>
        <Footer />
    </>
    )
}

export default ErrorPage;