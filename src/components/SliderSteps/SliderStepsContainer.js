import styled from "@emotion/styled";
import Container from "../Container";

const SliderStepsContainer = styled(Container)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 20px;
  }
`;

export default SliderStepsContainer;
