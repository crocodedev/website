import PropTypes from "prop-types";
import Container from "@/components/Container";
import HeroMainImage from "@/components/HeroMain/HeroMainImage";
import HeroMainWrapper from "@/components/HeroMain/HeroMainWrapper";
import Image from "@/components/Image";
import SectionWrapper from "@/components/SectionWrapper";
import HeroMainContent from "@/components/HeroMain/HeroMainContent";
import HeroMainList from "@/components/HeroMain/HeroMainList";
import HeroMainListItem from "@/components/HeroMain/HeroMainListItem";
import Text from "@/components/Text";
import Button from "@/components/Button";

const HeroMain = ({ link, logoImage, bgImage, items, baseUrl }) => {
  return (
    <HeroMainWrapper>
      <SectionWrapper as="div">
        <Container>
          <HeroMainContent>
            <Image {...logoImage} />
            <HeroMainList>
              {items.map(({ text, _key }) => (
                <HeroMainListItem key={_key}>
                  <Text fontSize="title3" fontWeight="semiBold" mobileMultiplier={0.666}>
                    {text}
                  </Text>
                </HeroMainListItem>
              ))}
            </HeroMainList>
            <Button variant="contained" link={link} baseUrl={baseUrl}>
              {link.title}
            </Button>
          </HeroMainContent>
        </Container>
      </SectionWrapper>
      <HeroMainImage>
        <Image {...bgImage} />
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
  logoImage: PropTypes.object.isRequired,
  bgImage: PropTypes.object.isRequired,
};

export default HeroMain;
