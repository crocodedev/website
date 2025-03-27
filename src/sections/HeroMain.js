import PropTypes from "prop-types";
import Container from "@/components/Container";
import HeroMainImage from "@/components/HeroMain/HeroMainImage";
import SectionTitleMain from "@/components/SectionTitleMain";
import HeroMainWrapper from "@/components/HeroMain/HeroMainWrapper";
import Image from "@/components/Image";
import SectionWrapper from "@/components/SectionWrapper";
import HeroMainContent from "@/components/HeroMain/HeroMainContent";
import HeroMainList from "@/components/HeroMain/HeroMainList";
import HeroMainListItem from "@/components/HeroMain/HeroMainListItem";
import Text from "@/components/Text";
import Button from "@/components/Button";
import HeroVideo from "@/components/Hero/HeroVideo";

const HeroMain = ({ link, bgImage, items, baseUrl, fadeColor, videoFile }) => {
  return (
    <HeroMainWrapper>
      <SectionWrapper as="div">
        <Container>
          <HeroMainContent>
            <SectionTitleMain title="crocode" />
            <HeroMainList>
              {items?.map(({ text, _key }) => (
                <HeroMainListItem key={_key}>
                  <Text fontSize="title3" fontWeight="semiBold" mobileMultiplier={0.666}>
                    {text}
                  </Text>
                </HeroMainListItem>
              ))}
            </HeroMainList>
            <Button aria-label="Order a project" variant="main" link={link} baseUrl={baseUrl}>
              {link.title}
            </Button>
          </HeroMainContent>
        </Container>
      </SectionWrapper>
      <HeroMainImage fadecolor={fadeColor}>
        <HeroVideo loop muted playsinline autoPlay preload="auto">
          <source src={`https://cdn.sanity.io/${videoFile?.asset?.path}`} type="video/mp4"/>
        </HeroVideo>
      </HeroMainImage>
    </HeroMainWrapper>
  );
};

HeroMain.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  link: PropTypes.object.isRequired,
  // logoImage: PropTypes.object.isRequired,
  bgImage: PropTypes.object.isRequired,
  fadeColor: PropTypes.string.isRequired,
  videoFile: PropTypes.object.isRequired,
};

export default HeroMain;
