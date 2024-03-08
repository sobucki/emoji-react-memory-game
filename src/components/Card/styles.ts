import styled from "styled-components";

export const Container = styled.button`
  border: 1px solid #000;
  height: 75px;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;

  break-before: avoid; /* Evita que o elemento seja quebrado para a próxima linha */
  break-after: auto;
`;
