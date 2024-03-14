import { NavLink } from "react-router-dom";

/** EXPLICATION DU COMPOSANT "Footer" :
* C'est un composant qui affiche le pied de page du site.
* 
* @component
* @example
* return (
*   <Footer />
* )
*/
function Footer() {
  /** RENDU DU COMPOSANT :
  * Le rendu du composant comprend un lien vers la page d'accueil avec le logo de Kasa et un texte de copyright.
  */
  return (
    <div className="footer">

        <NavLink to={`/`}>
          <img src="src\assets\image\logo_footer.svg" alt="Logo de Kasa" className="footer__img" />
        </NavLink>

        <div className="footer__text">
            © 2020 Kasa. All rights reserved
        </div>

    </div>
  )
};

export default Footer;
