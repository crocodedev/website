import styled from "@emotion/styled";

const HeaderContentBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    margin-bottom: 40px;
    margin-top: 46px;
    order: 3;
    align-items: end;
    height: 100%;
  }
`;

export default HeaderContentBtnWrapper;
