import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//#region - /* ===== VÉRIFICATION DE FETCH ===== */
if (!window.fetch) {
    alert("Your browser does not support fetch API");
}
//#endregion


//#region - /* ===== FETCH "GET ALL" pour "LogementGallery.jsx" ===== */

    export function logementGetAll() {
        const [logements, setLogements] = useState([]);

        /* "useEffect" avec une Array vide ça veux dire, 
        fonction qui se charge une seul fois
        au chargment du composant */
        useEffect(fetchLogements, []);

        function fetchLogements() {
            fetch("logements.json")
            .then((res) => res.json())
            .then((res) => setLogements(res))
            .catch(console.error("Erreur lors de la récupération des logements"));
        }
    }

//#endregion


//#region - /* ===== FETCH "GET BY ID" pour "LogementPage.jsx" ===== */

    export function logementGetById(id) {
        const location = useLocation();
    // console.log("location:", location);
    // console.log("L'id du logement est :", location.state.logementById);

        const [selectedById, setSelectedById] = useState(null);
        useEffect(fetchLogementData, []);

        function fetchLogementData() {
            fetch("logements.json")
            .then((res) => res.json())
            .then((logs) => {
                const selectionLogement = logs.find((log) => log.id === location.state.logementById);
                // console.log("selectedById:", selectedById);
                setSelectedById(selectionLogement);
            })
            .catch(console.error("Erreur lors de la récupération des logements"));
        }
    }

//#endregion