import styled, { css } from "styled-components";

interface ContainerProps {
  $active: boolean;
  $matched: boolean;
}

export const Container = styled.button<ContainerProps>`
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

  transform: ${(props) => (props.$active ? "rotateY(-180deg)" : "none")};

  background-color: aliceblue;

  &:disabled {
    cursor: unset;
    ${(props) =>
      props.$active &&
      !props.$matched &&
      css`
        color: #000;
      `}
  }

  .back,
  .front {
    backface-visibility: hidden;
    position: absolute;
    visibility: hidden;
  }

  .back {
    transform: rotateY(0deg);
    visibility: ${(props) => (props.$active ? "hidden" : "visible")};
  }

  .front {
    transform: rotateY(180deg);
    visibility: ${(props) => (props.$active ? "visible" : "hidden")};
    ${(props) =>
      props.$matched &&
      css`
        filter: grayscale(100%);
      `}
  }

  .front {
    display: inline-block;
  }
`;
