import styled from "@emotion/styled";
import SectionWrapper from "../SectionWrapper";

const CtaImageSectionWrapper = styled(SectionWrapper)`
  position: relative;
  overflow: hidden;
  display: flex;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 60px 0;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 80px 0;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    min-height: 626px;
    align-items: center;
  }
`;

export default CtaImageSectionWrapper;
