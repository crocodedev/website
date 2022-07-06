import styled from "@emotion/styled";
import Container from "../Container";

const TextOneContainer = styled(Container)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 60px;
  }
`;

export default TextOneContainer;
