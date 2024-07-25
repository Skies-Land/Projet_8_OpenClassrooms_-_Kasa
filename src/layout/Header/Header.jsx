import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/logo.svg";

/** EXPLICATION DU COMPOSANT "Header" :
* C'est un composant qui affiche l'en-tête du site.
* 
* @component
* @example
* return (
*   <Header />
* )
*/
function Header() {
    /** RENDU DU COMPOSANT :
    * Le rendu du composant comprend un lien vers la page d'accueil avec le logo de Kasa,
    * et une barre de navigation avec des liens vers la page d'accueil et la page À propos.
    * Les liens ont des classes CSS dynamiques qui changent en fonction de leur état.
    */
    return (
        <header>
            <NavLink to={`/`}>
                <img src={Logo} alt="Logo de Kasa" />
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

export default Header;
