/** EXPLICATION DU COMPOSANT "MainContent" :
* C'est un composant qui affiche le contenu principal de la page.
* 
* @component
* @example
* return (
*   <MainContent>
*     <p>Contenu principal de la page</p>
*   </MainContent>
* )
* 
* @param {Object} props - Les propriétés passées au composant.
* @param {React.Node} props.children - Le contenu à afficher dans le composant.
*/
function MainContent({children}) {
  return <div className="main-content">{children}</div>;
};

export default MainContent;