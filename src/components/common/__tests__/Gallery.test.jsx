import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Gallery from "../Gallery";
import { BrowserRouter } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import { Fragment } from "react";

describe("components/common/Gallery", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <Gallery>
          <Heading key={0}>Gallery item</Heading>
          <Fragment key={1}>Testing</Fragment>
          <Box key={2}>Another test item</Box>
        </Gallery>
      </BrowserRouter>
    )
  );

  describe("renders", () => {
    it("text", () => {
      expect(screen.getByText("Results:")).toBeInTheDocument();
    });

    it("items", () => {
      const items = screen.getAllByTestId("item");
      expect(items).toHaveLength(3);
      expect(items[0]).toHaveTextContent("Gallery item");
      expect(items[1]).toHaveTextContent("Testing");
      expect(items[2]).toHaveTextContent("Another test item");
    });
  });
});
