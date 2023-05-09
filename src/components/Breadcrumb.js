import PropTypes from "prop-types";
import BreadcrumbList from "./Breadcrumb/BreadcrumbList";
import BreadcrumbListItem from "./Breadcrumb/BreadcrumbListItem";
import BreadcrumbWrapper from "./Breadcrumb/BreadcrumbWrapper";
import Link from "./Link";
import Text from "./Text";

const Breadcrumb = ({ links, color, disablePaddingBottom, baseUrl }) => {
  return (
    <BreadcrumbWrapper disablePaddingBottom={disablePaddingBottom}>
      <BreadcrumbList>
        {links?.map((item, idx) =>
          idx + 1 !== links.length ? (
            <BreadcrumbListItem color={color} key={item._key}>
              <Link baseUrl={baseUrl} {...item}>
                {item.title}
              </Link>
              <span />
            </BreadcrumbListItem>
          ) : (
            <BreadcrumbListItem key={item._key}>
              <Text> {item.title}</Text>
            </BreadcrumbListItem>
          ),
        )}
      </BreadcrumbList>
    </BreadcrumbWrapper>
  );
};

Breadcrumb.propTypes = {
  baseUrl: PropTypes.string,
  links: PropTypes.array.isRequired,
  color: PropTypes.string,
  disablePaddingBottom: PropTypes.bool,
};

Breadcrumb.defaultProps = {
  baseUrl: "",
  color: "white",
  disablePaddingBottom: false,
};

export default Breadcrumb;
