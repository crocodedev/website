import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Container from "@/components/Container";
import Image from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TextTwoContentWrapper from "@/components/TextTwo/TextTwoContentWrapper";
import TextTwoImageWrapper from "@/components/TextTwo/TextTwoImageWrapper";
import TextTwoInfoWrapper from "@/components/TextTwo/TextTwoInfoWrapper";
import TextTwoInfoValues from "@/components/TextTwo/TextTwoInfoValues";
import TextTwoInfoItem from "@/components/TextTwo/TextTwoInfoItem";
import Text from "@/components/Text"; 
import RichTextComponent from "./RichTextComponent";

const TextTwo = ({ title, _rawRichTextBlock, text, image, items, bgColor }) => {
  const theme = useTheme();
  return (
    <SectionWrapper bgColor={bgColor}>
      <Container>
        <SectionHeading title={title} />
        <TextTwoContentWrapper onlyText={!image?.image}>
          <TextTwoImageWrapper>
            <Image {...image} />
          </TextTwoImageWrapper>
          <TextTwoInfoWrapper>
            <RichTextComponent data={_rawRichTextBlock} />
            {/* <Text fontSize="subtitle" mobileMultiplier="0.7">
              {richTextBlock}
            </Text> */}
            <TextTwoInfoValues>
              {items &&
                items?.map(({ _key, title: itemTitle, text: itemText }) => (
                  <TextTwoInfoItem key={_key}>
                    <Text
                      fontSize="title0"
                      mobileMultiplier="0.75"
                      fontWeight="bold"
                      lineHeight="2xsm"
                      color={theme.palette.primary.main}
                    >
                      {itemTitle}
                    </Text>
                    <Text fontSize="link" mobileMultiplier="0.889">
                      {itemText}
                    </Text>
                  </TextTwoInfoItem>
                ))}
            </TextTwoInfoValues>
          </TextTwoInfoWrapper>
        </TextTwoContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

TextTwo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  _rawRichTextBlock: PropTypes.array,
  image: PropTypes.object.isRequired,
  bgColor: PropTypes.string.isRequired, 
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

TextTwo.defaultProps = {
  subtitle: "",
  _rawRichTextBlock: [],
};

export default TextTwo;
