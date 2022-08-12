import styled from "@emotion/styled";

const ContactsUsTextarea = styled.textarea`
  width: 100%;
  outline: none;
  resize: none;
  padding: 16px 0px 15px 15px;
  max-height: 150px;
  // border-radius: ${({ theme }) => theme.borderRadius.small};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export default ContactsUsTextarea;
