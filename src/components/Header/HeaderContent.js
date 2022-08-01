import styled from "@emotion/styled";

const HeaderContent = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.contrastText};

  ${({ theme }) => theme.breakpoints.down("md")} {
    top: 0;
    right: 0;
    min-width: 237px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    top: 12px;
    right: 70px;
    min-width: 300px;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    position: absolute;
    z-index: 2;
    display: none;
    flex-direction: column;
    height: max-content;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: flex;
    gap: 40px;
  }

  & button {
    align-self: center;
  }
`;

export default HeaderContent;
