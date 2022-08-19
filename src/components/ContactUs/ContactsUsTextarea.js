import styled from "@emotion/styled";

const ContactsUsTextarea = styled.textarea`
  width: 100%;
  outline: none;
  resize: none;
  padding: 16px 0px 15px 15px;
  max-height: 150px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;

  &::placeholder {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 300px;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export default ContactsUsTextarea;
