import styled from "@emotion/styled";

const HeaderContentCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => theme.breakpoints.up("xl")} {
    display: none;
  }
`;

export default HeaderContentCloseWrapper;
