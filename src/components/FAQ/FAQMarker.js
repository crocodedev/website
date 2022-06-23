import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ isOpen }) => css`
  ${isOpen ? "transform: rotate(45deg)" : "transform: translate(0deg)"};
`;

const FAQMarker = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  position: relative;
  transition: 0.5s;

  &::before,
  &::after {
    content: "";
    width: 14px;
    height: 2px;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.tertiary.main};
  }

  &::after {
    transform: rotate(90deg);
  }

  ${dynamicStyle}
`;

export default FAQMarker;
