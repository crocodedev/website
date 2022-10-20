import styled from "@emotion/styled";

const HeaderMenuWrapper = styled.div`
  position: relative;
  display: flex;
  width: 44px;
  height: 100%;
  justify-content: flex-end;

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: none;
  }
`;

export default HeaderMenuWrapper;
