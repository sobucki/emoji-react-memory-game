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

  break-before: avoid;
  break-after: auto;

  font-size: 36px;

  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: rotateY(-180deg);
  }

  background-color: aliceblue;
`;

export const Back = styled.div`
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(0deg);
`;
export const Front = styled.div`
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(180deg);
`;
