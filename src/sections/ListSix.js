import PropTypes from "prop-types";
import Text from "@/components/Text";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListSixStack from "@/components/ListSix/ListSixStack";
import ListSixStackItem from "@/components/ListSix/ListSixStackItem";
import ListSixStackItemText from "@/components/ListSix/ListSixStackItemText";

const dataPage = {
  title: "Our Team of Dedicated Software Developers & Engineers",
  items: [
    {
      title: "Some engineers",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      title: "Some engineers",
      text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
  ],
};

const ListSix = ({ data = dataPage }) => (
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

ListSix.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default ListSix;
