import BannerHome from "../../layout/banner-home/BannerHome.jsx";
import Gallery from "../../components/logement-gallery/LogementGallery.jsx";
import Logement from "../2-Logement-page/LogementPage.jsx";

function HomePage() {
  return (
    <>
      <BannerHome />
      <Gallery path="logement/:id" element={<Logement />} />
    </>
  );
}

export default HomePage;

//#region - /* ===== EXPLICATION "HomePage.jsx" ===== */
/* 
  Le composant HomePage rend une bannière en haut de la page et une galerie de logements. 
  Lorsque l'utilisateur clique sur un logement dans la galerie, il est dirigé vers la page 
  de détails du logement. Le composant Gallery est rendu avec deux props :
*/
//#endregion

/* ---------------------------------------------------- */

//#region - /* ===== ▶️ path ===== */
/*
  path est défini sur "logement/:id", ce qui est une indication 
  pour la gestion des routes dans l'application. Il définie le chemin 
  à suivre lorsqu'un élément de la galerie est cliqué, pour afficher les détails du logement.
*/
//#endregion

/* ---------------------------------------------------- */

//#region - /* ===== ▶️ element ===== */
/*
  element est défini sur <Logement />, ce qui signifie 
  que le composant Logement (donc la page Logement.jsx) sera utilisé comme élément 
  à afficher lorsque l'utilisateur cliquera sur un élément de la galerie. 
*/
//#endregion
