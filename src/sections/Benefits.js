import Text from "@/components/Text";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import BenefitsWrapper from "@/components/Benefits/BenefitsWrapper";
import BenefitsDescription from "@/components/Benefits/BenefitsDescription";
import BenefitsDescriptionTitle from "@/components/Benefits/BenefitsDescriptionTitle";
import BenefitsList from "@/components/Benefits/BenefitsList";
import BenefitsListItem from "@/components/Benefits/BenefitsListItem";
import BenefitsListItemMarker from "@/components/Benefits/BenefitsListItemMarker";
import BenefitsListItemTitle from "@/components/Benefits/BenefitsListItemTitle";
import BenefitsListItemText from "@/components/Benefits/BenefitsListItemText";

const data = {
  title: "Benefits of Custom Software",
  text: `
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,

  items: {
    leftColumn: [
      {
        itemTitle: "Some text",
        itemCaption: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      },
      {
        itemTitle: "Some text",
        itemCaption: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      },
    ],
    rightColumn: [
      {
        itemTitle: "Some text",
        itemCaption: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      },
      {
        itemTitle: "Some text",
        itemCaption: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      },
    ],
  },
};

const Benefits = () => (
  <SectionWrapper>
    <Container>
      <BenefitsWrapper>
        <BenefitsList>
          {data.items.leftColumn.map(({ itemTitle, itemCaption }) => (
            <BenefitsListItem key={itemTitle} align="left">
              <BenefitsListItemTitle
                fontSize="title3"
                fontWeight="bold"
                lineHeight="sm"
                align="left"
              >
                {itemTitle}
              </BenefitsListItemTitle>
              <BenefitsListItemText fontSize="subtitle" align="left">
                {itemCaption}
              </BenefitsListItemText>
              <BenefitsListItemMarker align="left" />
            </BenefitsListItem>
          ))}
        </BenefitsList>

        <BenefitsDescription>
          <BenefitsDescriptionTitle
            fontSize="title2"
            fontWeight="bold"
            textAlign="center"
            lineHeight="xsm"
          >
            {data.title}
          </BenefitsDescriptionTitle>
          <Text textAlign="center" fontSize="subtitle">
            {data.text}
          </Text>
        </BenefitsDescription>

        <BenefitsList>
          {data.items.rightColumn.map(({ itemTitle, itemCaption }) => (
            <BenefitsListItem key={itemTitle} align="right">
              <BenefitsListItemTitle
                fontSize="title3"
                fontWeight="bold"
                lineHeight="sm"
                align="right"
              >
                {itemTitle}
              </BenefitsListItemTitle>
              <BenefitsListItemText fontSize="subtitle" align="right">
                {itemCaption}
              </BenefitsListItemText>
              <BenefitsListItemMarker align="right" />
            </BenefitsListItem>
          ))}
        </BenefitsList>
      </BenefitsWrapper>
    </Container>
  </SectionWrapper>
);

export default Benefits;