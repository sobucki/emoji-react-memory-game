export type Card = {
  id: string;
  value: string;
  isMatched: string;
  state: "flipped" | "hide";
};

export type ShuffleProps = {
  level: GameLevel;
  category: GameCategory;
};

export type GameCategory = "animals";

export type GameLevel =
  | "very_easy"
  | "easy"
  | "normal"
  | "hard"
  | "very_hard"
  | "insane";
