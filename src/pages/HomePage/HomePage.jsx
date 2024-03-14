import BannerHome from "../../layout/BannerHome/BannerHome.jsx";
import Gallery from "../../components/LogementGallery/LogementGallery.jsx";
import LogementPage from "../../pages/LogementPage/LogementPage.jsx";

/** EXPLICATION DU COMPOSANT "HomePage" :
* C'est un composant qui affiche la page d'accueil du site.
* 
* @component
* @example
* return (
*   <HomePage />
* )
*/
function HomePage() {
  /** RENDU DU COMPOSANT :
  * Le rendu du composant comprend une bannière et une galerie de logements.
  * Lorsque l'utilisateur clique sur un logement dans la galerie, il est dirigé vers la page de détails du logement.
  * Le composant Gallery est rendu avec deux props : `path` et `element`.
  * `path` est défini sur "logement/:id", ce qui est une indication pour la gestion des routes dans l'application.
  * Il définit le chemin à suivre lorsqu'un élément de la galerie est cliqué, pour afficher les détails du logement.
  * `element` est défini sur `<LogementPage />`, ce qui signifie que le composant LogementPage sera utilisé comme élément à afficher lorsque l'utilisateur cliquera sur un élément de la galerie.
  */
  return (
    <>
      <BannerHome />
      <Gallery path="logement/:id" element={<LogementPage />} />
    </>
  );
}

export default HomePage;