import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const textStyles = {
  specs: {
    fontFamily:
      'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    fontSize: "90%",
    fontWeight: "semibold",
  },
};

const colors = {
  txt: {
    light: "#FFFFFF99",
    dark: "#222222",
  },
  bg: {
    light: "#F1F5F8",
    dark: "#121212",
  },
  alt: {
    light: "#B3B6B7",
    dark: "#273746",
  },
};

const global = ({ colorMode }) => ({
  body: {
    overflow: "hidden",
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
  pre: {
    code: {
      display: "block",
      backgroundColor:
        colorMode === "dark" ? colors.alt.dark : colors.alt.light,
      borderRadius: "0.75em",
      whiteSpace: "pre",
      maxWidth: "100%",
      minWidth: "100px",
      padding: "15px 20px 12px 22px",
      lineHeight: 1.75,
      marginBottom: "0.5em",
      overflowX: "auto",
    },
  },
});

const colorScheme = "red";

export const theme = extendTheme(
  {
    styles: { global },
    textStyles,
    config,
    colors,
  },
  withDefaultColorScheme({ colorScheme })
);
