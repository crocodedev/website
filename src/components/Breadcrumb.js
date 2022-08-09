import PropTypes from "prop-types";
import BreadcrumbList from "./Breadcrumb/BreadcrumbList";
import BreadcrumbListItem from "./Breadcrumb/BreadcrumbListItem";
import BreadcrumbWrapper from "./Breadcrumb/BreadcrumbWrapper";
import Link from "./Link";
import Text from "./Text";

const Breadcrumb = ({ links, color, disablePaddingBottom }) => {
  const lastLink = links.pop();

  return (
    <BreadcrumbWrapper disablePaddingBottom={disablePaddingBottom}>
      <BreadcrumbList>
        {links.map((item) => (
          <BreadcrumbListItem color={color} key={item}>
            <Link to={`/${item}`}>{item}</Link>
          </BreadcrumbListItem>
        ))}
        <BreadcrumbListItem>
          <Text>{lastLink}</Text>
        </BreadcrumbListItem>
      </BreadcrumbList>
    </BreadcrumbWrapper>
  );
};

Breadcrumb.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string,
  disablePaddingBottom: PropTypes.bool,
};

Breadcrumb.defaultProps = {
  color: "white",
  disablePaddingBottom: false,
};

export default Breadcrumb;
