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

export default Header;

//#region - /* ===== EXPLICATION "Header.jsx" ===== */
/* 
    Le composant Header crée une barre de navigation avec des liens vers différentes sections du site,
    et applique des classes de style en fonction de l'état de chaque lien.
*/
//#endregion

/* ---------------------------------------------------- */

//#region - /* ===== ▶️ <NavLink> ===== */
/* 
    Les balises <NavLink> sont utilisées pour faciliter la navigation.
    Il est importé depuis "react-router-dom" pour la gestion des routes.

    to={`/`} to={`/about`} 
    cela indique que lorsque l'utilisateur clique sur l'un des éléments du header 
    (Logo de Kasa / Accueil / À propos) il sera dirigé vers la page concerné. 
*/
//#endregion

/* ---------------------------------------------------- */

//#region - /* ===== ▶️ "isPending" | "isActive" ===== */
/*
    Pour chaque lien dans la navbar, une classe de style est appliquée.
    La classe est définie en utilisant une fonction fléchée dans l'attribut "className"
    Cette fonction prend deux paramètres, "isActive" et "isPending", qui sont des indicateurs de l'état du lien.

    ▶️ Si "isPending" est vrai, cela signifie que le lien est en cours de chargement.
    ▶️ Si "isActive" est vrai, cela signifie que le lien est actuellement actif (correspondant à l'URL de la page) 
*/
//#endregion