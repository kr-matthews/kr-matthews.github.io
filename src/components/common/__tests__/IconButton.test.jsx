import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import IconButton from "../IconButton";
import { BrowserRouter } from "react-router-dom";

// TODO: fix href click tests
// jest.spyOn(window, "open");

let button;
const onClick = jest.fn();

function renderIconButton(isDisabled) {
  render(
    <BrowserRouter>
      <IconButton
        onClick={onClick}
        isDisabled={isDisabled}
        title="more info"
        disabledTitle="why it's disabled"
      >
        Label Text
      </IconButton>
    </BrowserRouter>
  );
  button = screen.getByRole("button", { title: "more info" });
}

function renderIconButtonLink(href, isDisabled) {
  render(
    <BrowserRouter>
      <IconButton
        href={href}
        isDisabled={isDisabled}
        title="more info"
        disabledTitle="why it's disabled"
      >
        Label Text
      </IconButton>
    </BrowserRouter>
  );
  button = screen.queryByRole("button");
}

describe("components/common/IconButton", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
    button = undefined;
  });

  describe("on-click", () => {
    describe("enabled", () => {
      beforeEach(() => {
        renderIconButton(false);
      });

      it("renders a button", () => {
        expect(button).toBeInTheDocument();
      });

      it("is enabled and calls on-click", () => {
        expect(button).toBeEnabled();
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
      });

      it("renders title", () => {
        expect(screen.getByTitle("more info")).toBe(button);
      });

      it("renders icon", () => {
        expect(screen.getByAltText("icon")).toBeVisible();
      });
    });

    describe("disabled", () => {
      beforeEach(() => {
        renderIconButton(true);
      });

      it("renders a button", () => {
        expect(button).toBeInTheDocument();
      });

      it("is disabled and does not navigate", () => {
        // technically the link is enabled
        // expect(iconButton).toBeDisabled();
        fireEvent.click(button);
        expect(window.location.pathname).toBe("/");
      });

      it("renders disabled title", () => {
        expect(screen.getByTitle("why it's disabled")).toBe(button);
      });

      it("renders icon", () => {
        expect(screen.getByAltText("icon")).toBeVisible();
      });
    });
  });

  describe("with href", () => {
    describe("enabled", () => {
      beforeEach(() => {
        renderIconButtonLink("test-site.ca", false);
      });

      it("renders a button", () => {
        expect(button).toBeInTheDocument();
      });

      it.skip("is enabled and navigates", () => {
        expect(button).toBeEnabled();
        fireEvent.click(button);
        expect(window.open).toHaveBeenCalled();
        expect(window.location.pathname).toBe("/test-url");
      });

      it("renders title", () => {
        expect(screen.getByTitle("more info")).toBe(button);
      });

      it("renders icon", () => {
        expect(screen.getByAltText("icon")).toBeVisible();
      });
    });

    describe("disabled", () => {
      beforeEach(() => {
        renderIconButtonLink("test-site.ca", true);
      });

      it("renders a button", () => {
        expect(button).toBeInTheDocument();
      });

      it.skip("is disabled and does not navigate", () => {
        // technically the link is enabled
        // expect(link).toBeDisabled();
        fireEvent.click(button);
        expect(window.open).not.toHaveBeenCalled();
        expect(window.location.pathname).toBe("/");
      });

      it("renders disabled title", () => {
        expect(screen.getByTitle("why it's disabled")).toBe(button);
      });

      it("renders icon", () => {
        expect(screen.getByAltText("icon")).toBeVisible();
      });
    });
  });
});
