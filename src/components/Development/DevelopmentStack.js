import styled from "@emotion/styled";

const DevelopmentStack = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 60px;
  }
`;

export default DevelopmentStack;
