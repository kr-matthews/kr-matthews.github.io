import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../Modal";

const user = userEvent.setup();

const onClose = jest.fn();

describe("components/common/Modal", () => {
  describe("closed modal", () => {
    it("does not render", () => {
      render(<Modal isOpen={false} />);
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("open modal", () => {
    beforeEach(() =>
      render(
        <Modal isOpen onClose={onClose}>
          Test content
        </Modal>
      )
    );
    it("renders a dialog", () => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("shows content", () => {
      expect(screen.getByText("Test content")).toBeInTheDocument();
    });

    // https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/modal/tests/modal.test.tsx#L99
    it("clicking outside calls onClose", async () => {
      const dialog = await screen.findByRole("dialog");
      const overlay = dialog.parentElement;
      // unclear why mouseDown is required
      fireEvent.mouseDown(overlay);
      fireEvent.click(overlay);
      expect(onClose).toHaveBeenCalled();
    });

    // https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/modal/tests/modal.test.tsx#L122
    it("hitting esc calls onClose", async () => {
      await user.keyboard("[Escape]");
      expect(onClose).toHaveBeenCalled();
    });
  });
});
