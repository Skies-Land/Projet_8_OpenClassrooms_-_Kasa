import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/1_home_page/HomePage.jsx";
import Header from "./layout/header/Header.jsx";
import Main_content from "./layout/main_content/Main_content.jsx";
import LogementPage from "./pages/2_Logement_page/LogementPage.jsx";
import About from "./pages/3_about_page/AboutPage.jsx";
import Footer from "./layout/footer/Footer.jsx";
import ErrorPageNotFound from "./pages/4_error_page/ErrorPage.jsx";
import "./main.scss";

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
    element: <LayoutHeaderFooter />,
    errorElement: (
      <ErrorPageNotFound />
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
