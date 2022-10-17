import PropTypes, { func } from "prop-types";
import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

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

const selectLink = (link, match) => link[0] === "/" ?
  <Link to={link}>
    {match[1]}
  </Link>
  :
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {match[1]}
  </a>;

const prettifyLinks = (text, links) => {
  let tempString = text;

  const prettyLinks = links.map((el, idx) => {
      const pattern = () => `<${idx}>([^)]+)</${idx}>`;
      const regExp = new RegExp(pattern(idx), "g");

      const matches = regExp.exec(tempString);
      tempString = tempString.replace(regExp, `<${idx}>`);
      if (!matches) return null;

      return selectLink(el, matches);
    },
  );

  return tempString.split(" ").map((el) => {
    const regExp = /<(\d)>/;
    const matches = regExp.exec(el);
    if (!matches) {
      if (el.match(/[!?.,]/g)) return `${el} `;
      return ` ${el} `;
    }
    return prettyLinks[matches[1]];
  });
};

const PolicyItem = ({ title, text, list, links }) => {
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

PolicyItem.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  links: PropTypes.string,
};

PolicyItem.defaultProps = {
  title: "",
  text: null,
  list: null,
  links: null,
};

export default PolicyItem;
