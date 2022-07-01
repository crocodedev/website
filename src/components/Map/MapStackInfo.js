import styled from "@emotion/styled";

const MapStackInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    flex-direction: row;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    flex-direction: column;
  }
`;

export default MapStackInfo;
