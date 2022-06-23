import Container from "@/components/Container";
import ImageStatic from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Text from "@/components/Text";
import ListFourImage from "@/components/ListFour/ListFourImage";
import ListFourItem from "@/components/ListFour/ListFourItem";
import ListFourStack from "@/components/ListFour/ListFourStack";

const data = {
  title: "Our Engagement Models",
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  items: [
    {
      src: "uploads/services.png",
      title: "MVP development",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    },
    {
      src: "uploads/services.png",
      title: "MVP development",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    },
    {
      src: "uploads/services.png",
      title: "MVP development",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    },
    {
      src: "uploads/services.png",
      title: "MVP development",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    },
  ],
};

const ListFour = () => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={data.title} text={data.text} />
      <ListFourStack>
        {data.items.map(({ src, title, text }) => (
          <ListFourItem key={title}>
            <ListFourImage>
              <ImageStatic src={src} />
            </ListFourImage>
            <Text fontWeight="semiBold" textAlign="center" fontSize="subtitle" lineHeight="sm">
              {title}
            </Text>
            <Text lineHeight="md" textAlign="center">
              {" "}
              {text}
            </Text>
          </ListFourItem>
        ))}
      </ListFourStack>
    </Container>
  </SectionWrapper>
);

export default ListFour;
