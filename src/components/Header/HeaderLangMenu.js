import styled from "@emotion/styled";

const HeaderLangMenu = styled.div`
  position: absolute;
  top: 100%;
  display: none;
  overflow: hidden;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  box-shadow: ${({ theme }) => theme.shadows.card};

  ${({ theme }) => theme.breakpoints.down("xl")} {
    left: 15px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    // left: 0;
    right: 0;
    margin-top: 20px;
  }
`;

export default HeaderLangMenu;
