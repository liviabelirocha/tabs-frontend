import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 1024px;

  input {
    margin-top: 8px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #3d2b57;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: 0.2s;

  :hover {
    background: #7452a3;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #3d2b57;
  margin-bottom: 24px;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s;

  svg {
    margin-right: 8px;
  }

  :hover {
    color: #7452a3;
  }
`;
