import { useState } from "react";
import { Container } from "./styles";
import { CardProps } from "./types";

function Card({ value, onClick: onTest }: CardProps) {
  const [isActive, setIsActive] = useState(false);
  const [isMatched, setIsMatched] = useState(false);

  const setRevealed = (matched: boolean) => {
    if (!matched) {
      setIsActive(false);
      return;
    }
    setIsMatched(true);
  };

  return (
    <Container
      active={isActive}
      onClick={() => {
        setIsActive(!isActive);
        onTest(value, setRevealed);
      }}
      disabled={isMatched}
    >
      <div className="back" data-testid="back">
        ?
      </div>
      <div className="front" data-testid="front">
        {isActive ? value : "?"}
      </div>
    </Container>
  );
}

export default Card;
