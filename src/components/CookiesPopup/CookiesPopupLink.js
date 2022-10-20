import styled from "@emotion/styled";
import Link from "../Link";

const CookiesPopupLink = styled(Link)`
  margin-left: 5px;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: underline ${({ theme }) => theme.palette.primary.main};
  -webkit-tap-highlight-color: ${({ theme }) => theme.palette.primary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export default CookiesPopupLink;
