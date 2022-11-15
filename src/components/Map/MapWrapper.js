import styled from "@emotion/styled";

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  max-width: 1088px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-bottom: 120%;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-bottom: 51%;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding-bottom: 39%;
  }
`;

export default MapWrapper;
