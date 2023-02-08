import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const colors = {
  txt: {
    light: "#FFFFFF99",
    dark: "#222",
  },
  bg: {
    light: "#F1F5F8",
    dark: "#121212",
  },
};

const global = ({ colorMode }) => ({
  body: {
    backgroundColor: colorMode === "dark" ? colors.bg.dark : colors.bg.light,
    color: colorMode === "dark" ? colors.txt.light : colors.txt.dark,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  h1: {
    display: "block",
    fontSize: "2em",
    marginY: "0.67em",
    fontWeight: "bold",
  },
  h2: {
    display: "block",
    fontSize: "1.5em",
    marginY: "0.83em",
    fontWeight: "bold",
  },
  h3: {
    display: "block",
    fontSize: "1.27em",
    marginY: "0.83em",
    fontWeight: "bold",
  },
  p: {
    marginBottom: "0.5em",
  },
});

export const theme = extendTheme({
  styles: { global },
  config,
  colors,
});
