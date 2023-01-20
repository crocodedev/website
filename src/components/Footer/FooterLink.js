import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "@/components/Link";

const dynamicStyle = ({ theme, isheading }) => css`
  ${isheading
    ? `
    font-weight: ${theme.typography.fontWeight.semiBold};
    font-size: ${theme.typography.fontSize.text};
    color: ${theme.palette.primary.main};

    &:hover {
        color: ${theme.palette.secondary.dark};
    }

    `
    : `
    font-weight: ${theme.typography.fontWeight.regular};
    font-size: ${theme.typography.fontSize.captionText};
    color: ${theme.palette.tertiary.contrastText};

    &:hover {
        color: ${theme.palette.primary.main};
    }
    `}
`;

const FooterLink = styled(Link)`
  height: min-content;
  padding: 5px;
  transition: 0.3s;
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  ${dynamicStyle}
`;

export default FooterLink;
