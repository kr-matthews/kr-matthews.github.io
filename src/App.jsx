import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

// css
import "./css/index.css";
import "./css/header.css";
import "./css/gallery.css";
import "./css/portfolio-gallery.css";
import "./css/blog-gallery.css";
import "./css/article.css";
import "./css/gallery-filter-and-search.css";

export default function App() {
  return <RouterProvider router={router} />;
}
