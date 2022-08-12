import PropTypes from "prop-types";
import Image from "./Image";
import TechnologyCardItem from "./TechnologyCard/TechnologyCardItem";
import Text from "./Text";

const TechnologyCard = ({ image, title }) => {
  return (
    <TechnologyCardItem>
      <Image {...image} />
      <Text lineHeight="md" fontSize="text" fontWeight="regular" mobileMultiplier={0.75}>
        {title}
      </Text>
    </TechnologyCardItem>
  );
};

TechnologyCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default TechnologyCard;
