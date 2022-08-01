import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TextThreeWrapper from "@/components/TextThree/TextThreeWrapper";
import TextThreeContent from "@/components/TextThree/TextThreeContent";
import Text from "@/components/Text";
import TextThreeImage from "@/components/TextThree/TextThreeImage";
import ImageStatic from "@/components/Image";
import TextThreeList from "@/components/TextThree/TextThreeList";
import TextThreeListItem from "@/components/TextThree/TextThreeListItem";

const pageData = {
  title: "Result",
  image: "/uploads/text-three-variant1.jpg",
  desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  listItem1: "Amet minim mollit non deserunt ullamco",
  listItem2: "Amet minim mollit non deserunt ullamco amet minim mollit non deserunt ullamco",
};
//   title: "Solution",
//   image: "/uploads/text-three-variant2.jpg",
//   desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//   listItem1: "Amet minim mollit non deserunt ullamco",
//   listItem2: "Amet minim mollit non deserunt ullamco amet minim mollit non deserunt ullamco",
// };

const TextThree = ({ data = pageData }) => {
  const { title, image, desc, listItem1, listItem2 } = data;

  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} />
        <TextThreeWrapper>
          <TextThreeContent>
            <Text mobileMultiplier={0.7} fontSize="subtitle">
              {desc}
            </Text>
            <TextThreeList>
              <TextThreeListItem>
                <Text mobileMultiplier={0.7} fontSize="subtitle">
                  {listItem1}
                </Text>
              </TextThreeListItem>
              <TextThreeListItem>
                <Text mobileMultiplier={0.7} fontSize="subtitle">
                  {listItem2}
                </Text>
              </TextThreeListItem>
            </TextThreeList>
          </TextThreeContent>
          <TextThreeImage>
            <ImageStatic src={image} />
          </TextThreeImage>
        </TextThreeWrapper>
      </Container>
    </SectionWrapper>
  );
};

TextThree.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    listItem1: PropTypes.string,
    listItem2: PropTypes.string,
  }).isRequired,
};

export default TextThree;
