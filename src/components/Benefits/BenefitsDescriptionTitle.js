import styled from "@emotion/styled";
import Text from "../Text";

const BenefitsDescriptionTitle = styled(Text)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.fontSize.title3}px;
    max-width: 200px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title3}px;
    max-width: 303px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title2}px;
    max-width: 400px;
  }
`;

export default BenefitsDescriptionTitle;
