import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ variant }) => css`
  ${variant === "none"
    ? `
  display: none;
  `
    : ""}
`;

const ContactUsModalCloseWrapper = styled.div`
  position: relative;
  padding: 40px 63px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: ${({ theme }) => theme.shadows.popup};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};

  ${dynamicStyle}
`;

export default ContactUsModalCloseWrapper;
