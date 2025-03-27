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

  & div {
    width: 100%;
    height: 100%;
  }
`;

export default HeroParticles;