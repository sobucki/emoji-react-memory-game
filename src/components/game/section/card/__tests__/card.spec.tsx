import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Card from "..";

const renderCard = (value: string, onClick: () => void = vi.fn()) => {
  return render(<Card value={value} onClick={onClick} />);
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
      const { container } = renderCard("A");
      expect(container).toBeInTheDocument();
    });

    it("should display the value when active", () => {
      renderCard("A");
      const card = screen.getByRole("button");
      fireEvent.click(card);
      expect(card).toHaveTextContent("A");
    });

    it("should hide the value when inactive", () => {
      renderCard("A");
      const card = screen.getByRole("button");
      expect(card).toHaveTextContent("?");
    });

    it("should toggle active state on click", () => {
      renderCard("A");
      const card = screen.getByRole("button");
      fireEvent.click(card);
      expect(card).toHaveTextContent("A");
      fireEvent.click(card);
      expect(card).toHaveTextContent("?");
    });

    it("should not display the value when inactive", () => {
      renderCard("A");
      const valueElement = screen.queryByText("A");
      expect(valueElement).not.toBeInTheDocument();
    });

    it("should not display the question mark when active", () => {
      renderCard("A");
      const card = screen.getByRole("button");
      fireEvent.click(card);

      const back = screen.getByTestId("back");
      const front = screen.getByTestId("front");

      const backStyle = window.getComputedStyle(back);
      const frontStyle = window.getComputedStyle(front);

      expect(backStyle.visibility).toBe("hidden");
      expect(frontStyle.visibility).toBe("visible");
    });

    it("should reveal and hide the card value correctly", async () => {
      const mockOnClick = vi.fn();
      render(<Card value="A" onClick={mockOnClick} />);

      const card = screen.getByTestId("front");
      expect(card.textContent).toBe("?");

      // Simula um clique para revelar o valor da carta
      fireEvent.click(card);
      expect(card.textContent).toBe("A");

      // Simula a chamada de setRevealed com false para esconder o valor
      await act(async () => {
        await mockOnClick.mock.calls[0][1](false);
      });
      expect(card.textContent).toBe("?");

      // Simula a chamada de setRevealed com true para manter o valor revelado
      fireEvent.click(card);
      await act(async () => {
        await mockOnClick.mock.calls[1][1](true);
      });
      expect(card.textContent).toBe("A");
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });
});
