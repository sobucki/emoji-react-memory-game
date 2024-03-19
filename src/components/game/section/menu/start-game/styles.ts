import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Content = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 5px;
  position: relative;
  max-width: 400px;

  h2 {
    text-align: center;
    margin: 8px 0 16px 0;
  }

  fieldset {
    legend {
      font-size: 1rem;
      margin-bottom: 16px;
    }

    > form {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 8px;
      }

      select {
        font-size: 20px;
        margin-bottom: 16px;

        option {
          font-size: 18px;
        }
      }

      button {
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #0056b3;
        }

        &:active {
          background-color: #004085;
        }
      }
    }
  }
`;
