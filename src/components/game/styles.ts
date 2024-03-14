import styled from "styled-components";

export const Table = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  margin: 16px;
  padding: 16px;

  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;
export const Header = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    height: 64px;
    min-width: 115px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px #000;
  }
`;
