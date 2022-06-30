import styled from "@emotion/styled";

const MapStack = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    flex-direction: column;
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
