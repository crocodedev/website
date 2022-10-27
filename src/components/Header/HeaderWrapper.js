import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ variant }) => css`
  ${variant === "sticky"
    ? `
    transform: translateY(0)
  `
    : `
    transform: translateY(-90px)
  `}
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  display: flex;
  box-shadow: ${({ theme }) => theme.shadows.header};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  transition: 0.5s;

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 70px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    justify-content: center;
    height: 90px;
  }

  ${dynamicStyle}
`;

export default HeaderWrapper;
