import { Container } from "./styles";
import { CardProps } from "./types";

function Card({ info, ...rest }: CardProps) {
  const isActive = info.status === "flipped" || info.status === "matched";
  const isMatched = info.status === "matched";

  return (
    <Container
      {...rest}
      $active={isActive}
      $matched={isMatched}
      disabled={isActive}
      data-testid="card-container"
    >
      <div className="back" data-testid="back">
        ?
      </div>
      <div className="front" data-testid="front">
        {isActive ? info.value : "?"}
      </div>
    </Container>
  );
}

export default Card;
