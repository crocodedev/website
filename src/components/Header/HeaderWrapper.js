import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ variant, theme }) => css`
  ${variant === "sticky"
    ? `
    transform: translateY(0)
  `
    : `
    ${theme.breakpoints.down("md")} {
      transform: translateY(-70px)
    }

    ${theme.breakpoints.up("md")} {
      transform: translateY(-90px)
    }
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

  &::after {
    content: "The site is under construction";
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: white;
    font-weight: 700;
    background: #7dbe3b;
    padding: 5px 10px;
    border-radius: 0 0 10px 10px;
    text-transform: uppercase;

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 100%;
      bottom: -30px;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      bottom: -30px;
    }
  }

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
