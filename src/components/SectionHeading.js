import PropTypes from "prop-types";
import { css } from "@emotion/react";

import styled from "@emotion/styled";
import Title from "./Title";
import Text from "./Text";


const dynamicStyle = ({ shadow }) => css`
  ${shadow && `
    padding: 20px 30px;
    background: #f5f5f5;
    box-shadow: 0 0 50px 50px #f5f5f5;
    border-radius: 50px;
  `}
`

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

  ${dynamicStyle}
`;

const SectionHeadingText = styled(Text)`
  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: 844px;
  }
`;

const SectionHeading = ({ shadow, title, titleTag, text, isArticle }) => (
  <Component shadow={shadow}>
    {title && <Title tag={titleTag}>{title}</Title>}
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
  shadow: PropTypes.bool,
  title: PropTypes.string,
  titleTag: PropTypes.string,
  text: PropTypes.string,
  isArticle: PropTypes.bool,
};

SectionHeading.defaultProps = {
  shadow: false,
  title: "",
  titleTag: "h3",
  text: "",
  isArticle: false,
};

export default SectionHeading;
