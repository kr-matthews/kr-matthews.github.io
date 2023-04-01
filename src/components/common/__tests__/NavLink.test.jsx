import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NavLink from "../NavLink";
import { BrowserRouter } from "react-router-dom";

const onClick = jest.fn();

const mockColorModeValue = () => "blue";

jest.mock("@chakra-ui/react", () => {
  const originalModule = jest.requireActual("@chakra-ui/react");
  return {
    __esModule: true,
    ...originalModule,
    useColorModeValue: () => mockColorModeValue(),
  };
});

function renderNavLink(to = "/statistics") {
  render(
    <BrowserRouter>
      <NavLink to={to} onClick={onClick}>
        Stats
      </NavLink>
    </BrowserRouter>
  );
}

describe("components/common/NavLink", () => {
  describe("when inactive", () => {
    beforeEach(() => {
      window.history.pushState({}, "", "/");
      renderNavLink();
    });

    it("renders link with text", () => {
      expect(screen.getByRole("link")).toHaveTextContent("Stats");
    });

    it("calls onClick", () => {
      fireEvent.click(screen.getByRole("link"));
      expect(onClick).toHaveBeenCalled();
    });

    it("navigates to /statistics", () => {
      fireEvent.click(screen.getByRole("link"));
      expect(window.location.pathname).toBe("/statistics");
    });

    it("renders inactive", () => {
      // expect(screen.getByRole("link")).toHaveStyle("background-color: ");
      expect(screen.getByRole("link").className).not.toMatch("active");
    });
  });

  describe("when active", () => {
    beforeEach(() => {
      window.history.pushState({}, "", "/statistics");
      renderNavLink();
    });

    it("renders link with text", () => {
      expect(screen.getByRole("link")).toHaveTextContent("Stats");
    });

    it("calls onClick", () => {
      fireEvent.click(screen.getByRole("link"));
      expect(onClick).toHaveBeenCalled();
    });

    it("navigates to /statistics", () => {
      fireEvent.click(screen.getByRole("link"));
      expect(window.location.pathname).toBe("/statistics");
    });

    it("renders active", () => {
      window.history.pushState({}, "", "/statistics");
      // expect(screen.getByRole("link")).toHaveStyle("background-color:");
      expect(screen.getByRole("link").className).toMatch("active");
    });
  });
});
