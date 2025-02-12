import PropTypes from "prop-types";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import HeroWrapper from "@/components/Hero/HeroWrapper";
import HeroImage from "@/components/Hero/HeroImage";
import Image from "@/components/Image";
import HeroContent from "@/components/Hero/HeroContent";
import HeroPortfolioContent from "@/components/Hero/HeroPortfolioContent";
import HeroPortfolioWrapper from "@/components/Hero/HeroPortfolioWrapper";
import RichTextComponent from "./RichTextComponent";


const Hero = ({ title, _rawRichTextBlock, imageWithAltText, breadcrumbs, baseUrl, portfolio }) => {

  let portfolioArray = null

  if(portfolio) {
    portfolioArray = Object.keys(portfolio)
    .filter(key => key.startsWith("altTextImage"))
    .map(key => {
      const index = key.replace("altTextImage", "");
      const imageUrl = portfolio[`image${index}`]?.asset?.gatsbyImageData?.images?.fallback?.src;

      if (!imageUrl) return null;

      return {
        img: imageUrl,
        alt: portfolio[key]
      };
    })
    .filter(item => item !== null);
  }

  return (
    <HeroWrapper>
      <SectionWrapper as="div" disablePaddings>
        <Container>
          <Breadcrumb baseUrl={baseUrl} color="gray" links={breadcrumbs} />
          <SectionHeading titleTag="h1" title={title} />
          {portfolioArray && (
            <HeroPortfolioWrapper>
              {portfolioArray.map(data => <HeroPortfolioContent src={data.img} alt={data.alt} key={data.img}/>)}
            </HeroPortfolioWrapper>
          )}
          <HeroContent>
            {_rawRichTextBlock && <RichTextComponent data={_rawRichTextBlock} />}
          </HeroContent>
        </Container>
      </SectionWrapper>
      <HeroImage>
        <Image {...imageWithAltText} />
      </HeroImage>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  color: PropTypes.string,
  sectionTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  _rawRichTextBlock: PropTypes.array,
  imageWithAltText: PropTypes.object.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  portfolio: PropTypes.object,
};

Hero.defaultProps = {
  color: "",
  sectionTitle: "",
  _rawRichTextBlock: [],
  portfolio: {
    altText: PropTypes.string,
    image: PropTypes.object,
  }
};

export default Hero;
