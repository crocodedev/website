import styled from "@emotion/styled";

const HeaderLangWrapper = styled.div`
  height: 100%;
  display: flex;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    order: 2;
  }

  &:hover {
    & div {
      ${({ theme }) => theme.breakpoints.up("xl")} {
        &:after {
          transform: rotate(-45deg);
          margin-top: 9px;
        }
      }
      div {
        display: flex;
      }
    }
  }
`;

export default HeaderLangWrapper;
