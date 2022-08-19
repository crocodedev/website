import PropTypes from "prop-types";
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
import BenefitsDescriptionText from "@/components/Benefits/BenefitsDescriptionText";

const Benefits = ({ title, subtitle, itemsLeft, itemsRight }) => (
  <SectionWrapper>
    <Container>
      <BenefitsWrapper>
        <BenefitsList>
          {itemsLeft?.map(({ title: itemTitle, text, _key }) => (
            <BenefitsListItem key={_key} align="left">
              <BenefitsListItemTitle
                fontSize="title3"
                fontWeight="bold"
                lineHeight="sm"
                align="left"
                mobileMultiplier={0.6}
              >
                {itemTitle}
              </BenefitsListItemTitle>
              <BenefitsListItemText fontSize="subtitle" align="left" mobileMultiplier={0.7}>
                {text}
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
            lineHeight="xs"
          >
            {title}
          </BenefitsDescriptionTitle>
          <BenefitsDescriptionText textAlign="center" fontSize="subtitle" mobileMultiplier={0.7}>
            {subtitle}
          </BenefitsDescriptionText>
        </BenefitsDescription>

        <BenefitsList>
          {itemsRight?.map(({ title: itemTitle, text, _key }) => (
            <BenefitsListItem key={_key} align="right">
              <BenefitsListItemTitle
                fontSize="title3"
                fontWeight="bold"
                lineHeight="sm"
                align="right"
                mobileMultiplier={0.6}
              >
                {itemTitle}
              </BenefitsListItemTitle>
              <BenefitsListItemText fontSize="subtitle" align="right" mobileMultiplier={0.7}>
                {text}
              </BenefitsListItemText>
              <BenefitsListItemMarker align="right" />
            </BenefitsListItem>
          ))}
        </BenefitsList>
      </BenefitsWrapper>
    </Container>
  </SectionWrapper>
);

Benefits.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  itemsRight: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
      _key: PropTypes.string,
    }),
  ).isRequired,
  itemsLeft: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
      _key: PropTypes.string,
    }),
  ).isRequired,
};

export default Benefits;
