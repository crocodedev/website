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
import RichTextComponent from "./RichTextComponent";


const Hero = ({ title, _rawRichTextBlock, imageWithAltText, breadcrumbs, baseUrl }) => {
  return (
    <HeroWrapper>
      <SectionWrapper as="div" disablePaddings>
        <Container>
          <Breadcrumb baseUrl={baseUrl} color="gray" links={breadcrumbs} />
          <SectionHeading titleTag="h1" title={title} />
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
};

Hero.defaultProps = {
  color: "",
  sectionTitle: "",
  _rawRichTextBlock: [],
};

export default Hero;
