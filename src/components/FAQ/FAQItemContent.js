import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ isOpen }) => css`
  ${isOpen
    ? `
max-height: 400px
`
    : "max-height: 0;"}
`;

const FAQItemContent = styled.div`
  overflow: hidden;
  transition: 0.5s;

  & p {
    padding-top: 40px;
  }

  ${dynamicStyles};
`;

export default FAQItemContent;
