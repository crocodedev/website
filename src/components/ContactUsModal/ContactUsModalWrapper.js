import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ subscribeModal }) => css`
  ${subscribeModal
    ? `z-index: 2;
    pointer-events: auto;
    opacity: 1;`
    : `
    @keyframes zIndex {
      0% {
        z-index: 2;
      }

      99% {
        z-index: 2;
      }

      100% {
        z-index: -10;
      }
    }
    opacity:0;
    pointer-events: none;
`}
`;

const ContactUsModalWrapper = styled.div`
  animation-name: zIndex;
  animation-duration: .5s;
  position: fixed;
  transition: opacity .5s;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  ${dynamicStyle}
`;

export default ContactUsModalWrapper;
