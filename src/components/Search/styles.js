import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: row;

  input {
    height: 36px;
    margin-right: 8px;
    border-radius: 0;
    transition: 0.1s;
  }

  input:focus {
    border: 2px solid #7eff4f;
  }

  button {
    border: none;
    width: 92px;
    height: 36px;
    transition: 0.2s;
    background-color: #fff;
  }

  button:hover {
    border: 2px solid #7eff4f;
  }
`;
