import styled from "@emotion/styled";

const SliderStepsNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    margin-top: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    margin-top: 60px;
  }
`;

export default SliderStepsNavigation;
