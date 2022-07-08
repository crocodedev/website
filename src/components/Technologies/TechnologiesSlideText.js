import styled from "@emotion/styled";
import Text from "../Text";

const TechnologiesSlideText = styled(Text)`
  max-width: 610px;
  
  ${({ theme }) => theme.breakpoints.down("xl")} {
    line-height: ${({ theme }) => theme.typography.lineHeight.md};
  }
  
  ${({ theme }) => theme.breakpoints.up("xl")} {
    line-height: ${({ theme }) => theme.typography.lineHeight.lg};
  }
`;

export default TechnologiesSlideText;
