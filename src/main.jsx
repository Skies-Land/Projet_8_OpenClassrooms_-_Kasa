import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/1-home-page/HomePage.jsx";
import Header from "./layout/header/Header.jsx";
import MainContent from "./layout/main-content/MainContent.jsx";
import LogementPage from "./pages/2-Logement-page/LogementPage.jsx";
import About from "./pages/3-about-page/AboutPage.jsx";
import Footer from "./layout/footer/Footer.jsx";
import ErrorPage from "./pages/4-error-page/ErrorPage.jsx";
import "./main.scss";

const LayoutHeaderFooter = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <LayoutHeaderFooter />,
    errorElement: (
      <ErrorPage />
    ) /* ========== Page : Erreur 404 ========== */,
    children: [
      {
        /* ========== Page : Accueil ========== */
        path: "/",
        element: <HomePage />,
      },
      {
        /* ========== Page : Logement ========== */
        path: "/logement",
        element: <LogementPage />,
      },
      {
        /* ========== Page : À propos ========== */
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
