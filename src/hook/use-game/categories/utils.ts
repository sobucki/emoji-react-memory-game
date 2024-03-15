import activity_sports from "./activity_sports.json";
import animals_nature from "./animals_nature.json";
import clothing_accessories from "./clothing_accessories.json";
import flags from "./flags.json";
import food_drink from "./food_drink.json";
import gestures_body from "./gestures_body.json";
import objects from "./objects.json";
import people_fantasy from "./people_fantasy.json";
import smileys from "./smileys.json";
import symbols from "./symbols.json";
import travel_places from "./travel_places.json";

export const selectCardsByCategory = (category: string): string[] => {
  switch (category) {
    case "activity_sports":
      return activity_sports;
    case "animals_nature":
      return animals_nature;
    case "clothing_accessories":
      return clothing_accessories;
    case "food_drink":
      return food_drink;
    case "gestures_body":
      return gestures_body;
    case "objects":
      return objects;
    case "people_fantasy":
      return people_fantasy;
    case "smileys":
      return smileys;
    case "flags":
      return flags;
    case "symbols":
      return symbols;
    case "travel_places":
      return travel_places;
    default:
      return [];
  }
};

export const getSizeByLevel = (level: string) => {
  switch (level) {
    case "very_easy":
      return 5;
    case "easy":
      return 8;
    case "normal":
      return 10;
    case "hard":
      return 15;
    case "very_hard":
      return 20;
    case "insane":
      return 50;

    default:
      return 5;
  }
};
