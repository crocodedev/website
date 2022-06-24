import styled from "@emotion/styled";
import Link from "../Link";

const MapStackLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.fontSize.title3}px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

export default MapStackLink;
