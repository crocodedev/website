import PropTypes from "prop-types";
import styled from "@emotion/styled";

import React from "react";
import Text from "./Text";
import Link from "./Link";

const StyledPolicyItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;

  & ol {
    display: flex;
    flex-direction: column;
    list-style: auto;
    padding-left: 34px;
  }

  & a {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: ${({ theme }) => theme.palette.primary.main} underline;
    font-size: ${({ theme }) => theme.typography.fontSize.link}px;
    line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  }
`;

const PolicyItem = ({ title, list, text, texts, link, textWithLink }) => {
  return (
    <StyledPolicyItem>
      {title ? (
        <Text lineHeight="sm" fontSize="link" fontWeight="bold">
          {title}
        </Text>
      ) : (
        ""
      )}
      {text ? (
        <Text lineHeight="sm" fontSize="link">
          {text}
        </Text>
      ) : (
        ""
      )}
      {textWithLink ? (
        <Text>
          {textWithLink.textBeforeLink}
          <Link to={textWithLink.link}>{textWithLink.link}</Link>
          {textWithLink.textAfterLink}
        </Text>
      ) : (
        ""
      )}
      {texts
        ? texts.map((item) => (
            <Text fontSize="link" lineHeight="sm" key={item}>
              {item}
            </Text>
          ))
        : ""}
      {link ? <Link to={link}>{link}</Link> : ""}
      {list ? (
        <ol>
          {list.map((item) => (
            <li key={item}>
              <Text lineHeight="sm" fontSize="link">
                {item}
              </Text>
            </li>
          ))}
        </ol>
      ) : (
        ""
      )}
    </StyledPolicyItem>
  );
};

PolicyItem.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  textWithLink: PropTypes.exact({
    textBeforeLink: PropTypes.string,
    link: PropTypes.string,
    textAfterLink: PropTypes.string,
  }),
};

PolicyItem.defaultProps = {
  title: "",
  list: null,
  texts: null,
  link: null,
  textWithLink: null,
};

export default PolicyItem;
