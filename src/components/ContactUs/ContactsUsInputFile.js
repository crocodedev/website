import styled from "@emotion/styled";

const ContactsUsInputFile = styled.div`
  width: 100%;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 11px 45px 11px 15px;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 11px 15px;
  }

  & label {
    cursor: pointer;

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
