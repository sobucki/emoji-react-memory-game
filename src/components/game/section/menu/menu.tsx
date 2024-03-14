import { Content, Overlay } from "./styles";
import { MenuProps } from "./types";

function Menu({ isOpen, onClose }: MenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <h2>Start a new game</h2>
        <fieldset>
          <legend>Configure how you want to play</legend>
          <div>
            <label htmlFor="category-select">Category:</label>

            <select name="categories" id="category-select">
              <option value="">--Please choose an category--</option>
              <option value="activity_sports">Activity and Sports ⚽️🤸‍♂️</option>
              <option value="animals">Animals & Nature 🐶 🐱</option>
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
              <option value="symbols">Flags 🇧🇷🇺🇸</option>
              <option value="symbols">Symbols 🆘🛂</option>
              <option value="travel_places">Travel & Places 🚙 🌆</option>
            </select>

            <label htmlFor="level-select">Level:</label>

            <select name="categories" id="level-select">
              <option value="">--Please choose an level--</option>
              <option value="very_easy">🤩 Very easy (5 emojis)</option>
              <option value="easy">🤗 Easy (8 emojis)</option>
              <option value="normal">🙂 Normal (10 emojis)</option>
              <option value="hard">😣 Hard (15 emojis)</option>
              <option value="very_hard">😨 Very hard (20 emojis)</option>
              <option value="insane">😱 Insane (all available)</option>
            </select>

            <button>Start</button>
          </div>
        </fieldset>
      </Content>
    </Overlay>
  );
}

export default Menu;
