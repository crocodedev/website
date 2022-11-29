import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ variant }) => css`
  ${variant
    ? `
      background-color: transparent;
      transition: 0.4s;

      &:before {
        transform: rotate(45deg);
        top: 0;
        transition: 0.4s;
      }

      &:after {
        transform: rotate(-45deg);
        bottom: 2px;
        transition: 0.4s;

      }
  `
    : ""}
`;

const HeaderMenuIcon = styled.span`
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: 0.4s;

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: relative;
    width: 24px;
    height: 2px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.text.primary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: 0.4s;
  }

  &::before {
    top: 6px;
  }

  &::after {
    bottom: 8px;
  }

  ${dynamicStyle}
`;

export default HeaderMenuIcon;
