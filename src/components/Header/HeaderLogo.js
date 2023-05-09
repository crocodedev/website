import styled from "@emotion/styled";

const HeaderLogo = styled.a`
  z-index: 5;

  ${({theme}) => theme.breakpoints.down("sm")} {
    background-color: ${({theme}) => theme.palette.primary.contrastText};
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    padding-top: 9px;
    padding-bottom: 9px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    align-self: center;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  & > img {
    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 101px;
      height: 26px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "2xl")} {
      width: 140px;
      height: 36px;
    }

    ${({ theme }) => theme.breakpoints.up("2xl")} {
      width: 195px;
      height: 50px;
    }
  }
`;

export default HeaderLogo;
