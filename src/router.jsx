import React, { Fragment } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import ArticleWrapper from "./components/pages/blog/ArticleWrapper";
import ErrorPage from "./components/pages/ErrorPage";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import About from "./components/pages/About";
import Blog from "./components/pages/blog/Blog";
import Cubing from "./components/pages/Cubing";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Vancouver from "./components/pages/Vancouver";

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
