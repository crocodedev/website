import Container from "@/components/Container";
import ImageStatic from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Text from "@/components/Text";
import Button from "@/components/Button";
import ListFiveStack from "@/components/ListFive/ListFiveStack";
import ListFiveItemImage from "@/components/ListFive/ListFiveItemImage";
import ListFiveItem from "@/components/ListFive/ListFiveItem";
import ListFiveItemContent from "@/components/ListFive/ListFiveItemContent";

const data = {
  title: "High-End Full Stack Consulting",
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  items: [
    {
      src: "uploads/technologies.png",
      title: "Some Consulting",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      link: {
        title: "Learn More",
        src: "/#",
      },
    },
    {
      src: "uploads/technologies.png",
      title: "Some Consulting",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      link: {
        title: "Learn More",
        src: "/#",
      },
    },
    {
      src: "uploads/technologies.png",
      title: "Some Consulting",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      link: {
        title: "Learn More",
        src: "/#",
      },
    },
  ],
};

const ListFive = () => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={data.title} text={data.text} />
      <ListFiveStack>
        {data.items.map(({ src, title, text, link }) => (
          <ListFiveItem key={title}>
            <ListFiveItemImage>
              <ImageStatic src={src} />
            </ListFiveItemImage>
            <ListFiveItemContent>
              <Text fontWeight="semiBold" fontSize="subtitle" lineHeight="sm">
                {title}
              </Text>
              <Text>{text}</Text>
              <Button variant="text" to={link.url}>
                {link.title}
              </Button>
            </ListFiveItemContent>
          </ListFiveItem>
        ))}
      </ListFiveStack>
    </Container>
  </SectionWrapper>
);

export default ListFive;
