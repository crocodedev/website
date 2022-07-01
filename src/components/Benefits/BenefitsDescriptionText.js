import styled from "@emotion/styled";
import Text from "../Text";

const BenefitsDescriptionText = styled(Text)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 280px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    max-width: 320px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    max-width: 488px;
  }
`;

export default BenefitsDescriptionText;
