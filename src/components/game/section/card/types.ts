export type CardProps = {
  value: string;
  onClick: (value: string, matchCard: (value: boolean) => void) => void;
};
