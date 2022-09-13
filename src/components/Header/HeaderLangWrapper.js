import styled from "@emotion/styled";

const HeaderLangWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    align-self: flex-start;
    order: 2;

    input[type="checkbox"]:checked {
      & ~ div {
        display: flex;
        flex-direction: column;
        position: static;

      }
      & ~ label:after {
        transform: rotate(-45deg);
        margin-top: 5px;
        transition-duration: 0.2s;
      }
    }
  }

  ${({theme}) => theme.breakpoints.up("xl")} {
    justify-content: center;
    &:hover {
      & div {
        display: flex;
      }
      & label:after {
        transform: rotate(-45deg);
        margin-top: 5px;
        transition-duration: 0.2s;
      }
    }
  }
`;

export default HeaderLangWrapper;
