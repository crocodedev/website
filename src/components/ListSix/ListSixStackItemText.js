import styled from "@emotion/styled";
import Text from "../Text";

const ListSixStackItemText = styled(Text)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 280px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: 344px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: 686px;
  }
`;

export default ListSixStackItemText;
