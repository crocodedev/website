import PropTypes from "prop-types";
import Text from "@/components/Text";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListThreeStack from "@/components/ListThree/ListThreeStack";
import ListThreeStackItem from "@/components/ListThree/ListThreeStackItem";
import ListThreeStackItemImage from "@/components/ListThree/ListThreeStackItemImage";
import ImageStatic from "@/components/Image";

const dataPage = {
  title: "What You Can Expect",
  subtitle: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.`,
  items: [
    {
      src: "/uploads/list-three-image.svg",
      caption: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      src: "/uploads/list-three-image.svg",
      caption: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.`,
    },
    {
      src: "/uploads/list-three-image.svg",
      caption: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.`,
    },
  ],
};

const ListThree = ({ data = dataPage }) => (
  <SectionWrapper bgColor="paper" sectionGap={true}>
    <Container>
      <SectionHeading title={data.title} text={data.subtitle} />
    </Container>
    <Container disablePaddings={true}>
      <ListThreeStack>
        {data.items.map(({ src, caption }) => (
          <ListThreeStackItem key={caption}>
            <ListThreeStackItemImage>
              <ImageStatic src={src} />
            </ListThreeStackItemImage>
            <Text fontSize="subtitle" textAlign="center" mobileMultiplier={0.7}>
              {caption}
            </Text>
          </ListThreeStackItem>
        ))}
      </ListThreeStack>
    </Container>
  </SectionWrapper>
);

ListThree.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.exact({
        src: PropTypes.string,
        caption: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default ListThree;
