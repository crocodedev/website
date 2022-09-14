import styled from "@emotion/styled";

const HeaderLangWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    & div {
      display: flex;
    }
    & div:after {
      transform: rotate(-45deg);
      margin-top: 5px;
      transition-duration: 0.2s;
    }
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    align-self: flex-start;
    order: 2;
  }

  ${({theme}) => theme.breakpoints.up("xl")} {
    justify-content: center;
  }
`;

export default HeaderLangWrapper;
