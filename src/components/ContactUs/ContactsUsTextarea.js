import styled from "@emotion/styled";

const ContactsUsTextarea = styled.textarea`
  width: 100%;
  outline: none;
  resize: none;
  padding: 14px 15px;
  overflow: auto;
  max-height: 150px;
  // border-radius: ${({ theme }) => theme.borderRadius.small};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};

  &::-webkit-scrollbar {
    width: 0px;
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    background-color: #eeeeee;
  }

  &:valid {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 0px 10px rgba(125, 190, 59, 0.1);
  }

  &:invalid {
    border: 1px solid #f40808;
    box-shadow: 0px 0px 10px rgba(244, 8, 8, 0.1);
  }
`;

export default ContactsUsTextarea;
