import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import ProjectsStack from "@/components/Projects/ProjectsStack";
import Card from "@/components/Card";

const pageData = {
  title: "Our Case Studies",
  buttonText: "Show more",
  items: [
    {
      id: 1,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 2,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ],
};

const CaseStudies = ({ data = pageData }) => {
  const { title, buttonText } = data;
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} />
        <ProjectsStack>
          {data.items.map(({ id, ...props }) => (
            <Card key={id} {...props} />
          ))}
        </ProjectsStack>
        <Button variant="outlined">{buttonText}</Button>
      </Container>
    </SectionWrapper>
  );
};

CaseStudies.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    buttonText: PropTypes.string,
  }).isRequired,
};

export default CaseStudies;
