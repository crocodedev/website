import styled from "@emotion/styled";

const SliderStepsImageWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 280px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    max-width: 325px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    max-width: 425px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: 600px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    max-width: 730px;
    padding-right: 10px;
  }
`;

export default SliderStepsImageWrapper;
