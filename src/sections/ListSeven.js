import PropTypes from "prop-types";
import Text from "@/components/Text";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListSevenStack from "@/components/ListSeven/ListSevenStack";
import ListSevenStackItem from "@/components/ListSeven/ListSevenStackItem";
import ListSevenStackItemText from "@/components/ListSeven/ListSevenStackItemText";

const dataPage = {
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

const ListSeven = ({ data = dataPage }) => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={data.title} />
      <ListSevenStack>
        {data.items.map(({ heading, text }) => (
          <ListSevenStackItem key={heading}>
            <Text fontSize="title3" fontWeight="bold" mobileMultiplier={0.6669}>
              {heading}
            </Text>
            <ListSevenStackItemText fontSize="subtitle" mobileMultiplier={0.7}>
              {text}
            </ListSevenStackItemText>
            <Button variant="text" to="/#">
              Learn more
            </Button>
          </ListSevenStackItem>
        ))}
      </ListSevenStack>
    </Container>
  </SectionWrapper>
);

ListSeven.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.exact({
        heading: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default ListSeven;
