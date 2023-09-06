import PropTypes from "prop-types";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TechnologiesGridColumn from "@/components/TechnologiesGridColumn";

const TechnologiesGrid = ({ title, categories, breadcrumbs, baseUrl }) => {
  return (
    <SectionWrapper onlyBottomPadding>
      <Container>
        <Breadcrumb baseUrl={baseUrl} links={breadcrumbs} color="gray" disablePaddingBottom />
        <SectionHeading title={title} />
        {categories?.map(({ _key, title: categoryTitle, technologiesList, slug }) => (
          <TechnologiesGridColumn key={_key} slug={slug} title={categoryTitle} items={technologiesList} />
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
      slug: PropTypes.string,
      technologyImage: PropTypes.object,
      link: PropTypes.object,
    }),
  ).isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  baseUrl: PropTypes.string,
};

TechnologiesGrid.defaultProps = {
  baseUrl: "",
};

export default TechnologiesGrid;
