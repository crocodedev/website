import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ variant, theme }) => css`
  ${variant === "active"
    ? `

    ${theme.breakpoints.down("sm")} {
      width: 100%;
      height: 100vh;
    }

    ${theme.breakpoints.down("xl")} {
      display: flex;
      padding-top: 78px;
    }

    & ~ div {
      & button {
        justify-content: flex-end;
      }
    }
  `
    : `display: none`}
`;

const HeaderContent = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  height: 100%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    top: 0;
    right: 0;
    min-width: 237px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    top: 12px;
    right: 0;
    min-width: 300px;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    position: absolute;
    z-index: 2;
    flex-direction: column;
    height: max-content;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: flex;
    gap: 40px;
  }

  & button {
    align-self: center;
  }

  ${dynamicStyle}
`;

export default HeaderContent;
