import React, { Fragment } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import ArticleWrapper from "./blog/ArticleWrapper";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cubing from "./pages/Cubing";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Vancouver from "./pages/Vancouver";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <Fragment>
        <Header />
        <Outlet />
        <Footer />
      </Fragment>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "projects", element: <Portfolio /> },
      {
        path: "blog",
        children: [
          { path: "", element: <Blog /> },
          { path: ":articleId", element: <ArticleWrapper /> },
        ],
      },
      { path: "cubing", element: <Cubing /> },
      { path: "vancouver", element: <Vancouver /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
