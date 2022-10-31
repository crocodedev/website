import styled from "@emotion/styled";
import Container from "../Container";

const ChallengeContainer = styled(Container)`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 35%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
    bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    gap: 20px;
  }
  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 20px;
  }
`;

export default ChallengeContainer;
