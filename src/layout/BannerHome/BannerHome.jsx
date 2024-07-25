import ImgBannerHome from '../../assets/image/banner.png';

/** EXPLICATION DU COMPOSANT "BannerHome" :
* C'est un composant qui affiche une bannière sur la page d'accueil.
* 
* @component
* @example
* return (
*   <BannerHome />
* )
*/
function BannerHome() {
  /** RENDU DU COMPOSANT :
  * Le rendu du composant comprend une image de bannière, un arrière-plan de bannière et un titre.
  */
  return (
    <div className="banner">

        <img src={ImgBannerHome} alt="Bannière d'accueil" className="banner__img" />

        <div className="banner__background"></div>

        <h1>Chez vous, partout et ailleurs</h1>

    </div>
  );
};

export default BannerHome;