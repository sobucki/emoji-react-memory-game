import { render, screen } from "@testing-library/react";
import Menu from "..";
import { MenuProps } from "../types";

const defaultProps: MenuProps = { isOpen: true, onClose: vi.fn() };

const renderMenu = (props: MenuProps = defaultProps) => {
  return render(<Menu {...props} />);
};

describe("menu", () => {
  it("should render correctly", () => {
    const { asFragment } = renderMenu();
    expect(
      screen.getByRole("heading", { name: /start a new game/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/configure how you want to play/i)
    ).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it("should not open menu when pass isOpen false", () => {
    renderMenu({ ...defaultProps, isOpen: false });

    expect(
      screen.queryByRole("heading", { name: /start a new game/i })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(/configure how you want to play/i)
    ).not.toBeInTheDocument();
  });

  it("should combobox have correctly options", () => {
    renderMenu();

    const category = screen.getByRole("combobox", { name: /category:/i });

    expect(category).toMatchInlineSnapshot(`
      <select
        id="category-select"
        name="categories"
      >
        <option
          value=""
        >
          --Please choose an category--
        </option>
        <option
          value="activity_sports"
        >
          Activity and Sports ⚽️🤸‍♂️
        </option>
        <option
          value="animals"
        >
          Animals & Nature 🐶 🐱
        </option>
        <option
          value="clothing_accessories"
        >
          Clothing and Accessories 🧦🕶
        </option>
        <option
          value="food_drink"
        >
          Food & Drink 🍕🍺
        </option>
        <option
          value="gestures_body"
        >
          Gestures and Body Parts 👋🦶
        </option>
        <option
          value="objects"
        >
          Objects 🔧💡
        </option>
        <option
          value="people_fantasy"
        >
          People and Fantasy 👨🧛‍♂️
        </option>
        <option
          value="smileys"
        >
          Smileys 😃😝
        </option>
        <option
          value="symbols"
        >
          Flags 🇧🇷🇺🇸
        </option>
        <option
          value="symbols"
        >
          Symbols 🆘🛂
        </option>
        <option
          value="travel_places"
        >
          Travel & Places 🚙 🌆
        </option>
      </select>
    `);

    const level = screen.getByRole("combobox", { name: /level:/i });

    expect(level).toMatchInlineSnapshot(`
      <select
        id="level-select"
        name="categories"
      >
        <option
          value=""
        >
          --Please choose an level--
        </option>
        <option
          value="very_easy"
        >
          🤩 Very easy (5 emojis)
        </option>
        <option
          value="easy"
        >
          🤗 Easy (8 emojis)
        </option>
        <option
          value="normal"
        >
          🙂 Normal (10 emojis)
        </option>
        <option
          value="hard"
        >
          😣 Hard (15 emojis)
        </option>
        <option
          value="very_hard"
        >
          😨 Very hard (20 emojis)
        </option>
        <option
          value="insane"
        >
          😱 Insane (all available)
        </option>
      </select>
    `);
  });
});
