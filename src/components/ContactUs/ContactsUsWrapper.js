import styled from "@emotion/styled";

const ContactsUsWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 70px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    padding-top: 80px;

    & div:first-of-type {
      max-width: 100%;
    }
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    padding-top: 80px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding-top: 110px;
  }
`;

export default ContactsUsWrapper;
