import styled from "@emotion/styled";

const HeaderLangMenu = styled.div`
  ${({theme}) => theme.breakpoints.down("xl")} {
    display: none;
    flex-direction: column;
    padding-left: 5px;
    overflow: auto;
  }

  ${({theme}) => theme.breakpoints.up("xl")} {
    position: absolute;
    top: 100%;
    display: none;
    overflow: hidden;
    flex-direction: column;
    border-radius: 5px;
    background-color: ${({theme}) => theme.palette.primary.contrastText};
    box-shadow: ${({theme}) => theme.shadows.card};

    ${({theme}) => theme.breakpoints.down("xl")} {
      left: 15px;
    }

    ${({theme}) => theme.breakpoints.up("xl")} {
      right: 0;
    }
  }
`;

export default HeaderLangMenu;
