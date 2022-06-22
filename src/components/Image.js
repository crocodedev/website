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
const Image = ({ svg, file, alt, gatsbyImageData, ...props }) => {
  // Inlined SVGs
  if (file?.contentType === "image/svg+xml" && svg?.content && svg.content.indexOf("mask") === -1) {
    return <div dangerouslySetInnerHTML={{ __html: svg?.content }} {...props} />;
  }
  // SVGs that can/should not be inlined of gif's
  if (file?.contentType === "image/svg+xml" || file?.contentType === "image/gif")
    return <img src={file.url} alt={alt} {...props} />;

  // Non SVG images
  if (gatsbyImageData)
    return <GatsbyImage image={getImage({ gatsbyImageData })} alt={alt} {...props} />;

  return null;
};

Image.propTypes = {
  svg: PropTypes.shape({
    content: PropTypes.string,
  }),
  file: PropTypes.shape({
    contentType: PropTypes.string,
    url: PropTypes.string,
  }),
  alt: PropTypes.string,
  gatsbyImageData: PropTypes.object,
};

Image.defaultProps = {
  svg: null,
  file: null,
  gatsbyImageData: null,
  alt: "",
};

export default ImageStatic;
