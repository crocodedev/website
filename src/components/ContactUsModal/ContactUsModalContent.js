import styled from "@emotion/styled";

const ContactUsModalContent = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.popup};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 40px 63px;
  gap: 10px;
`;

export default ContactUsModalContent;
