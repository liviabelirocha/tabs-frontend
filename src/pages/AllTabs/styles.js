import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 60px;
`;

export const Container = styled.div`
  margin: 24px;

  center {
    font-weight: bold;
    font-size: 36px;
    user-select: none;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1366px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Song = styled.div`
  display: flex;
  background-color: #fff;
  margin: 24px;
  padding: 24px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  div {
    margin-left: 8px;
  }
`;
