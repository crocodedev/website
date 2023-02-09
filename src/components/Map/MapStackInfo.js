import styled from "@emotion/styled";

const MapStackInfo = styled.div`
  display: grid;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    max-width: 504px;
    gap: 40px;
  }
`;

export default MapStackInfo;
