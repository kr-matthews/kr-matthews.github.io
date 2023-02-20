import React from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Page from "./components/common/Page";
import ErrorPage from "./components/common/ErrorPage";
import About from "./components/pages/About";
import Blog from "./components/pages/blog/Blog";
import ArticleWrapper from "./components/pages/blog/ArticleWrapper";
import Cubing from "./components/pages/Cubing";
import Projects from "./components/pages/projects/Projects";
import Vancouver from "./components/pages/Vancouver";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <Page withoutFooter>
        <Outlet />
      </Page>
    ),
    children: [
      { path: "", element: <Navigate to="/projects" replace /> },
      { path: "projects", element: <Projects /> },
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
