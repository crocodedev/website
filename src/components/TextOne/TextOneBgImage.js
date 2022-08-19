import styled from "@emotion/styled";

const TextOneBgImage = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0px;

  & div img {
    width: 100%;
    object-fit: cover;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      height: 500px;
    }

    ${({ theme }) => theme.breakpoints.between("sm", "md")} {
      height: 650px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      height: 500px;
    }

    ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
      height: 615px;
    }

    ${({ theme }) => theme.breakpoints.up("xl")} {
      height: 740px;
    }
  }
`;

export default TextOneBgImage;
