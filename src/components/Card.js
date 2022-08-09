import PropTypes from "prop-types";
import CardContent from "./Card/CardContent";
import CardDesc from "./Card/CardDesc";
import CardHeading from "./Card/CardHeading";
import CardHeadingLabel from "./Card/CardHeadingLabel";
import CardHeadingTitle from "./Card/CardHeadingTitle";
import CardImage from "./Card/CardImage";
import CardItem from "./Card/CardItem";
import ImageStatic from "./Image";

const Card = ({ image, heading, label, desc }) => {
  return (
    <CardItem>
      <CardImage>
        <ImageStatic loading="lazy" src={image} />
      </CardImage>
      <CardContent>
        <CardHeading>
          <CardHeadingTitle
            mobileMultiplier={0.715}
            fontSize="title3"
            fontWeight="bold"
            lineHeight="sm"
          >
            {heading}
          </CardHeadingTitle>
          <CardHeadingLabel fontWeight="regular">{label}</CardHeadingLabel>
        </CardHeading>
        <CardDesc mobileMultiplier={0.875}>{desc}</CardDesc>
      </CardContent>
    </CardItem>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;
