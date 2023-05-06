import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Cubing from "../Cubing";
import { BrowserRouter } from "react-router-dom";

describe("components/pages/Cubing", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Cubing />, {
      wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
