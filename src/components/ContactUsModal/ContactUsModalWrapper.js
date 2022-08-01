import styled from "@emotion/styled";

const ContactUsModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export default ContactUsModalWrapper;
