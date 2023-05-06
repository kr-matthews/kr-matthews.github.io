import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Vancouver from "../Vancouver";
import { BrowserRouter } from "react-router-dom";

describe("components/pages/Vancouver", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Vancouver />, {
      wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
