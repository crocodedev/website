import styled from "@emotion/styled";

const TechnologiesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
  }
`;

export default TechnologiesWrapper;
