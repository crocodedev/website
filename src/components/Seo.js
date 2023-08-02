import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Seo = ({
  siteUrl,
  url,
  name,
  defaultLocale,
  titleTemplate,
  title,
  image,
  description,
  lang,
  keywords,
  ogtype,
  twitterCard,
}) => {
  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        dir: "ltr",
        ...((lang && { lang }) || (defaultLocale && { lang: defaultLocale }) || {}),
      }}
      title={`${title}${titleTemplate && name ? ` - ${name}` : ""}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: `${title}${titleTemplate && name ? ` - ${name}` : ""}`,
        },
        {
          property: `og:description`,
          content: description,
        },
        ...(image
          ? [
              {
                property: "og:image",
                content: image.image?.asset.url,
              },
              {
                property: "og:image:width",
                content: image.image?.asset.width,
              },
              {
                property: "og:image:height",
                content: image.image?.asset.height,
              },
              {
                property: "og:url",
                content: `${siteUrl}${url}${url === "/" ? "" : "/"}`,
              },
              {
                name: "twitter:image:src",
                content: image.image?.asset.url,
              },
            ]
          : []),
        ...(keywords
          ? [
              {
                name: `keywords`,
                content: keywords,
              },
            ]
          : []),
        ...(ogtype
          ? [
              {
                property: `og:type`,
                content: ogtype,
              },
            ]
          : []),
        ...(twitterCard
          ? [
              {
                name: `twitter:card`,
                content: twitterCard === "summaryLargeImage" ? "summary_large_image" : twitterCard,
              },
            ]
          : []),
      ]}
    >
      <link rel="canonical" href={`${siteUrl}${url}${url === "/" ? "" : "/"}`} />
    </Helmet>
  );
};

Seo.propTypes = {
  url: PropTypes.string.isRequired,
  titleTemplate: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.exact({
    altText: PropTypes.string,
    image: PropTypes.exact({
      asset: PropTypes.exact({
        url: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number,
      }),
    }),
  }),
  siteUrl: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.string,
  ogtype: PropTypes.string,
  twitterCard: PropTypes.string,
  name: PropTypes.string,
  defaultLocale: PropTypes.string,
};

Seo.defaultProps = {
  siteUrl: "",
  lang: "",
  titleTemplate: "",
  keywords: "",
  ogtype: "",
  twitterCard: "",
  name: "",
  defaultLocale: "",
  image: {},
};

export default Seo;
