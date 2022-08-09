import styled from "@emotion/styled";

const HeaderLangWrapper = styled.div`
  height: 100%;
  display: flex;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    order: 2;
  }
`;

export default HeaderLangWrapper;
