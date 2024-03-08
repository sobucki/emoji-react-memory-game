import { Back, Container, Front } from "./styles";
import { CardProps } from "./types";

function Card({ value }: CardProps) {
  return (
    <Container>
      <Back>?</Back>
      <Front>{value}</Front>
    </Container>
  );
}

export default Card;
