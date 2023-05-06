import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../ErrorPage";
import { BrowserRouter } from "react-router-dom";

describe("components/common/ErrorPage", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    )
  );
  it("renders", () => {
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  it("says 'something went wrong'", () => {
    expect(screen.getByTestId("error")).toHaveTextContent(
      "Something went wrong"
    );
  });

  it("has a link to home", () => {
    const linkHome = screen.getByRole("link", { name: "Home" });
    expect(linkHome).toBeEnabled();
    expect(linkHome).toHaveAttribute("href", "/");
  });

  it("has a link to github", () => {
    const githubLink = screen.getByRole("link", {
      name: "Report issue on GitHub",
    });
    expect(githubLink).toBeEnabled();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/kr-matthews/kr-matthews.github.io/issues"
    );
  });
});
