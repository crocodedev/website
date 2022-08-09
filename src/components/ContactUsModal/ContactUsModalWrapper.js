import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ variant }) => css`
  ${variant === "none"
    ? ""
    : `
  z-index: 2;
  position: fixed;
  background-color: rgb(73 73 73 / 50%);
`}
`;

const ContactUsModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${dynamicStyle}
`;

export default ContactUsModalWrapper;
