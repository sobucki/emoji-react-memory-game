import { FormEvent } from "react";
import { Content, Overlay } from "./styles";
import { MenuProps } from "./types";
import { selectCardsByCategory } from "../../../../hook/use-game/categories/utils";

function Menu({ isOpen, onSubmit }: MenuProps) {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const category = form.elements.namedItem("categories") as HTMLSelectElement;
    const level = form.elements.namedItem("levels") as HTMLSelectElement;
    const selectedCards = selectCardsByCategory(category.value);
    onSubmit({
      category: category.value,
      level: level.value,
      optionsCards: selectedCards,
    });
  };

  return (
    <Overlay>
      <Content onClick={(e) => e.stopPropagation()}>
        <h2>Start a new game</h2>
        <fieldset>
          <legend>Configure how you want to play</legend>
          <form onSubmit={handleSubmit}>
            <label htmlFor="category-select">Category:</label>

            <select name="categories" id="category-select" required>
              <option value="">--Please choose an category--</option>
              <option value="activity_sports">Activity and Sports ⚽️🤸‍♂️</option>
              <option value="animals_nature">Animals & Nature 🐶 🐱</option>
              <option value="clothing_accessories">
                Clothing and Accessories 🧦🕶
              </option>
              <option value="food_drink">Food & Drink 🍕🍺</option>
              <option value="gestures_body">
                Gestures and Body Parts 👋🦶
              </option>
              <option value="objects">Objects 🔧💡</option>
              <option value="people_fantasy">People and Fantasy 👨🧛‍♂️</option>
              <option value="smileys">Smileys 😃😝</option>
              <option value="flags">Flags 🇧🇷🇺🇸</option>
              <option value="symbols">Symbols 🆘🛂</option>
              <option value="travel_places">Travel & Places 🚙 🌆</option>
            </select>

            <label htmlFor="level-select">Level:</label>

            <select name="levels" id="level-select" required>
              <option value="">--Please choose an level--</option>
              <option value="very_easy">🤩 Very easy (5 emojis)</option>
              <option value="easy">🤗 Easy (8 emojis)</option>
              <option value="normal">🙂 Normal (10 emojis)</option>
              <option value="hard">😣 Hard (15 emojis)</option>
              <option value="very_hard">😨 Very hard (20 emojis)</option>
              <option value="insane">😱 Insane (50 emojis)</option>
            </select>

            <button type="submit">Start</button>
          </form>
        </fieldset>
      </Content>
    </Overlay>
  );
}

export default Menu;
