import PropTypes from "prop-types";
import CardContent from "./Card/CardContent";
import CardDesc from "./Card/CardDesc";
import CardHeading from "./Card/CardHeading";
import CardHeadingLabel from "./Card/CardHeadingLabel";
import CardHeadingTitle from "./Card/CardHeadingTitle";
import CardImage from "./Card/CardImage";
import CardItem from "./Card/CardItem";
import Image from "./Image";

const Card = ({ text, title, marker, casesItemImage }) => {
  return (
    <CardItem>
      <CardImage>
        <Image {...casesItemImage} />
      </CardImage>
      <CardContent>
        <CardHeading>
          <CardHeadingTitle
            mobileMultiplier={0.715}
            fontSize="title3"
            fontWeight="bold"
            lineHeight="sm"
          >
            {title}
          </CardHeadingTitle>
          <CardHeadingLabel fontWeight="regular">{marker}</CardHeadingLabel>
        </CardHeading>
        <CardDesc mobileMultiplier={0.875}>{text}</CardDesc>
      </CardContent>
    </CardItem>
  );
};

Card.propTypes = {
  casesItemImage: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  marker: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
