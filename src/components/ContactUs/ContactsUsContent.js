import styled from "@emotion/styled";

const ContactsUsContent = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    width: 100%;
    justify-content: space-between;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    width: 100%;
    justify-content: space-between;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    width: 100%;
    justify-content: space-around;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    width: 88%;
    justify-content: space-around;
  }
`;

export default ContactsUsContent;
