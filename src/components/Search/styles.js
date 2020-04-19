import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: row;

  input {
    height: 36px;
    margin-right: 8px;
  }

  button {
    border: none;
    border-radius: 8px;
    width: 92px;
    height: 36px;
    transition: 0.2s;
    background-color: #fff;
  }

  button:hover {
    border: 3px solid #7eff4f;
  }
`;
