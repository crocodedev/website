import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = () => css``;

const SectionWrapper = styled.section`
  padding-top: 110px;
  padding-bottom: 100px;

  ${dynamicStyle}
`;

export default SectionWrapper;
