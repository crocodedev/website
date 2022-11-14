import PropTypes from "prop-types";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import ChallengeContent from "@/components/Challenge/ChallengeContent";
import Text from "@/components/Text";
import ChallengeImage from "@/components/Challenge/ChallengeImage";
import Image from "@/components/Image";
import ChallengeText from "@/components/Challenge/ChallengeText";
import ChallengeContainer from "@/components/Challenge/ChallengeContainer";
import ChallengeDot from "@/components/Challenge/ChallengeDot";
import ChallengeModal from "@/components/Challenge/ChallengeModal";

const Challenge = ({ title, subtitle, modalContent, imagesItem }) => {
  return (
    <SectionWrapper>
      <ChallengeContainer>
        <SectionHeading title={title} />
        <ChallengeContent>
          <ChallengeText>
            <Text fontSize="subtitle" mobileMultiplier={0.7}>
              {subtitle}
            </Text>
          </ChallengeText>
          <ChallengeImage>
            {modalContent?.map(({ _key, title: itemTitle, text }) => (
              <ChallengeDot align="left" key={_key}>
                <ChallengeModal>
                  <Text fontWeight="bold" mobileMultiplier={0.8}>
                    {itemTitle}
                  </Text>
                  <Text mobileMultiplier={0.8}>{text}</Text>
                </ChallengeModal>
              </ChallengeDot>
            ))}
            <Image {...imagesItem} />
          </ChallengeImage>
        </ChallengeContent>
      </ChallengeContainer>
    </SectionWrapper>
  );
};

Challenge.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagesItem: PropTypes.object.isRequired,
  modalContent: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Challenge;
