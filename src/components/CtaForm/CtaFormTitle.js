import styled from "@emotion/styled";
import Text from "../Text";

const CtaFormTitle = styled(Text)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 160px;
  }
`;

export default CtaFormTitle;
