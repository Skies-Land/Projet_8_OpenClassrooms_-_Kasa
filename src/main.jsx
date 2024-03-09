import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./layout/Header/Header.jsx";
import MainContent from "./layout/MainContent/MainContent.jsx";
import LogementPage from "./pages/LogementPage/LogementPage.jsx";
import About from "./pages/AboutPage/AboutPage.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
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
    errorElement: <ErrorPage /> /* ========== Page : Erreur 404 ========== */,
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
