import PropTypes from "prop-types";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import HeroWrapper from "@/components/Hero/HeroWrapper";
import HeroImage from "@/components/Hero/HeroImage";
import ImageStatic from "@/components/Image";
import HeroContent from "@/components/Hero/HeroContent";
import Text from "@/components/Text";

const pageData = {
  title: "Technologies",
  image: "/uploads/hero-bg-image.jpg",
  desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
};

const Hero = ({ data = pageData }) => {
  const { title, image, desc } = data;

  return (
    <HeroWrapper>
      <SectionWrapper as="div" disablePaddings>
        <Container>
          <Breadcrumb />
          <SectionHeading title={title} />
          <HeroContent>
            <Text fontSize="subtitle" mobileMultiplier={0.7}>
              {desc}
            </Text>
          </HeroContent>
        </Container>
      </SectionWrapper>
      <HeroImage>
        <ImageStatic src={image} />
      </HeroImage>
    </HeroWrapper>
  );
};

Hero.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};

export default Hero;
