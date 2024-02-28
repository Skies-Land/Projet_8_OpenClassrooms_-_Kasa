import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <NavLink to={`/`}>
                <img src="src\assets\image\logo.svg" alt="Logo de Kasa" />
            </NavLink>

            <nav className="navbar__links">

                <NavLink to={`/`} className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""}>
                    Accueil
                </NavLink>

                <NavLink to={`/about`} className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""}>
                    À propos
                </NavLink>
            </nav>

        </header>
    );
};

export default Header
