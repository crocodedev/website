import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import ProjectsStack from "@/components/Projects/ProjectsStack";
import Card from "@/components/Card";
import Link from "@/components/Link";

const CaseStudies = ({ title, subtitle, items, link, baseUrl }) => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={title} text={subtitle} />
      <ProjectsStack>
        {items?.map(({ _key, link: itemLink, ...info }) =>
          itemLink ? (
            <Link key={_key} baseUrl={baseUrl} {...itemLink}>
              <Card {...info} />
            </Link>
          ) : (
            <Card key={_key} {...info} />
          ),
        )}
      </ProjectsStack>
      {link && (
        <Button aria-label="Show all case studies" baseUrl={baseUrl} link={link} variant="outlined">
          {link.title}
        </Button>
      )}
    </Container>
  </SectionWrapper>
);

CaseStudies.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  link: PropTypes.object.isRequired,
};

export default CaseStudies;
