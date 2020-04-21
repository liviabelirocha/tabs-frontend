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
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1366px) {
    display: flex;
    flex-direction: column;
  }
`;
