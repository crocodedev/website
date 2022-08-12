import styled from "@emotion/styled";

const HeaderMenuIconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  padding: 8px;
  order: 3;

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: none;
  }
`;

export default HeaderMenuIconWrapper;
