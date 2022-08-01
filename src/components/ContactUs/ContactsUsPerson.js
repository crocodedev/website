import styled from "@emotion/styled";

const ContactsUsPerson = styled.div`
  position: absolute;

  padding: 10px;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  border-radius: 10px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    bottom: 56px;
    right: 40px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    bottom: 56px;
    right: 70px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    bottom: 40px;
    right: 5px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    bottom: 60px;
    right: 0px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    bottom: 87px;
    right: -17px;
  }
`;

export default ContactsUsPerson;
