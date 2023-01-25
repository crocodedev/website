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

const Hero = ({ title, subtitle, imageWithAltText, breadcrumbs, baseUrl }) => {
  return (
    <HeroWrapper>
      <SectionWrapper as="div" disablePaddings>
        <Container>
          <Breadcrumb baseUrl={baseUrl} color="gray" links={breadcrumbs} />
          <SectionHeading title={title} />
          <HeroContent>
            <Text fontSize="subtitle" mobileMultiplier={0.7}>
              {subtitle}
            </Text>
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
  imageWithAltText: PropTypes.object.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
};

Hero.defaultProps = {
  color: "",
  sectionTitle: "",
};

export default Hero;
