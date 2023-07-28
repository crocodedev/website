import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TechnologiesGridColumn from "@/components/TechnologiesGridColumn";

const TechnologiesGrid = ({ title, categories }) => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} />
        {categories?.map(({ _key, title: categoryTitle, technologiesList }) => (
          <TechnologiesGridColumn key={_key} title={categoryTitle} items={technologiesList} />
        ))}
      </Container>
    </SectionWrapper>
  );
};

TechnologiesGrid.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      technologyImage: PropTypes.object,
      link: PropTypes.object,
    }),
  ).isRequired,
};

export default TechnologiesGrid;
