import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ variant, theme }) => css`
  ${variant
    ? `
    ${theme.breakpoints.down("sm")} {
      height: 100vh;
      overflow: auto;
      padding-top: 70px;
    }

    ${theme.breakpoints.down("xl")} {
      height: 100vh;
      overflow: auto;
      transform: translateX(0);
    }

    & ~ div {
      & button {
        justify-content: flex-end;
      }
    }
  `
    : ""}
`;

const HeaderContent = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.contrastText};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
    padding-top: 70px;
    transform: translateX(480px);
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    min-width: 237px;
    padding-top: 70px;
    transform: translateX(237px);
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    min-width: 300px;
    padding-top: 90px;
    transform: translateX(300px);
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    position: fixed;
    flex-direction: column;
    z-index: 4;
    transition: 1s;
    right: 0;
    display: flex;
    top: 0;
    height: 100vh;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: flex;
    gap: 30px;
    height: 100%;
  }

  & button {
    align-self: center;
  }

  ${dynamicStyle}
`;

export default HeaderContent;
