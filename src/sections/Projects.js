import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import ProjectsNavStack from "@/components/Projects/ProjectsNavStack";
import ProjectsNavRow from "@/components/Projects/ProjectsNavRow";
import ProjectsNavRowWrapper from "@/components/Projects/ProjectsNavRowWrapper";
import Text from "@/components/Text";
import ProjectsStack from "@/components/Projects/ProjectsStack";
import ProjectsStackItem from "@/components/Projects/ProjectsStackItem";
import ProjectsStackItemContent from "@/components/Projects/ProjectsStackItemContent";
import ProjectsStackItemImageWrapper from "@/components/Projects/ProjectsStackItemImageWrapper";
import ProjectsStackItemHeading from "@/components/Projects/ProjectsStackItemHeading";
import ImageStatic from "@/components/Image";
import ProjectsStackItemHeadingLabel from "@/components/Projects/ProjectsStackItemHeadingLabel";
import ProjectsStackItemHeadingTitle from "@/components/Projects/ProjectsStackItemHeadingTitle";
import ProjectsStackItemDescription from "@/components/Projects/ProjectsStackItemDescription";
import Button from "@/components/Button";

const data = {
  categories: [
    {
      title: "Tech stack:",
      items: [
        {
          title: "JavaScript",
          link: "/#",
        },
        {
          title: "Shopify",
          link: "/#",
        },
        {
          title: "HTML",
          link: "/#",
        },
        {
          title: "Gatsby",
          link: "/#",
        },
        {
          title: "Netlify",
          link: "/#",
        },
      ],
    },
    {
      title: "Country:",
      items: [
        {
          title: "Belarus",
          link: "/#",
        },
        {
          title: "USA",
          link: "/#",
        },
        {
          title: "Finland",
          link: "/#",
        },
        {
          title: "Switzerland",
          link: "/#",
        },
        {
          title: "Norway",
          link: "/#",
        },
      ],
    },
  ],
  articles: [
    {
      id: 1,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 2,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 3,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 4,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 5,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 6,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 7,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 8,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 9,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 10,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 11,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 12,
      src: "/uploads/projects-item-image.jpg",
      title: "BRU.",
      label: "Food and Beverage Services",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ],
};
const Projects = () => (
  <SectionWrapper>
    <Container>
      <ProjectsNavStack>
        {data.categories.map(({ title, items }) => (
          <ProjectsNavRow key={title}>
            <Text fontSize="captionText">{title}</Text>
            <ProjectsNavRowWrapper>
              {items.map(({ title: itemTitle, link }) => (
                <Button
                  active={itemTitle === "Latest"}
                  variant="outlined"
                  to={link}
                  key={itemTitle}
                >
                  {itemTitle}
                </Button>
              ))}
            </ProjectsNavRowWrapper>
          </ProjectsNavRow>
        ))}
      </ProjectsNavStack>
      {/* gap: 40px */}
      <ProjectsStack>
        {data.articles.map(({ id, src, title, label, text }) => (
          <ProjectsStackItem key={id}>
            <ProjectsStackItemImageWrapper>
              <ImageStatic src={src} />
            </ProjectsStackItemImageWrapper>
            <ProjectsStackItemContent>
              <ProjectsStackItemHeading>
                <ProjectsStackItemHeadingTitle
                  mobileMultiplier={0.715}
                  fontSize="title3"
                  fontWeight="bold"
                  lineHeight="sm"
                >
                  {title}
                </ProjectsStackItemHeadingTitle>
                <ProjectsStackItemHeadingLabel fontWeight="regular">
                  {label}
                </ProjectsStackItemHeadingLabel>
              </ProjectsStackItemHeading>
              <ProjectsStackItemDescription mobileMultiplier={0.875}>
                {text}
              </ProjectsStackItemDescription>
            </ProjectsStackItemContent>
          </ProjectsStackItem>
        ))}
      </ProjectsStack>
    </Container>
  </SectionWrapper>
);

export default Projects;
