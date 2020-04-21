import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  background-color: #7452a3;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    color: #fff;
    list-style-type: none;
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    user-select: none;
  }

  @media (max-width: 768px) {
    ${(props) =>
      props.active
        ? css`
            ul {
              display: flex;
              flex-direction: column-reverse;
            }
          `
        : css`
            display: none;
          `}
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: 0.2s;

  :hover {
    color: #7eff4f;
    border-bottom: 1px solid #7eff4f;
  }

  img {
    height: 3rem;
  }
`;

export const Bars = styled(FaBars)`
  font-size: 64px;
  color: #fff;
  display: none;
  width: 100%;
  padding: 20px;
  background-color: #7452a3;
  transition: 0.2s;
  text-align: right;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.active
      ? css`
          background-color: #3d2b57;
        `
      : css`
          background-color: none;
        `}

  @media (max-width: 768px) {
    display: block;
  }
`;
