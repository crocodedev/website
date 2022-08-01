import styled from "@emotion/styled";

const HeaderLangMenu = styled.div`
  position: absolute;
  top: 100%;
  display: none;
  overflow: hidden;
  margin-top: 20px;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  box-shadow: ${({ theme }) => theme.shadows.card};

  ${({ theme }) => theme.breakpoints.down("xl")} {
    left: 15px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    left: 0;
  }
`;

export default HeaderLangMenu;
