import styled from "@emotion/styled";

const HeroWrapper = styled.section`
  position: relative;
  z-index: 0;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 35%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
    bottom: 0;
  }
`;

export default HeroWrapper;
