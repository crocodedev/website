import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import prettifyLinks from "@/helpers/prettifyLinks";
import Text from "../Text";

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

const BlockTextItem = ({ title, text, list, links }) => {
  return (
    <StyledPolicyItem>
      {title ? (
        <Text lineHeight="sm" fontSize="link" fontWeight="bold">
          {prettifyLinks(title, links)}
        </Text>
      ) : (
        ""
      )}
      {text
        ? text.map((item) => (
          <Text fontSize="link" lineHeight="sm" key={item}>
            {prettifyLinks(item, links)}
          </Text>
        ))
        : ""}
      {list ? (
        <ol>
          {list.map((item) => (
            <li key={item}>
              <Text lineHeight="sm" fontSize="link">
                {prettifyLinks(item, links)}
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

BlockTextItem.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  links: PropTypes.string,
};

BlockTextItem.defaultProps = {
  title: "",
  text: null,
  list: null,
  links: null,
};

export default BlockTextItem;
