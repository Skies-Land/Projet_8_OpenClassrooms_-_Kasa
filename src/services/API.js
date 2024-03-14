//#region - /* ===== VÉRIFICATION DE FETCH ===== */
if (!window.fetch) {
    alert("Your browser does not support fetch API");
}
//#endregion

/** API.js
* API.js est un fichier qui contient des fonctions pour interagir avec l'API du site.
* 
* @module API
*/

/*=============== GET ALL ===============*/
    /** logementsGetAll :
    * C'est une fonction qui récupère tous les logements de l'API.
    * 
    * @function
    * @async
    * @returns {Promise<Array>} Une promesse qui résout avec un tableau de logements.
    */
    async function logementsGetAll() {
        try {
            const response = await fetch("logements.json");
            return response.json();
        } catch (error) {
            console.error(error);
        }
    }
    export { logementsGetAll };


/*=============== GET BY ID ===============*/
    /** logementGetById :
    * C'est une fonction qui récupère un logement spécifique de l'API en utilisant son ID.
    * 
    * @function
    * @async
    * @param {string} id - L'ID du logement à récupérer.
    * @returns {Promise<Object>} Une promesse qui résout avec le logement.
    */
    async function logementGetById(id) {
        try {
            const response = await fetch("logements.json");
            const logs = await response.json();
            return logs.find((log) => log.id === id);
        } catch (error) {
            console.error(error);
        }
    }
    export { logementGetById };