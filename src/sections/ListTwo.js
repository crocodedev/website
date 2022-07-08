import PropTypes from "prop-types";
import Container from "@/components/Container";
import ImageStatic from "@/components/Image";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Text from "@/components/Text";
import ListTwoItem from "@/components/ListTwo/ListTwoItem";
import ListTwoStack from "@/components/ListTwo/ListTwoStack";
import ListTwoItemHeadingImage from "@/components/ListTwo/ListTwoItemHeadingImage";
import ListTwoItemHeading from "@/components/ListTwo/ListTwoItemHeading";
import ListTwoItemContent from "@/components/ListTwo/ListTwoItemContent";

const dataPage = {
  title: "Services",
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  items: [
    {
      src: "uploads/services.png",
      title: "MVP development",
      text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: {
        title: "Show more",
        url: "/#",
      },
    },
    {
      src: "uploads/services.png",
      title: "MVP development",
      text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: {
        title: "Show more",
        url: "/#",
      },
    },
    {
      src: "uploads/services.png",
      title: "MVP development",
      text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: {
        title: "Show more",
        url: "/#",
      },
    },
    {
      src: "uploads/services.png",
      title: "MVP development",
      text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: {
        title: "Show more",
        url: "/#",
      },
    },
    {
      src: "uploads/services.png",
      title: "MVP development",
      text: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: {
        title: "Show more",
        url: "/#",
      },
    },
  ],
};

const ListTwo = ({ data = dataPage }) => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={data.title} text={data.text} />

      <ListTwoStack>
        {data.items.map(({ src, title, text, link }) => (
          <ListTwoItem key={title}>
            <ListTwoItemHeading>
              <ListTwoItemHeadingImage>
                <ImageStatic src={src} />
              </ListTwoItemHeadingImage>

              <Text fontSize="subtitle" lineHeight="sm" fontWeight="bold">
                {title}
              </Text>
            </ListTwoItemHeading>
            <ListTwoItemContent>
              <Text>{text}</Text>
              <Button to={link.url} variant="text">
                {link.title}
              </Button>
            </ListTwoItemContent>
          </ListTwoItem>
        ))}
      </ListTwoStack>
    </Container>
  </SectionWrapper>
);

ListTwo.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    text: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.exact({
        src: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        link: PropTypes.exact({
          title: PropTypes.string,
          url: PropTypes.string,
        }),
      }),
    ),
  }).isRequired,
};

export default ListTwo;
