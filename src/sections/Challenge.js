import PropTypes from "prop-types";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import ChallengeContent from "@/components/Challenge/ChallengeContent";
import Text from "@/components/Text";
import ChallengeImage from "@/components/Challenge/ChallengeImage";
import ImageStatic from "@/components/Image";
import ChallengeText from "@/components/Challenge/ChallengeText";
import ChallengeContainer from "@/components/Challenge/ChallengeContainer";
import ChallengeDot from "@/components/Challenge/ChallengeDot";
import ChallengeDotContent from "@/components/Challenge/ChallengeDotContent";
import ChallengeDotContentBottom from "@/components/Challenge/ChallengeDotContentBottom";

const pageData = {
  title: "Challenge",
  desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  image: "/uploads/challenge-image.png",
};

const Challenge = ({ data = pageData }) => {
  const { title, desc, image } = data;

  return (
    <SectionWrapper>
      <ChallengeContainer>
        <SectionHeading title={title} />
        <ChallengeContent>
          <ChallengeText>
            <Text fontSize="subtitle" mobileMultiplier={0.7}>
              {desc}
            </Text>
          </ChallengeText>
          <ChallengeImage>
            <ChallengeDotContent>
              <ChallengeDot />
              <ChallengeDotContentBottom>
                <ChallengeDot />
              </ChallengeDotContentBottom>
              <ChallengeDot />
            </ChallengeDotContent>
            <ImageStatic src={image} />
          </ChallengeImage>
        </ChallengeContent>
      </ChallengeContainer>
    </SectionWrapper>
  );
};

Challenge.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Challenge;
