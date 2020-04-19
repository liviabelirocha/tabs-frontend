import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #808a9f;
  height: 60px;
  position: absolute;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  li {
    list-style-type: none;
    padding: 16px 8px;
  }

  a {
    color: #000;
  }
`;
