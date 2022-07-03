import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import Text from "@/components/Text";

const data = {
  title: "Subscribe to our blog",
  buttonText: "Subscribe",
};

const CtaForm = () => (
  <SectionWrapper bgColor="dark">
    <Container>
      <Text>{data.title}</Text>
      <Button variant="outlined">{data.buttonText}</Button>
    </Container>
  </SectionWrapper>
);

export default CtaForm;
