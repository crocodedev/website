import Button from "@/components/Button";
import Text from "@/components/Text";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import ImageStatic from "@/components/Image";
import NotFoundPageCaption from "@/components/NotFoundPage/NotFoundPageCaption";
import NotFoundPageWrapper from "@/components/NotFoundPage/NotFoundPageWrapper";
import NotFoundPageCaptionText from "@/components/NotFoundPage/NotFoundPageCaptionText";
import NotFoundPageImageWrapper from "@/components/NotFoundPage/NotFoundPageImageWrapper";

const data = {
  src: "/uploads/not-found-page-image.svg",
  notFoundText1: "page not found",
  notFoundText2: "The link is broken or the page has been moved.",
  buttonText: "Home page",
};

const NotFound = () => (
  <SectionWrapper>
    <Container>
      <NotFoundPageWrapper>
        <NotFoundPageImageWrapper>
          <ImageStatic src={data.src} />
        </NotFoundPageImageWrapper>
        <NotFoundPageCaption>
          <NotFoundPageCaptionText>
            <Text fontSize="title2" fontWeight="bold">
              {data.notFoundText1}
            </Text>
            <Text fontSize="subtitle">{data.notFoundText2}</Text>
          </NotFoundPageCaptionText>
          <Button variant="contained">{data.buttonText}</Button>
        </NotFoundPageCaption>
      </NotFoundPageWrapper>
    </Container>
  </SectionWrapper>
);

export default NotFound;
