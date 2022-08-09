import styled from "@emotion/styled";

const HeaderMenuWrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: none;
  }
`;

export default HeaderMenuWrapper;
