import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageStatic = ({ src }) => {
  if (!src) return null;
  return (
    <picture>
      <img src={src} alt="alt text" />
    </picture>
  );
};

ImageStatic.propTypes = {
  src: PropTypes.string.isRequired,
};

// Render inline SVG with fallback non-svg images
const Image = ({ altText, image, ...props }) => {
  const gatsbyImageData = image?.asset?.gatsbyImageData;
  console.log(image);
  if (gatsbyImageData) return <GatsbyImage image={gatsbyImageData} alt={altText} {...props} />;

  return null;
};

Image.propTypes = {
  altText: PropTypes.string,
  image: PropTypes.object,
};

Image.defaultProps = {
  image: null,
  altText: "",
};

export default Image;
