import styled from "@emotion/styled";

const MapStack = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    flex-direction: column;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 40px;
  }

  .mapboxgl-map {
    position: absolute !important;
    width: 100%;
    height: 100%;
  }

  .mapboxgl-popup-anchor-bottom {
    box-shadow: ${({ theme }) => theme.shadows.popup};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  .mapboxgl-popup-content {
    max-width: 180px;
  }

  .mapboxgl-popup-tip {
    display: none;
  }
`;

export default MapStack;
