import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import ImageStatic from "@/components/Image";
import OurTeamImage from "@/components/OurTeam/OurTeamImage";
import OurTeamStack from "@/components/OurTeam/OurTeamStack";
import OurTeamItem from "@/components/OurTeam/OurTeamItem";
import OurTeamPosition from "@/components/OurTeam/OurTeamPosition";
import OurTeamName from "@/components/OurTeam/OurTeamName";
import OurTeamInfo from "@/components/OurTeam/OurTeamInfo";
import Button from "@/components/Button";

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
  <SectionWrapper>
    <Container>
      <OurTeamStack>
        {data.items.map(({ src, name, role }) => (
          <OurTeamItem key={name}>
            <OurTeamImage>
              <ImageStatic src={src} />
            </OurTeamImage>
            <OurTeamInfo>
              <OurTeamName>{name}</OurTeamName>
              <OurTeamPosition>{role}</OurTeamPosition>
            </OurTeamInfo>
          </OurTeamItem>
        ))}
      </OurTeamStack>
      <Button>Show more</Button>
    </Container>
  </SectionWrapper>
);

export default OurTeam;