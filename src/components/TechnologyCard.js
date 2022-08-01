import PropTypes from "prop-types";
import ImageStatic from "./Image";
import TechnologyCardItem from "./TechnologyCard/TechnologyCardItem";
import Text from "./Text";

const TechnologyCard = ({ src, title }) => {
  return (
    <TechnologyCardItem>
      <ImageStatic src={src} />
      <Text lineHeight="md" fontSize="text" fontWeight="regular" mobileMultiplier={0.75}>
        {title}
      </Text>
    </TechnologyCardItem>
  );
};

TechnologyCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TechnologyCard;
