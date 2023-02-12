import React, { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./chakraTheme";
import LoadingSpinner from "./components/common/LoadingSpinner";

export default function App() {
  return (
    <Fragment>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
      </ChakraProvider>
    </Fragment>
  );
}
