import styled from "@emotion/styled";

const HeroImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  overflow: hidden;
  display: flex;
  width: 100%;
  justify-content: center;
  // filter: blur(3px);
  height: 100%;

  & div {
    max-width: 1920px;
    width: 100%;
    height: 100%;

    img {
      min-height: calc(100vh - 100px);
      max-height: 100%;
    }
  }
`;

export default HeroImage;
