import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import ImageStatic from "@/components/Image";
import OurTeamImage from "@/components/OurTeam/OurTeamImage";
import OurTeamStack from "@/components/OurTeam/OurTeamStack";
import OurTeamItem from "@/components/OurTeam/OurTeamItem";
import OurTeamInfo from "@/components/OurTeam/OurTeamInfo";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Text from "@/components/Text";

const data = {
  title: "Our Team",
  items: [
    {
      src: "/uploads/our-team-person-1.jpg",
      name: "Edward Hart",
      role: "Company Director",
    },
    {
      src: "/uploads/our-team-person-2.jpg",
      name: "David Craig",
      role: "Business Analyst",
    },
    {
      src: "/uploads/our-team-person-3.jpg",
      name: "Jane Cooper",
      role: "Art Director",
    },
    {
      src: "/uploads/our-team-person-4.jpg",
      name: "Oliver Foster",
      role: "Front-end Developer",
    },
    {
      src: "/uploads/our-team-person-5.jpg",
      name: "George Robbins",
      role: "Tester",
    },
    {
      src: "/uploads/our-team-person-6.jpg",
      name: "Linda Clarke",
      role: "Project Manager",
    },
    {
      src: "/uploads/our-team-person-7.jpg",
      name: "Mary Barrett",
      role: "UX/UI Designer",
    },
    {
      src: "/uploads/our-team-person-8.jpg",
      name: "Eric Woods",
      role: "Front-end Developer",
    },
  ],
};

const OurTeam = () => (
  <SectionWrapper bgColor="paper">
    <Container>
      <SectionHeading title={data.title} />
      <OurTeamStack>
        {data.items.map(({ src, name, role }) => (
          <OurTeamItem key={name}>
            <OurTeamImage>
              <ImageStatic src={src} />
            </OurTeamImage>
            <OurTeamInfo>
              <Text fontWeight="bold">{name}</Text>
              <Text fontSize="captionText">{role}</Text>
            </OurTeamInfo>
          </OurTeamItem>
        ))}
      </OurTeamStack>
      <Button variant="outlined">Show more</Button>
    </Container>
  </SectionWrapper>
);

export default OurTeam;
