import styled from "@emotion/styled";

const HeroWrapper = styled.section`
  position: relative;
  z-index: 0;
  padding-bottom: 50px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: calc(100vh - 90px);
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    min-height: calc(100vh - 70px);
  }

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
