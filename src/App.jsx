import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakraTheme";
import LoadingSpinner from "./components/common/LoadingSpinner";

// css
import "./css/index.css";
import "./css/header.css";
import "./css/gallery.css";
import "./css/portfolio-gallery.css";
import "./css/blog-gallery.css";
import "./css/article.css";
import "./css/gallery-filter-and-search.css";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
    </ChakraProvider>
  );
}
