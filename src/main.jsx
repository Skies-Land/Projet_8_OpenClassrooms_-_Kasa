/** EXPLICATION DU COMPOSANT "main" :
* C'est le point d'entrée de l'application React.
* 
* @module main
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";

/** ReactDOM.createRoot :
* Crée un root DOM node dans l'élément avec l'ID "root".
* `render` est utilisé pour rendre le composant `App` dans le root DOM node.
* `React.StrictMode` est un wrapper qui vérifie les problèmes potentiels dans l'application pendant le développement.
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);