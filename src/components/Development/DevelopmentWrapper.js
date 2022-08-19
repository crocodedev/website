import styled from "@emotion/styled";
import Container from "../Container";

const DevelopmentContainer = styled(Container)`
  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 40px;
  }
`;

export default DevelopmentContainer;
