import Footer from "../../layout/Footer/Footer.jsx";
import Header from "../../layout/Header/Header.jsx";
import MainContent from "../../layout/MainContent/MainContent.jsx";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <Header />
      <MainContent>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </MainContent>
      <Footer />
    </>
  );
}

export default ErrorPage;
