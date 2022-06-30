import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Text from "@/components/Text";
import CreateProjectText from "@/components/CreateProject/CreateProjectText";
import CreateProjectWrapper from "@/components/CreateProject/CreateProjectWrapper";

const data = {
  title: "Can't find yours?",
  description: "No a problem - we will find solution for you!",
  buttonText: "Start project",
};

const CreateProject = () => (
  <SectionWrapper>
    <Container>
      <CreateProjectWrapper>
        <Text fontSize="title2" fontWeight="bold" mobileMultiplier={0.7}>
          {data.title}
        </Text>
        <CreateProjectText textAlign="center">{data.description}</CreateProjectText>
        <Button variant="contained">{data.buttonText}</Button>
      </CreateProjectWrapper>
    </Container>
  </SectionWrapper>
);

export default CreateProject;
