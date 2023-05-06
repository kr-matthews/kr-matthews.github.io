import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import About from "../About";
import { BrowserRouter } from "react-router-dom";

describe("components/pages/About", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />, {
      wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
