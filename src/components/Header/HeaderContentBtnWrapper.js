import styled from "@emotion/styled";

const HeaderContentBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: 46px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    margin-top: 84px;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    order: 3;
    margin-bottom: 40px;
  }
`;

export default HeaderContentBtnWrapper;
