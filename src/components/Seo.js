import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const noIndex = () => {
  switch (typeof window !== "undefined" && window.location.pathname) {
    case "/webpack-runtime.js":
    case "/polyfill.js":
    case "/framework.js":
    case "/commons.js":
    case "/app.js":
      return true;
    default:
      return false;
  }
};

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
      {noIndex() && <meta name="robots" content="noindex" />}
      <script type="application/ld+json">
        {`
  {
    "@context": "http://www.schema.org",
  "@type": "Organization",
  "name": "Crocode",
  "url": "https://crocodelab.com/",
  "logo":"https://cdn.sanity.io/images/kx2cy1wz/production/457f16fa257404ff288ed319abd156a11f779833-196x50.svg?w=196&h=50&auto=format",
  "description": "Our mission is to turn ideas into impressive digital products that change the world. Our vision is that our products will be used by millions of people around the world. Our Values: C - Continuous growth, R - Reliability, O - Open-minded",
  "address": {
    "addressLocality": "Rzeszów,",
    "addressCountry": " Poland"
  },
  "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su -",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+48728451662"
  }
  }
`}
      </script>
      <script type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement":
  [
   {
    "@type": "ListItem",
    "position": 1,
    "item":
    {
     "@id": "URL – страницы",
     "name": "Названия страницы"
     }
   },
   {
    "@type": "ListItem",
   "position": 2,
   "item":
    {
      "@id": "URL -  страницы",
      "name": "Названия страницы"
    }
   }
  ]
 }
`}
      </script>
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
