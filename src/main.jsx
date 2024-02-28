import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Header from './layout/header/Header.jsx';
import Footer from './layout/footer/Footer.jsx';
import Main_content from './layout/main_content/Main_content.jsx';
import './main.scss';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const LayoutHeaderFooter = () => {
  return (
    <>
      <Header />
      <Main_content>
        <Outlet />
      </Main_content>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    errorElement: <h1>404 not found</h1>, /* ========== Page : Erreur 404 ========== */
    element: <LayoutHeaderFooter />,
    children: [
      {
        /* ========== Page : Accueil ========== */
        path: "/",
        element: <App />
      },
      {
        /* ========== Page : Logement ========== */
        path:"/fiche-logement",
        element: (
          <h1>Nos Appartements</h1>
        )
      },
      {
        /* ========== Page : À propos ========== */
        path:"/about",
        element: (
          <h1>À propos</h1>
        )
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);