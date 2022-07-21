import styled from "@emotion/styled";

const ContactsUsInputFile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};

  & input {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    box-shadow: none;
    padding: 11px 15px;
  }

  & label {
    cursor: pointer;
    padding: 11px 45px 11px 15px;

    &:after {
      width: 19px;
      height: 19px;
      content: "";
      background-image: url(/uploads/contacts-us-file-icon.svg);
      position: absolute;
      top: 14px;
      right: 18px;
      cursor: pointer;
      background-repeat: no-repeat;
    }
  }
`;

export default ContactsUsInputFile;
