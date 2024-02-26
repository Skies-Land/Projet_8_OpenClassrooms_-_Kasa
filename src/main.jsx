import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Header from '../src/components/header/Header.jsx';
import Footer from '../src/components/footer/Footer.jsx';
import './main.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  /* ========== Page : Accueil ========== */
  {
    path: "/",
    element:(
      <>
        <App />
      </>
    ),

    /* ========== Page : Erreur 404 ========== */
    errorElement: <h1>404 not found</h1>
  },

  /* ========== Page : Logement ========== */
  {
    path:"/fiche-logement",
    element: (
      <>
        <Header />
        <h1>Nos Appartements</h1>
        <Footer />
      </>
    )
  },

  /* ========== Page : À propos ========== */
  {
    path:"/about",
    element: (
      <>
        <Header />
        <h1>À propos</h1>
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
