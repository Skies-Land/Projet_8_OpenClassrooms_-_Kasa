import { Link } from "react-router-dom";

function Header() {
    return (
        <header>

            <img src="src\assets\image\logo.svg" alt="Logo de Kasa" />

            <nav className="navbar__links">
                <Link to={`/`}>Accueil</Link>
                <Link to={`/about`}>À propos</Link>
            </nav>

        </header>
    );
};

export default Header
