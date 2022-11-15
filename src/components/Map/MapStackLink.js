import styled from "@emotion/styled";
import Link from "../Link";

const MapStackLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};

  &::before {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: ${({ theme }) => theme.typography.fontSize.link}px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title3}px;
  }
`;

export default MapStackLink;
