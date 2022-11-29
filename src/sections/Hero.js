import PropTypes from "prop-types";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import HeroWrapper from "@/components/Hero/HeroWrapper";
import HeroImage from "@/components/Hero/HeroImage";
import Image from "@/components/Image";
import HeroContent from "@/components/Hero/HeroContent";
import Text from "@/components/Text";

const Hero = ({ title, subtitle, imageWithAltText, breadcrumbs, baseUrl, color, fadeColor }) => {
  return (
    <HeroWrapper>
      <SectionWrapper as="div" disablePaddings>
        <Container>
          <Breadcrumb baseUrl={baseUrl} color={color} links={breadcrumbs} />
          <SectionHeading title={title} />
          <HeroContent>
            <Text fontSize="subtitle" mobileMultiplier={0.7}>
              {subtitle}
            </Text>
          </HeroContent>
        </Container>
      </SectionWrapper>
      <HeroImage>
        <Image {...imageWithAltText} fadeColor={fadeColor} />
      </HeroImage>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageWithAltText: PropTypes.object.isRequired,
  fadeColor: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.exact({
      link: PropTypes.object,
    }),
  ).isRequired,
};

export default Hero;
