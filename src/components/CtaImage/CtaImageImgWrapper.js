import styled from "@emotion/styled";

const CtaImageImgWrapper = styled.div`
  img {
    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 243px;
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
