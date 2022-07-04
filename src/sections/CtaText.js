import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Text from "@/components/Text";
import CtaTextCaption from "@/components/CtaText/CtaTextCaption";
import CtaTextWrapper from "@/components/CtaText/CtaTextWrapper";

const data = {
  title: "Can't find yours?",
  description: "No a problem - we will find solution for you!",
  buttonText: "Start project",
};

const CtaText = () => (
  <SectionWrapper>
    <Container>
      <CtaTextWrapper>
        <Text fontSize="title2" fontWeight="bold" mobileMultiplier={0.7}>
          {data.title}
        </Text>
        <CtaTextCaption textAlign="center">{data.description}</CtaTextCaption>
        <Button variant="contained">{data.buttonText}</Button>
      </CtaTextWrapper>
    </Container>
  </SectionWrapper>
);

export default CtaText;
