import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ linkInternal, linkExternal, baseUrl, children, ...props }) => {
  if (linkInternal) {
    return (
      <GatsbyLink to={`${linkInternal?.reference?.slug?.current}` || "/"} {...props}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a
      href={linkExternal?.href || "/"}
      target={linkExternal?.blank ? "_blank" : ""}
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  linkInternal: PropTypes.object,
  linkExternal: PropTypes.object,
  baseUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  linkInternal: null,
  linkExternal: null,
};

export default Link;
