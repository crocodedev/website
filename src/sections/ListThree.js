import Text from "@/components/Text";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListThreeStack from "@/components/ListThree/ListThreeStack";
import ListThreeStackItem from "@/components/ListThree/ListThreeStackItem";
import ImageStatic from "@/components/Image";

const data = {
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

const ListThree = () => (
  <SectionWrapper bgColor="paper">
    <Container>
      <SectionHeading title={data.title} text={data.subtitle} />
      <ListThreeStack>
        {data.items.map(({ src, caption }) => (
          <ListThreeStackItem key={caption}>
            <ImageStatic src={src} />
            <Text fontSize="subtitle" textAlign="center">
              {caption}
            </Text>
          </ListThreeStackItem>
        ))}
      </ListThreeStack>
    </Container>
  </SectionWrapper>
);

export default ListThree;
