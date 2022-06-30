import styled from "@emotion/styled";

const MapMarkerIcon = styled.div`
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 30px;
    height: 40px;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 40px;
    height: 50px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 50px;
    height: 70px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MapMarkerIcon;
