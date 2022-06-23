import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ to, target, noFollow, ...props }) => {
  if (
    /^(http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-/]))?$/.test(to) ||
    // eslint-disable-next-line no-useless-escape
    /^mailto:([^?]*)$/.test(to) ||
    target !== null ||
    noFollow === true
  )
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href={to || "/"}
        target="_blank"
        rel={`noopener noreferrer ${noFollow ? "nofollow" : ""}`}
        {...props}
      />
    );
  return <GatsbyLink to={to || "/"} {...props} />;
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  noFollow: PropTypes.string,
};

Link.defaultProps = {
  target: null,
  noFollow: null,
};

export default Link;
