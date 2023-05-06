import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header, { navOptions } from "../Header";
import { BrowserRouter } from "react-router-dom";

const toggleColorMode = jest.fn();

const mockMediaQuery = jest.fn();
const mockColorMode = jest.fn();

jest.mock("@chakra-ui/react", () => {
  const originalModule = jest.requireActual("@chakra-ui/react");
  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: () => mockMediaQuery(),
    useColorMode: () => mockColorMode(),
  };
});

function renderHeader(screenSize = "wide", colorMode = "light") {
  mockMediaQuery.mockImplementation(() => [screenSize === "wide"]);
  mockColorMode.mockImplementation(() => ({ colorMode, toggleColorMode }));
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

describe("components/common/Header", () => {
  describe.each(["wide", "narrow"])("on %s screen", (screenSize) => {
    describe("renders", () => {
      beforeEach(() => renderHeader(screenSize));

      it("logo", () => {
        expect(screen.getByTestId("logo")).toBeInTheDocument();
      });

      it("color mode toggle", () => {
        expect(screen.getByRole("checkbox")).not.toBeChecked();
      });
    });

    describe("toggles colour mode", () => {
      it("from light to dark", () => {
        renderHeader(screenSize, "light");
        const toggle = screen.getByRole("checkbox");
        fireEvent.click(toggle);
        expect(toggleColorMode).toHaveBeenCalledWith(true);
      });

      it("from dark to light", () => {
        renderHeader(screenSize, "dark");
        const toggle = screen.getByRole("checkbox");
        fireEvent.click(toggle);
        expect(toggleColorMode).toHaveBeenCalledWith(false);
      });
    });
  });

  describe("on wide screen", () => {
    beforeEach(() => renderHeader("wide"));

    describe("does not render", () => {
      it("does not render menu trigger", () => {
        expect(screen.queryByRole("button")).not.toBeInTheDocument();
      });
    });

    describe("renders", () => {
      it("all navigation options", () => {
        const screenNavOptions = screen.getAllByRole("link");
        expect(screenNavOptions).toHaveLength(navOptions.length);
        expect(screenNavOptions.map((x) => x.textContent)).toEqual(
          expect.arrayContaining(navOptions)
        );
      });
    });

    it("navigates to About page", () => {
      const aboutNavOption = screen.getByRole("link", { name: "About" });
      fireEvent.click(aboutNavOption);
      expect(window.location.pathname).toBe("/about");
    });
  });

  describe("on narrow screen", () => {
    beforeEach(() => renderHeader("narrow"));

    describe("renders", () => {
      it("only menu trigger when menu closed", () => {
        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.queryAllByRole("link")).toHaveLength(0);
      });

      it("all navigation options and menu trigger when menu open", () => {
        fireEvent.click(screen.getByRole("button"));
        expect(screen.getByRole("button")).toBeInTheDocument();
        const screenNavOptions = screen.getAllByRole("link");
        expect(screenNavOptions).toHaveLength(navOptions.length);
        expect(screenNavOptions.map((x) => x.textContent)).toEqual(
          expect.arrayContaining(navOptions)
        );
      });
    });

    it("can open and close menu", () => {
      fireEvent.click(screen.getByRole("button"));
      expect(screen.queryAllByRole("link")).toHaveLength(navOptions.length);
      fireEvent.click(screen.getByRole("button"));
      expect(screen.queryAllByRole("link")).toHaveLength(0);
    });

    it("navigates to About page", () => {
      fireEvent.click(screen.getByRole("button"));
      const aboutNavOption = screen.getByRole("link", { name: "About" });
      fireEvent.click(aboutNavOption);
      expect(window.location.pathname).toBe("/about");
    });
  });
});
