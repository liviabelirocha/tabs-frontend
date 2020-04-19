import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SubmitContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubmitContent = styled.div`
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

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  margin-top: 10px;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
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
