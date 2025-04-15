import styled from "@emotion/styled";

const HeroParticles = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  overflow: hidden;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-height: calc(70vh - 90px);
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-height: calc(70vh - 70px);
  }

  & div {
    width: 100%;
    height: 100%;
  }
`;

export default HeroParticles;
