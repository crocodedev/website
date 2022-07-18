import styled from "@emotion/styled";

const ContactsUsFormBottom = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  button {
    white-space: nowrap;

    &:disabled {
      pointer-events: none;
      background-color: ${({ theme }) => theme.palette.secondary.dark};
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    justify-content: space-between;
  }
`;

export default ContactsUsFormBottom;
