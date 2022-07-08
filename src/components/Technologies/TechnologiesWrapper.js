import styled from "@emotion/styled";

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 0;
    width: 100%;
  }
  
  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`;

export default TechnologiesWrapper;
