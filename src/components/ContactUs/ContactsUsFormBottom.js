import styled from "@emotion/styled";

const ContactsUsFormBottom = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 20px;
  position: relative;

  button {
    white-space: nowrap;

    &:disabled {
      pointer-events: none;
      background: ${({ theme }) => theme.palette.primary.main};
      opacity: 0.4;
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
