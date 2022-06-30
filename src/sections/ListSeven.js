import Text from "@/components/Text";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListSevenStack from "@/components/ListSeven/ListSevenStack";
import ListSevenStackItem from "@/components/ListSeven/ListSevenStackItem";
import ListSevenStackItemText from "@/components/ListSeven/ListSevenStackItemText";

const data = {
  title: "Our services",
  items: [
    {
      heading: "WEB Development Consulting",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      heading: "WEB Development Consulting",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      heading: "WEB Development Consulting",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      heading: "WEB Development Consulting",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      heading: "WEB Development Consulting",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      heading: "WEB Development Consulting",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
  ],
};

const ListSeven = () => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={data.title} />
      <ListSevenStack>
        {data.items.map(({ heading, text }) => (
          <ListSevenStackItem key={heading}>
            <Text fontSize="title3" fontWeight="bold">
              {heading}
            </Text>
            <ListSevenStackItemText fontSize="subtitle">{text}</ListSevenStackItemText>
            <Button variant="text" to="/#">
              Learn more
            </Button>
          </ListSevenStackItem>
        ))}
      </ListSevenStack>
    </Container>
  </SectionWrapper>
);

export default ListSeven;
