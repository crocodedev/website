import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  /*
  Коммент для отображения input  в модалке contactsUs
  & input {
     display: none;
   }
   */

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 70px;
    padding: 13px 6px 14px 16px;

  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding-left: 75px;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    justify-content: space-between;
    width: 100%;

    & input:checked {
      & ~ div {
        display: flex;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    gap: 50px;
    // padding-left: 20px;
    // padding-right: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    justify-content: space-between;
    gap: 170px;
  }
`;

export default HeaderContainer;
