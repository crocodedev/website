import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ isOpen }) => css`
  ${isOpen
    ? `
    pointer-events: auto;
    opacity: 1;`
    : `
    opacity:0;
    pointer-events: none;
`}
`;

const ContactUsModalWrapper = styled.div`
  position: fixed;
  z-index: 5;
  transition: opacity 0.4s;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  ${dynamicStyle}
`;

export default ContactUsModalWrapper;
