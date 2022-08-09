import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TechnologyStackContent from "@/components/TechnologyStack/TechnologyStackContent";
import TechnologyCard from "@/components/TechnologyCard";

const pageData = {
  title: "Technology stack",
  items: [
    {
      id: 1,
      src: "/uploads/technologies.png",
      title: "Google Maps",
    },
    {
      id: 2,
      src: "/uploads/technologies.png",
      title: "Google Maps",
    },
    {
      id: 3,
      src: "/uploads/technologies.png",
      title: "Google Maps",
    },
    {
      id: 4,
      src: "/uploads/technologies.png",
      title: "Google Maps",
    },
    {
      id: 5,
      src: "/uploads/technologies.png",
      title: "Google Maps",
    },
    {
      id: 6,
      src: "/uploads/technologies.png",
      title: "Google Maps",
    },
    {
      id: 7,
      src: "/uploads/technologies.png",
      title: "Google Maps",
    },
  ],
};

const TechnologyStack = ({ data = pageData }) => {
  const { title: titleCard, items } = data;

  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={titleCard} />
        <TechnologyStackContent>
          {items.map(({ id, ...props }) => (
            <TechnologyCard key={id} {...props} />
          ))}
        </TechnologyStackContent>
      </Container>
    </SectionWrapper>
  );
};

TechnologyStack.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
  }).isRequired,
};

export default TechnologyStack;
