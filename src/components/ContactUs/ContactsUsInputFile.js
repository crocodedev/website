import styled from "@emotion/styled";

const ContactsUsInputFile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};

  &.invalid {
    border: 1px solid #f40808;
    box-shadow: 0px 0px 10px rgba(244, 8, 8, 0.1);
  }

  &.valid {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 0px 10px rgba(125, 190, 59, 0.1);
  }

  & input {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    box-shadow: none;
    padding: 11px 15px;
  }

  & label {
    cursor: pointer;
    padding: 11px 27px 11px 15px;

    // &:after {
    //   width: 19px;
    //   height: 19px;
    //   content: "";
    //   background-image: url(/uploads/contacts-us-file-icon.svg);
    //   position: absolute;
    //   top: 14px;
    //   right: 18px;
    //   cursor: pointer;
    //   background-repeat: no-repeat;
    // }
    position: relative;

    & div img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 24px;
      height: 24px;
    }
  }
`;

export default ContactsUsInputFile;
