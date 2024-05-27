import styled from "@emotion/styled";

const HeroWrapper = styled.section`
  position: relative;
  z-index: 0;
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    z-index: -1;
    height: 35%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
    bottom: -20px;
    pointer-events: none;
  }
`;

export default HeroWrapper;
