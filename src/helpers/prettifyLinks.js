import React from "react";
import { Link } from "gatsby";

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

const prettifyLinks = ( text, links ) => {
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
      if (el.match(/[!?.,:;]/g)) return `${el} `;
      return ` ${el} `;
    }
    return prettyLinks[matches[1]];
  });
};

export default prettifyLinks;
