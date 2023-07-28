import PropTypes from "prop-types";
import Image from "./Image";
import TechnologiesStackGridItem from "./TechnologiesStackGrid/TechnologiesStackGridItem";
import Text from "./Text";

const TechnologiesStackGridItem = ({ image, title }) => {
  return (
    <TechnologiesStackGridItem>
      <Image {...image} />
      <Text lineHeight="md" fontSize="text" fontWeight="regular" mobileMultiplier={0.75}>
        {title}
      </Text>
    </TechnologiesStackGridItem>
  );
};

TechnologyCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default TechnologiesStackGridItem;
