import styled from "@emotion/styled";
import Container from "../Container";

const ChallengeContainer = styled(Container)`
  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 20px;
  }
`;

export default ChallengeContainer;
