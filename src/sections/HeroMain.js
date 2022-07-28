import PropTypes from "prop-types";
import Container from "@/components/Container";
import HeroMainImage from "@/components/HeroMain/HeroMainImage";
import HeroMainWrapper from "@/components/HeroMain/HeroMainWrapper";
import ImageStatic from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";

const pageData = {
  title: "crocode",
  image: "",
};

const HeroMain = ({ data = pageData }) => {
  const { title, image } = data;

  return (
    <HeroMainWrapper>
      <SectionWrapper as="div">
        <Container>
          <SectionHeading title={title} />
          {/* <HeroMainContent /> */}
        </Container>
      </SectionWrapper>

      <HeroMainImage>
        <ImageStatic src={image} />
      </HeroMainImage>
    </HeroMainWrapper>
  );
};

HeroMain.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default HeroMain;
