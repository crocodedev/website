import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "../Link";

const TechnologiesStackItem = styled(Link)`
  width: 300px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  font-size: ${({ theme }) => theme.typography.fontSize.subtitle}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export default TechnologiesStackItem;
