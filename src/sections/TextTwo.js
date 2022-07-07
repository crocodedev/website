import { useTheme } from "@emotion/react";
import Container from "@/components/Container";
import ImageStatic from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TextTwoContentWrapper from "@/components/TextTwo/TextTwoContentWrapper";
import TextTwoImageWrapper from "@/components/TextTwo/TextTwoImageWrapper";
import TextTwoInfoWrapper from "@/components/TextTwo/TextTwoInfoWrapper";
import TextTwoInfoValues from "@/components/TextTwo/TextTwoInfoValues";
import TextTwoInfoItem from "@/components/TextTwo/TextTwoInfoItem";
import Text from "@/components/Text";

const data = {
  title: "we are in numbers",
  caption: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.`,
  src: "/uploads/text-two-image.jpg",
  items: [
    {
      value: "100+",
      caption: "orders",
    },
    {
      value: "80+",
      caption: "ready orders",
    },
    {
      value: "100+",
      caption: "happy clients",
    },
  ],
};

const TextTwo = () => {
  const theme = useTheme();
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={data.title} />
        <TextTwoContentWrapper>
          <TextTwoImageWrapper>
            <ImageStatic src={data.src} />
          </TextTwoImageWrapper>
          <TextTwoInfoWrapper>
            <Text fontSize="subtitle" mobileMultiplier="0.7">
              {data.caption}
            </Text>
            <TextTwoInfoValues>
              {data.items.map(({ value, caption }) => (
                <TextTwoInfoItem key={caption}>
                  <Text
                    fontSize="title0"
                    mobileMultiplier="0.75"
                    fontWeight="bold"
                    lineHeight="2xsm"
                    color={theme.palette.primary.main}
                  >
                    {value}
                  </Text>
                  <Text fontSize="link" mobileMultiplier="0.889">
                    {caption}
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

export default TextTwo;
