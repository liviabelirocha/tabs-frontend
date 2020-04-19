import styled from "styled-components";
import Youtube from "react-youtube";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 60px;
`;

export const Container = styled.div`
  margin: 24px;
  display: flex;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 75%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    padding: 8px;
    font-size: 24px;
    border-bottom: 1px solid #000;
    font-weight: bold;
  }

  @media (max-width: 1366px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 36px;
  align-items: center;
`;

export const InfoFile = styled.a`
  background-color: #3d2b57;
  color: #fff;
  padding: 8px;
  margin-top: 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  transition: 0.2s;
  text-decoration: none;

  :hover {
    background-color: #7452a3;
    color: #000;
  }
`;

export const InfoSong = styled.div`
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  font-size: 24px;
  text-align: center;
`;

export const YoutubePlayer = styled(Youtube)`
  width: 640px;
  height: 360px;

  @media (max-width: 768px) {
    width: 427px;
    height: 240px;
  }
`;
