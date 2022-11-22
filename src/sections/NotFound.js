import PropTypes from "prop-types";
import Button from "@/components/Button";
import Text from "@/components/Text";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Image from "@/components/Image";
import NotFoundPageCaption from "@/components/NotFoundPage/NotFoundPageCaption";
import NotFoundPageWrapper from "@/components/NotFoundPage/NotFoundPageWrapper";
import NotFoundPageCaptionText from "@/components/NotFoundPage/NotFoundPageCaptionText";
import NotFoundPageImageWrapper from "@/components/NotFoundPage/NotFoundPageImageWrapper";

const NotFound = ({ subtitle, image, text, link, baseUrl }) => (
  <SectionWrapper>
    <Container>
      <NotFoundPageWrapper>
        <NotFoundPageImageWrapper>
          <Image {...image} />
        </NotFoundPageImageWrapper>
        <NotFoundPageCaption>
          <NotFoundPageCaptionText>
            <Text fontSize="title2" fontWeight="bold" mobileMultiplier={0.7}>
              {subtitle}
            </Text>
            <Text fontSize="subtitle" mobileMultiplier={0.7}>
              {text}
            </Text>
          </NotFoundPageCaptionText>
          <Button aria-label="Back to homepage" variant="contained" link={link} baseUrl={baseUrl}>
            {link.title}
          </Button>
        </NotFoundPageCaption>
      </NotFoundPageWrapper>
    </Container>
  </SectionWrapper>
);

NotFound.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
};

export default NotFound;
