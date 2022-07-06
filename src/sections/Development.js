import PropTypes from "prop-types";
import Button from "@/components/Button";
import DevelopmentItem from "@/components/Development/DevelopmentItem";
import DevelopmentItemContent from "@/components/Development/DevelopmentItemContent";
import DevelopmentItemImage from "@/components/Development/DevelopmentItemImage";
import DevelopmentStack from "@/components/Development/DevelopmentStack";
import ImageStatic from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Text from "@/components/Text";
import DevelopmentContainer from "@/components/Development/DevelopmentWrapper";

const pageData = {
  title: "Custom Web and Mobile Development",
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  items: [
    {
      id: 1,
      image: "/uploads/development-image1.jpg",
      heading: "Web Development",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      linkText: "Show more",
      link: "/#",
    },
    {
      id: 2,
      image: "/uploads/development-image2.jpg",
      heading: "Web Development",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      linkText: "Show more",
      link: "/#",
    },
  ],
};

const Development = ({ data = pageData }) => {
  const { title, text, items } = data;
  return (
    <SectionWrapper>
      <DevelopmentContainer>
        <SectionHeading title={title} text={text} />
        <DevelopmentStack>
          {items.map(({ id, image, heading, desc, link, linkText }) => (
            <DevelopmentItem key={id}>
              <DevelopmentItemImage>
                <ImageStatic src={image} />
              </DevelopmentItemImage>
              <DevelopmentItemContent>
                <Text mobileMultiplier={0.6} fontSize="title3" fontWeight="bold" lineHeight="sm">
                  {heading}
                </Text>
                <Text mobileMultiplier={0.7} fontSize="subtitle">
                  {desc}
                </Text>
                <Button variant="text" to={link}>
                  {linkText}
                </Button>
              </DevelopmentItemContent>
            </DevelopmentItem>
          ))}
        </DevelopmentStack>
      </DevelopmentContainer>
    </SectionWrapper>
  );
};

Development.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    text: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        image: PropTypes.string,
        heading: PropTypes.string,
        desc: PropTypes.string,
        link: PropTypes.string,
        linkText: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default Development;
