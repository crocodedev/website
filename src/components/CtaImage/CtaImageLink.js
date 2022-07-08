import styled from "@emotion/styled";
import Button from "../Button";

const CtaImageLink = styled(Button)`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.fontSize.captionText}px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    font-size: ${({ theme }) => theme.typography.fontSize.subtitle}px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title3}px;
  }
`;

export default CtaImageLink;
