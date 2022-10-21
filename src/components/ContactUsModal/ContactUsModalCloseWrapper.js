import styled from "@emotion/styled";

const ContactUsModalCloseWrapper = styled.div`
  position: relative;
  display: grid;
  box-shadow: ${({ theme }) => theme.shadows.popup};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export default ContactUsModalCloseWrapper;
