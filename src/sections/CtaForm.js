import Text from "@/components/Text";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";

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
