import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import GalleryTextFilter from "../GalleryTextFilter";

const placeholder = "Type here";
const searchText = "elephant";
const newSearchText = "elephants";
const setSearchText = jest.fn();

describe("components/common/GalleryTextFilter", () => {
  beforeEach(() =>
    render(
      <GalleryTextFilter
        placeholder={placeholder}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    )
  );

  it("renders input", () => {
    expect(screen.getByLabelText("Search:")).toHaveDisplayValue(searchText);
    expect(screen.getByPlaceholderText(placeholder)).toHaveValue(searchText);
  });

  it("handles input change", () => {
    const input = screen.getByLabelText("Search:");
    fireEvent.change(input, { target: { value: newSearchText } });
    expect(setSearchText).toHaveBeenCalledWith(newSearchText);
  });
});
