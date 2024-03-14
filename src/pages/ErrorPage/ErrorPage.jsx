import { Link } from "react-router-dom";

/** EXPLICATION DU COMPOSANT "ErrorPage" :
* C'est un composant qui affiche une page d'erreur 404.
* 
* @component
* @example
* return (
*   <ErrorPage />
* )
*/
function ErrorPage() {
  /** RENDU DU COMPOSANT :
  * Le rendu du composant comprend un message d'erreur et un lien pour retourner à la page d'accueil.
  */
  return (
    <>
      <div className="error-page">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </>
  );
};

export default ErrorPage;
