import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ theme, fadecolor }) => css`
  background: ${fadecolor === "light" ? theme.linearGradient.light : ""}
    ${fadecolor === "paper" ? theme.linearGradient.paper : ""};
`;

const HeroMainImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  display: flex;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 35%;
    bottom: 0;
    ${dynamicStyle}
  }

  & div {
    max-width: 1920px;
    width: 100%;
    height: 100%;

    img {
      min-height: calc(100vh - 100px);
      max-height: 100%;
    }
  }
`;

export default HeroMainImage;
