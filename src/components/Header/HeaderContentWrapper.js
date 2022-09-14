import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({variant, theme}) => css`
  ${variant === "active" ? `
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    opacity: 0.4;
    background-color: ${theme.palette.tertiary.main}
  ` : ""}
`;

const HeaderContentWrapper = styled.div`
  display: none;
  ${dynamicStyle}
`;

export default HeaderContentWrapper;
