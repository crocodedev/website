import PropTypes from "prop-types";
import Image from "./Image";
import TechnologiesListItem from "./TechnologiesList/TechnologiesListItem";
import Text from "./Text";

const TechnologiesListItem = ({ image, title }) => {
  return (
    <TechnologiesListItem>
      <Image {...image} />
      <Text lineHeight="md" fontSize="text" fontWeight="regular" mobileMultiplier={0.75}>
        {title}
      </Text>
    </TechnologiesListItem>
  );
};

TechnologyCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default TechnologiesListItem;
