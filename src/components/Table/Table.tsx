import Card from "../Card";
import { Container } from "./styles";
import emojis from "../../assets/faces.json";

function Table() {
  return (
    <Container>
      {emojis.map((emoji, index) => (
        <Card key={index} value={emoji} />
      ))}
    </Container>
  );
}

export default Table;
