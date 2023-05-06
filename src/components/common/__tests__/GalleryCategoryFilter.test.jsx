import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GalleryCategoryFilter from "../GalleryCategoryFilter";

const title = "My Category";
const categories = ["Cat1", "Cat2", "Cat3"];
const areSelected = [true, true, false];
const counts = [3, 1, 2];
const totalItems = 5;
const toggleOne = jest.fn();
const isAllSelected = false;
const toggleAll = jest.fn();

describe("components/common/GalleryCategoryFilter", () => {
  beforeEach(() =>
    render(
      <GalleryCategoryFilter
        {...{
          title,
          categories,
          areSelected,
          counts,
          totalItems,
          toggleOne,
          isAllSelected,
          toggleAll,
        }}
      />
    )
  );

  describe("renders", () => {
    it("text", () => {
      expect(screen.getByText(title + ":")).toBeInTheDocument();
    });

    it("buttons", () => {
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(categories.length + 1);
      expect(buttons[0]).toHaveTextContent("All (" + totalItems + ")");
      for (let category of categories) {
        const index = categories.indexOf(category);
        expect(buttons[index + 1]).toHaveTextContent(
          category + " (" + counts[index] + ")"
        );
      }
    });
  });

  it("correct amount of categories are highlighted", () => {
    const selectedCount =
      areSelected.filter((x) => x).length + (isAllSelected ? 1 : 0);
    const unselectedCount = categories.length + 1 - selectedCount;
    const selectedCategories = screen.getAllByTestId("selected");
    const unselectedCategories = screen.getAllByTestId("unselected");
    expect(selectedCategories).toHaveLength(selectedCount);
    expect(unselectedCategories).toHaveLength(unselectedCount);
  });

  it("selected categories are highlighted", () => {
    const selectedCategories = screen.getAllByTestId("selected");
    const unselectedCategories = screen.getAllByTestId("unselected");
    if (isAllSelected) {
      expect(selectedCategories.map((x) => x.textContent)).toContain(
        "All (" + totalItems + ")"
      );
    } else {
      expect(unselectedCategories.map((x) => x.textContent)).toContain(
        "All (" + totalItems + ")"
      );
    }
    for (let category of categories) {
      const index = categories.indexOf(category);
      if (areSelected[index]) {
        expect(selectedCategories.map((x) => x.textContent)).toContain(
          category + " (" + counts[index] + ")"
        );
      } else {
        expect(unselectedCategories.map((x) => x.textContent)).toContain(
          category + " (" + counts[index] + ")"
        );
      }
    }
  });
});
