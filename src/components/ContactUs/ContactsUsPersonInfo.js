import styled from "@emotion/styled";

const ContactsUsPersonInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 10px 20px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 15px 20px;
  }
`;

export default ContactsUsPersonInfo;
