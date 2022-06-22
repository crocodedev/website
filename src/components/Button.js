import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ theme, variant }) => css`
  ${variant === "outlined"
    ? `
    color: ${theme.palette.primary.main};
    border: 1px solid ${theme.palette.primary.main};

    &:hover {
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.primary.main};
    }
  `
    : ""}

  ${variant === "contained"
    ? `
    color: ${theme.palette.primary.contrastText};
    background-color: ${theme.palette.primary.main};

    &:hover {
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.secondary.dark};
    }
  `
    : ""}

  ${variant === "text"
    ? `
    color: ${theme.palette.primary.main};
  `
    : ""}
`;

const Button = styled.button`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.captionText};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  line-height: 20px;
  text-align: center;
  padding: 12px 25px;
  cursor: pointer;
  transition: 0.3s;

  ${dynamicStyle}
`;

export default Button;
