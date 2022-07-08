import PropTypes from "prop-types";
import Button from "@/components/Button";
import Text from "@/components/Text";
import ImageStatic from "@/components/Image";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListOneStack from "@/components/ListOne/ListOneStack";
import ListOneStackItem from "@/components/ListOne/ListOneStackItem";
import ListOneStackItemTitle from "@/components/ListOne/ListOneStackItemTitle";
import ListOneStackItemText from "@/components/ListOne/ListOneStackItemText";

const dataPage = {
  title: "Industries",
  items: [
    {
      src: "/uploads/list-one-item-mark.svg",
      title: "Retail & Supply Chain",
      caption: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      src: "/uploads/list-one-item-mark.svg",
      title: "Retail & Supply Chain",
      caption: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      src: "/uploads/list-one-item-mark.svg",
      title: "Retail & Supply Chain",
      caption: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
    },
  ],
};

const ListOne = ({ data = dataPage }) => (
  <SectionWrapper bgColor="paper">
    <Container>
      <SectionHeading title={data.title} />
      <ListOneStack>
        {data.items.map(({ src, title, caption }) => (
          <ListOneStackItem key={caption}>
            <ListOneStackItemTitle>
              <ImageStatic src={src} />
              <Text fontSize="subtitle" fontWeight="bold" mobileMultiplier={0.9}>
                {title}
              </Text>
            </ListOneStackItemTitle>
            <ListOneStackItemText fontSize="text" mobileMultiplier={0.879}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </ListOneStackItemText>
            <Button variant="outlined">Order a project</Button>
          </ListOneStackItem>
        ))}
      </ListOneStack>
    </Container>
  </SectionWrapper>
);

ListOne.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.exact({
        src: PropTypes.string,
        title: PropTypes.string,
        caption: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default ListOne;
