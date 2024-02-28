import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/1_home/HomePage.jsx';
import ApartmentPage from './pages/2_Apartment_page/ApartmentPage.jsx';
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
        element: <HomePage />
      },
      {
        /* ========== Page : Logement ========== */
        path:"/apartment-page",
        element: <ApartmentPage />
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