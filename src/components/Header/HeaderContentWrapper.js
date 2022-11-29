import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ variant, theme }) => css`
  ${variant
    ? `
    ${theme.breakpoints.down("sm")} {display: none}

    ${theme.breakpoints.between("sm", "xl")} {
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
      width: 100vw;
      height: 100vh;
      opacity: 0.3;
      background-color: ${theme.palette.text.disabled}
    }

    ${theme.breakpoints.up("xl")} {
      display: none;
    }
  `
    : `display: none;`}
`;

const HeaderContentWrapper = styled.div`
  ${dynamicStyle}
`;

export default HeaderContentWrapper;
