import ImgBannerAbout from '../../assets/image/banner2.png';

/** EXPLICATION DU COMPOSANT "BannerAbout" :
* C'est un composant qui affiche une bannière dans la page à propos.
* 
* @component
* @example
* return (
*   <BannerAbout />
* )
*/
function BannerAbout() {
    /** RENDU DU COMPOSANT :
    * Le rendu du composant comprend une image de bannière et un arrière-plan de bannière.
    */
    return (
        <div className="banner">

            <img src={ImgBannerAbout} alt="Bannière d'accueil" className="banner__img" />

            <div className="banner__background"></div>

        </div>
    );
};

export default BannerAbout;