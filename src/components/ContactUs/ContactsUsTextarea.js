import styled from "@emotion/styled";

const ContactsUsTextarea = styled.textarea`
  width: 100%;
  outline: none;
  resize: none;
  padding: 14px 0px 14px 15px;
  overflow: auto;
  max-height: 150px;
  // border-radius: ${({ theme }) => theme.borderRadius.small};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export default ContactsUsTextarea;
