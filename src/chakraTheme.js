import { extendTheme } from "@chakra-ui/react";

const global = ({ colorMode }) => ({
  body: {
    backgroundColor: colorMode === "dark" ? "#121212" : "#F1F5F8",
    color: colorMode === "dark" ? "#FFFFFF99" : "#222",
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

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  styles: { global },
  config,
});
