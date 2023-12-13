import { Link } from "gatsby";

import PropTypes from "prop-types";
import Image from "./Image";
import TechnologyCardItem from "./TechnologyCard/TechnologyCardItem";
import Text from "./Text";

const TechnologyCard = ({ image, title, variant, link }) => {
  return (
    <TechnologyCardItem
      as={variant === "transparent" ? Link : "div"}
      to={link?.linkInternal?.reference?.slug?.current}
      variant={variant}
    >
      <Image {...image} />
      <Text lineHeight="md" fontSize="text" fontWeight="regular" mobileMultiplier={0.75}>
        prikolchik
        {title}
      </Text>
    </TechnologyCardItem>
  );
};

TechnologyCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  link: PropTypes.string,
};

TechnologyCard.defaultProps = {
  variant: "",
  link: "",
};

export default TechnologyCard;
