import { useState } from "react";
import { Container } from "./styles";
import { CardProps } from "./types";

function Card({ value }: CardProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container active={isActive} onClick={() => setIsActive(!isActive)}>
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
