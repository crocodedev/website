import styled from "@emotion/styled";

const TextOneBgImagePerson = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    left: -90px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    left: -90px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    left: -70px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    left: 147px;
  }

  & div img {
    width: 100%;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      height: 260px;
    }

    ${({ theme }) => theme.breakpoints.between("sm", "md")} {
      height: 340px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      height: 410px;
    }

    ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
      height: 426px;
    }

    ${({ theme }) => theme.breakpoints.up("xl")} {
      height: 680px;
    }
  }
`;

export default TextOneBgImagePerson;
