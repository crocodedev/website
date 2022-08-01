import styled from "@emotion/styled";
import Link from "../Link";

const ContactsUsLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: underline ${({ theme }) => theme.palette.primary.main};
  -webkit-tap-highlight-color: ${({ theme }) => theme.palette.primary.main};
`;

export default ContactsUsLink;
