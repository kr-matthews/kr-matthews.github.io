import { Image } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Toggle from "../Toggle";

const onToggle = jest.fn();

describe("components/common/Toggle", () => {
  describe("without label", () => {
    let toggle;

    beforeEach(() => {
      render(<Toggle />);
      toggle = screen.getByRole("checkbox");
    });

    it("does not render label", () => {
      expect(screen.getByLabelText("")).toBe(toggle);
    });

    it("is not checked", () => {
      expect(toggle).not.toBeChecked();
    });

    it("changes value", () => {
      fireEvent.click(toggle);
      expect(toggle).toBeChecked();
    });
  });

  describe("with label", () => {
    let toggle;

    beforeEach(() => {
      render(<Toggle label="Switch" onToggle={onToggle} />);
      toggle = screen.getByRole("checkbox");
    });

    it("renders label", () => {
      expect(screen.getByLabelText("Switch")).toBe(toggle);
    });

    it("is not checked", () => {
      expect(toggle).not.toBeChecked();
    });

    it("changes value", () => {
      fireEvent.click(toggle);
      expect(toggle).toBeChecked();
    });

    it("calls onToggle", () => {
      fireEvent.click(toggle);
      expect(onToggle).toHaveBeenCalledWith(true);
    });

    it("changes value back with onToggle call", () => {
      fireEvent.click(toggle);
      fireEvent.click(toggle);
      expect(toggle).not.toBeChecked();
      expect(onToggle).toHaveBeenLastCalledWith(false);
    });
  });

  describe("with label and left icon", () => {
    let toggle;

    beforeEach(() => {
      render(<Toggle label="Switch" left={<Image data-testid="icon" />} />);
      toggle = screen.getByRole("checkbox");
    });

    it("renders label", () => {
      expect(screen.getByLabelText("Switch")).toBe(toggle);
    });

    it("renders icon", () => {
      expect(screen.getByTestId("icon")).toBeVisible();
    });
  });

  describe("with label and right icon", () => {
    let toggle;

    beforeEach(() => {
      render(<Toggle label="Switch" right={<Image data-testid="icon" />} />);
      toggle = screen.getByRole("checkbox");
    });

    it("renders label", () => {
      expect(screen.getByLabelText("Switch")).toBe(toggle);
    });

    it("renders icon", () => {
      expect(screen.getByTestId("icon")).toBeVisible();
    });
  });
});
