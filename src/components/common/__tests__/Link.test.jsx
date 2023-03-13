import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Link from "../Link";
import { BrowserRouter } from "react-router-dom";

// TODO: fix external link click tests
// jest.spyOn(window, "open");

let link;

function renderInternalLink(to, isDisabled) {
  render(
    <BrowserRouter>
      <Link
        to={to}
        isDisabled={isDisabled}
        title="more info"
        disabledTitle="why it's disabled"
      >
        Label Text
      </Link>
    </BrowserRouter>
  );
  link = screen.getByRole("link", { name: "Label Text" });
}

function renderExternalLink(href, isDisabled) {
  render(
    <BrowserRouter>
      <Link
        isExternal
        href={href}
        isDisabled={isDisabled}
        title="more info"
        disabledTitle="why it's disabled"
      >
        Label Text
      </Link>
    </BrowserRouter>
  );
  link = screen.queryByRole("link", { name: "Label Text" });
}

describe("components/common/Link", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
    link = undefined;
  });

  describe("internal link", () => {
    describe("enabled", () => {
      beforeEach(() => {
        renderInternalLink("/test-url", false);
      });

      it("renders link with label", () => {
        expect(link).toBeInTheDocument();
      });

      it("is enabled and navigates", () => {
        expect(link).toBeEnabled();
        fireEvent.click(link);
        expect(window.location.pathname).toBe("/test-url");
      });

      it("renders title", () => {
        expect(screen.getByTitle("more info")).toBe(link);
      });
    });

    describe("disabled", () => {
      beforeEach(() => {
        renderInternalLink("/test-url", true);
      });

      it("renders link with label", () => {
        expect(link).toBeInTheDocument();
      });

      it("is disabled and does not navigate", () => {
        // technically the link is enabled
        // expect(link).toBeDisabled();
        fireEvent.click(link);
        expect(window.location.pathname).toBe("/");
      });

      it("renders title", () => {
        expect(screen.getByTitle("why it's disabled")).toBe(link);
      });
    });
  });

  describe("external link", () => {
    describe("enabled", () => {
      beforeEach(() => {
        renderExternalLink("test-site.ca", false);
      });

      it("renders link with label", () => {
        expect(link).toBeInTheDocument();
      });

      it.skip("is enabled and navigates", () => {
        expect(link).toBeEnabled();
        fireEvent.click(link);
        expect(window.open).toHaveBeenCalled();
        expect(window.location.pathname).toBe("/");
      });

      it("renders title", () => {
        expect(screen.getByTitle("more info")).toBe(link);
      });
    });

    describe("disabled", () => {
      beforeEach(() => {
        renderExternalLink("test-site.ca", true);
        link = screen.getByText("Label Text");
      });

      it("renders link with label", () => {
        expect(link).toBeInTheDocument();
      });

      it.skip("is disabled and does not navigate", () => {
        // technically the link is enabled
        // expect(link).toBeDisabled();
        fireEvent.click(link);
        expect(window.open).not.toHaveBeenCalled();
        expect(window.location.pathname).toBe("/");
      });

      it("renders title", () => {
        expect(screen.getByTitle("why it's disabled")).toBe(link);
      });
    });
  });
});
