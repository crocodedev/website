import styled from "@emotion/styled";
import Text from "../Text";

const CardDesc = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  ${({ theme }) => theme.breakpoints.down("md")} {
    -webkit-line-clamp: 5;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    -webkit-line-clamp: 4;
  }
`;

export default CardDesc;
