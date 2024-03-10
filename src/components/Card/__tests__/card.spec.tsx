import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Card from "..";

const renderCard = (value: string) => {
  return render(<Card value={value} />);
};
describe("Card tests", () => {
  describe("Rendering", () => {
    it("should render a button with question mark symbol", () => {
      renderCard("");
      expect(screen.getByRole("button", { name: /\?/i })).toBeInTheDocument();
    });
  });

  describe("Behaviors", () => {
    it("should render correctly", () => {
      const { container } = render(<Card value="A" />);
      expect(container).toBeInTheDocument();
    });

    it("should display the value when active", () => {
      render(<Card value="A" />);
      const card = screen.getByRole("button");
      fireEvent.click(card);
      expect(card).toHaveTextContent("A");
    });

    it("should hide the value when inactive", () => {
      render(<Card value="A" />);
      const card = screen.getByRole("button");
      expect(card).toHaveTextContent("?");
    });

    it("should toggle active state on click", () => {
      render(<Card value="A" />);
      const card = screen.getByRole("button");
      fireEvent.click(card);
      expect(card).toHaveTextContent("A");
      fireEvent.click(card);
      expect(card).toHaveTextContent("?");
    });

    it("should not display the value when inactive", () => {
      render(<Card value="A" />);
      const valueElement = screen.queryByText("A");
      expect(valueElement).not.toBeInTheDocument();
    });

    it("should not display the question mark when active", () => {
      render(<Card value="A" />);
      const card = screen.getByRole("button");
      fireEvent.click(card);

      const back = screen.getByTestId("back");
      const front = screen.getByTestId("front");

      const backStyle = window.getComputedStyle(back);
      const frontStyle = window.getComputedStyle(front);

      expect(backStyle.visibility).toBe("hidden");
      expect(frontStyle.visibility).toBe("visible");
    });
  });
});
