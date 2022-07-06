import Text from "@/components/Text";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListSixStack from "@/components/ListSix/ListSixStack";
import ListSixStackItem from "@/components/ListSix/ListSixStackItem";
import ListSixStackItemText from "@/components/ListSix/ListSixStackItemText";

const data = {
  title: "Our Team of Dedicated Software Developers & Engineers",
  items: [
    {
      title: "Some engineers1",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers2",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers3",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers4",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers5",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers6",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
  ],
};

const ListSix = () => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={data.title} />
      <ListSixStack>
        {data.items.map(({ title, text }) => (
          <ListSixStackItem key={title}>
            <Text fontSize="title3" fontWeight="bold" mobileMultiplier={0.6}>
              {title}
            </Text>
            <ListSixStackItemText fontSize="subtitle" mobileMultiplier={0.7}>
              {text}
            </ListSixStackItemText>
          </ListSixStackItem>
        ))}
      </ListSixStack>
    </Container>
  </SectionWrapper>
);

export default ListSix;
