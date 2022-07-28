import PropTypes from "prop-types";
import Container from "@/components/Container";
import HeroMainImage from "@/components/HeroMain/HeroMainImage";
import HeroMainWrapper from "@/components/HeroMain/HeroMainWrapper";
import ImageStatic from "@/components/Image";
import SectionWrapper from "@/components/SectionWrapper";
import HeroMainContent from "@/components/HeroMain/HeroMainContent";
import HeroMainList from "@/components/HeroMain/HeroMainList";
import HeroMainListItem from "@/components/HeroMain/HeroMainListItem";
import Text from "@/components/Text";
import Button from "@/components/Button";
import useMedia from "@/hooks/use-media";

const pageData = {
  titles: [
    { src: "/uploads/hero-main-title-mobile.svg" },
    { src: "/uploads/hero-main-title-tablet.svg" },
    { src: "/uploads/hero-main-title-desktop.svg" },
  ],
  image: "/uploads/hero-main.jpg",
  listItems: ["Web applications", "Business card sites", "Online shopping"],
  btnText: "Order a project",
};

const HeroMain = ({ data = pageData }) => {
  const { image, listItems, titles, btnText } = data;

  const texts = useMedia(
    ["(max-width: 767px)", "(max-width: 991px)", "(min-width: 991px)"],

    titles,

    { src: "/uploads/hero-main-title-mobile.svg" },
  );

  const { src } = texts;

  return (
    <HeroMainWrapper>
      <SectionWrapper as="div">
        <Container>
          <HeroMainContent>
            <ImageStatic src={src} />
            <HeroMainList>
              {listItems.map((item) => (
                <HeroMainListItem key={item}>
                  <Text fontSize="title3" fontWeight="semiBold" mobileMultiplier={0.666}>
                    {item}
                  </Text>
                </HeroMainListItem>
              ))}
            </HeroMainList>
            <Button variant="contained">{btnText}</Button>
          </HeroMainContent>
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
    listItems: PropTypes.arrayOf(PropTypes.string),
    btnText: PropTypes.string,
  }).isRequired,
};

export default HeroMain;
