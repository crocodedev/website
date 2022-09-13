import PropTypes from "prop-types";

import styled from "@emotion/styled";
import Title from "./Title";
import Text from "./Text";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`;

const SectionHeadingText = styled(Text)`
  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: 844px;
  }
`;

const SectionHeading = ({ title, text, isArticle }) => (
  <Component>
    {title && <Title>{title}</Title>}
    {text && (
      <SectionHeadingText
        fontSize={isArticle ? "captionText" : "subtitle"}
        lineHeight={isArticle ? "xsm" : "lg"}
        textAlign="center"
        mobileMultiplier={isArticle ? 0.85 : 0.7}
      >
        {text}
      </SectionHeadingText>
    )}
  </Component>
);

SectionHeading.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  isArticle: PropTypes.bool,
};

SectionHeading.defaultProps = {
  title: "",
  text: "",
  isArticle: false,
};

export default SectionHeading;
