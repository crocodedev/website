import styled from "@emotion/styled";

const ContactsUsForm = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 400px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: 350px;
    padding-bottom: 48px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    max-width: 400px;
    padding-bottom: 48px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: 500px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    max-width: 660px;
  }
`;

export default ContactsUsForm;
