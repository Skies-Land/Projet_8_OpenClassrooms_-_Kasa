import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header/Header.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import MainContent from "./layout/MainContent/MainContent.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LogementPage from "./pages/LogementPage/LogementPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

/** EXPLICATION DU COMPOSANT "App" :
* C'est le composant racine de l'application.
* 
* @component
* @example
* return (
*   <App />
* )
*/
const App = () => { 
    /** RENDU DU COMPOSANT :
    * Le rendu du composant comprend un Router qui englobe tout le contenu de l'application.
    * À l'intérieur du Router, il y a un Header, un MainContent et un Footer.
    * Le MainContent contient des Routes, qui définissent le chemin pour chaque page de l'application.
    * Chaque Route a un chemin et un élément, qui est le composant à afficher lorsque le chemin est visité.
    * Le chemin "*" est utilisé pour afficher une page d'erreur lorsque le chemin visité n'est pas défini dans les autres Routes.
    */
    return (
        <Router>
            <Header />
            <MainContent>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/logement" element={<LogementPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </MainContent>
            <Footer />
        </Router>
    );
};

export default App;