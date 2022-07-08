import styled from "@emotion/styled";

const CtaImageImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  img {
    position: relative;

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 185px;
      top: 47px;
      right: 55px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      width: 287px;
      top: 93px;
      left: 59px;
    }

    ${({ theme }) => theme.breakpoints.up("xl")} {
      width: 631px;
      top: 218px;
      left: 65px;
    }
  }
`;

export default CtaImageImgWrapper;
