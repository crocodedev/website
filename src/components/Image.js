import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const ImageStatic = ({ src, ...props }) => {
  if (!src) return null;
  return (
    <picture>
      <img {...props} src={src} alt="alt text" />
    </picture>
  );
};

ImageStatic.propTypes = {
  src: PropTypes.string.isRequired,
};

// Render inline SVG with fallback non-svg images
const Image = ({ type, altText, image, ...props }) => {
  const gatsbyImageData = image?.asset?.gatsbyImageData;

  if (gatsbyImageData)
    if (type === 'default') {
      const src = gatsbyImageData.images.fallback.src
      return <img src={src} alt={altText || "image"}/>
    } else {
      return <GatsbyImage image={gatsbyImageData} alt={altText || "image"} {...props} />;
    }

  return null;
};

Image.propTypes = {
  altText: PropTypes.string,
  image: PropTypes.object,
  type: PropTypes.string,
};

Image.defaultProps = {
  image: null,
  altText: "",
  type: ''
};

export default Image;
