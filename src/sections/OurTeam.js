import PropTypes from "prop-types";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Image from "@/components/Image";
import OurTeamImage from "@/components/OurTeam/OurTeamImage";
import OurTeamStack from "@/components/OurTeam/OurTeamStack";
import OurTeamItem from "@/components/OurTeam/OurTeamItem";
import OurTeamInfo from "@/components/OurTeam/OurTeamInfo";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Text from "@/components/Text";

const OurTeam = ({ title, link, baseUrl, items }) => (
  <SectionWrapper bgColor="paper">
    <Container>
      <SectionHeading title={title} />
      <OurTeamStack>
        {items?.map(({ title: itemTitle, subtitle, teamMemberPhoto, _key }) => (
          <OurTeamItem key={_key}>
            <OurTeamImage>
              <Image {...teamMemberPhoto} />
            </OurTeamImage>
            <OurTeamInfo>
              <Text fontWeight="bold">{itemTitle}</Text>
              <Text fontSize="captionText">{subtitle}</Text>
            </OurTeamInfo>
          </OurTeamItem>
        ))}
      </OurTeamStack>
      <Button aria-label="Show all team members" variant="outlined" link={link} baseUrl={baseUrl}>
        {link.title}
      </Button>
    </Container>
  </SectionWrapper>
);

OurTeam.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      teamMemberPhoto: PropTypes.object.isRequired,
    }),
  ).isRequired,
};

export default OurTeam;
