import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page, { NarrowContent, WideContent } from "../Page";

function mockHeader() {
  return <div data-testid="header" />;
}

function mockFooter() {
  return <div data-testid="footer" />;
}

jest.mock("../Header", () => ({
  __esModule: true,
  headerHeight: "2em",
  default: () => mockHeader(),
}));

jest.mock("../Footer", () => ({
  __esModule: true,
  footerHeight: "2em",
  default: () => mockFooter(),
}));

describe("components/common/Page", () => {
  describe("renders Page", () => {
    test("with header and footer", () => {
      render(<Page>Page content</Page>);

      expect(screen.getByTestId("header")).toBeInTheDocument();
      expect(screen.getByTestId("footer")).toBeInTheDocument();
      expect(screen.getByText("Page content")).toBeInTheDocument();
    });

    test("with header only", () => {
      render(<Page withoutFooter>Page content</Page>);

      expect(screen.getByTestId("header")).toBeInTheDocument();
      expect(screen.queryByTestId("footer")).not.toBeInTheDocument();
      expect(screen.getByText("Page content")).toBeInTheDocument();
    });

    test("with footer only", () => {
      render(<Page withoutHeader>Page content</Page>);

      expect(screen.queryByTestId("header")).not.toBeInTheDocument();
      expect(screen.getByTestId("footer")).toBeInTheDocument();
      expect(screen.getByText("Page content")).toBeInTheDocument();
    });
  });

  test("renders NarrowContent", () => {
    render(<NarrowContent>Narrow page content</NarrowContent>);

    expect(screen.getByText("Narrow page content")).toBeInTheDocument();
  });

  test("renders WideContent", () => {
    render(<WideContent>Wide page content</WideContent>);

    expect(screen.getByText("Wide page content")).toBeInTheDocument();
  });
});
