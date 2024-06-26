import PropTypes from "prop-types";
import { Link } from "gatsby";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import ProjectsStack from "@/components/Projects/ProjectsStack";
import Card from "@/components/Card";

const CaseStudies = ({ title, subtitle, items, link, baseUrl }) => {
  if (items.length === 0) {
    return null
  }
  return (
  <SectionWrapper>
    <Container>
      <SectionHeading title={title} text={subtitle} />
      <ProjectsStack>
        {items?.map(({ _id, slug, ...info }) => (
          <Link key={_id} to={slug?.current}>
            <Card {...info} />
          </Link>
        ))}
      </ProjectsStack>
      {link && (
        <Button aria-label="Show all case studies" baseUrl={baseUrl} link={link} variant="outlined">
          {link.title}
        </Button>
      )}
    </Container>
  </SectionWrapper>
)};

CaseStudies.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  items: PropTypes.array.isRequired,
  link: PropTypes.object.isRequired,
};

CaseStudies.defaultProps = {
  subtitle: "",
};

export default CaseStudies;
