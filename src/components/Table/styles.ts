import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  margin: 16px;
  padding: 16px;

  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  background-color: aquamarine;
`;
