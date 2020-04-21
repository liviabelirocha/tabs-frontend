import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 24px;
  padding: 24px;
  border-radius: 15px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.2);
  transition: 0.1s;

  :hover {
    margin: 8px;
  }

  h2 {
    font-size: 24px;
    user-select: none;
  }

  img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 15px;
    align-self: center;
    user-select: none;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 16px;
    }
  }
`;
