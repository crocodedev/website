import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  box-shadow: ${({ theme }) => theme.shadows.header};

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 70px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    justify-content: center;
    height: 90px;
  }
`;

export default HeaderWrapper;
