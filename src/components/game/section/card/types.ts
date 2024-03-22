import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLButtonElement> {
  info: CardInfo;
  // onClick: (card: CardInfo, matchCard: (value: boolean) => void) => void;
}

export type CardData = Pick<CardInfo, "id" | "value">;

export type CardInfo = {
  id: string;
  value: string;
  status: CardStatus;
};

export type CardStatus = "hide" | "flipped" | "matched";
