import styled from "@emotion/styled";

const CtaImageImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  & img {
    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 185px;
      left: -55px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      width: 287px;
    }

    ${({ theme }) => theme.breakpoints.up("xl")} {
      width: 631px;
    }
  }
`;

export default CtaImageImgWrapper;
