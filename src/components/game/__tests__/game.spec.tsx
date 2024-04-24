import { fireEvent, render, screen, within } from "@testing-library/react";
import Game from "..";

const renderGame = () => {
  return render(<Game />);
};

describe("game", () => {
  describe("rendering", () => {
    it("should match snapshot", () => {
      const { asFragment } = renderGame();
      expect(asFragment()).toMatchSnapshot();
    });

    it("should start with menu opened", () => {
      renderGame();
      const modalTitle = screen.getByText("Start a new game");
      expect(modalTitle).toBeInTheDocument();
    });
  });

  describe("behavior", () => {
    it("should close menu after input and press start", () => {
      renderGame();

      const categorySelect = screen.getByRole("combobox", {
        name: /category:/i,
      });
      fireEvent.change(categorySelect, { target: { value: "animals_nature" } });

      const levelSelect = screen.getByRole("combobox", { name: /level:/i });
      fireEvent.change(levelSelect, { target: { value: "normal" } });

      fireEvent.click(screen.getByRole("button", { name: /start/i }));

      expect(screen.queryByText("Start a new game")).not.toBeInTheDocument();
    });

    it.only("should start a game with VERY EASY level", () => {
      renderGame();

      const categorySelect = screen.getByRole("combobox", {
        name: /category:/i,
      });
      const categoryOptions = within(categorySelect).queryAllByRole("option");

      const firstOption = categoryOptions.find(
        (option) => (option as HTMLOptionElement).value
      ).?;
      console.log(firstOption.val);

      // expect(categoryOptions).toEqual([]);
    });
  });
});
