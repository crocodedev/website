import styled from "@emotion/styled";
import Link from "../Link";

const MapStackLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: ${({ theme }) => theme.typography.fontSize.link}px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title3}px;
  }
`;

export default MapStackLink;
