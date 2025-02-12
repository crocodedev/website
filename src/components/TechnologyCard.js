import PropTypes from "prop-types";

import Link from "./Link";
import Image from "./Image";
import TechnologyCardItem from "./TechnologyCard/TechnologyCardItem";
import Text from "./Text";

const TechnologyCard = ({ image, title, variant, link }) => {
  return (
    <TechnologyCardItem
      as={link?.linkInternal?.reference?.slug?.current ? Link : "div"}
     {...link}
      variant={variant}
      underline={link?.linkInternal?.reference?.slug?.current}
    >
      <Image objectFit="contains" {...image} />
      <Text lineHeight="md" fontSize="text" fontWeight="regular" mobileMultiplier={0.75}>
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
