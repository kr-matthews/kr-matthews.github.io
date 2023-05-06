import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("@chakra-ui/react", () => {
  const originalModule = jest.requireActual("@chakra-ui/react");
  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: () => [true],
    ChakraProvider: ({ children }) => children,
  };
});

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders header with blog link", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "Blog" })).toBeInTheDocument();
  });
});
