import styled from "@emotion/styled";

const SliderStepsContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    flex-direction: column-reverse;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    gap: 81px;
  }
`;

export default SliderStepsContentWrapper;
