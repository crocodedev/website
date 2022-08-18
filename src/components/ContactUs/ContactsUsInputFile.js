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
    padding: 11px 15px 11px 15px;
    position: relative;

    & div {
      width: 24px;
      height: 24px;
    }
  }
`;

export default ContactsUsInputFile;
