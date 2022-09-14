import styled from "@emotion/styled";

const ContactsUsItem = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;

  .react-tel-input {
    position: relative;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.small};

    &.invalid {
      border: 1px solid #f40808;
      box-shadow: 0px 0px 10px rgba(244, 8, 8, 0.1);
    }

    &.valid {
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
      box-shadow: 0px 0px 10px rgba(125, 190, 59, 0.1);
    }

    & input[type="tel"] {
      height: 100%;
      width: 100%;
      display: flex;
      padding: 16px 15px 17px 40px;
      align-items: flex-start;
      box-shadow: ${({ theme }) => theme.shadows.card};
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius.small};
    }

    .flag-dropdown {
      position: absolute;
      display: flex;
      align-items: center;
      height: 100%;
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
      border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
      border-color: ${({theme}) => theme.palette.primary.contrastText};
    }

    .selected-flag {
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
      border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
      background-color: ${({theme}) => theme.palette.primary.contrastText};

      .arrow {
        display: none;
      }
    }
  }
`;

export default ContactsUsItem;
