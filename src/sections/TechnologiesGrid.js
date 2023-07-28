import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TechnologiesGridColumn from "@/components/TechnologiesGridColumn";

const TechnologiesGrid = ({ title, items }) => {
  console.log(title, items);
  return (
    <div>asd</div>
    // <SectionWrapper>
    //   <Container>
    //     <SectionHeading title={title} />
    //     {items?.map(({ columnnTitle, items }) => (
    //       <TechnologiesGridColumn title={columnnTitle} items={items} />
    //     ))}
    //   </Container>
    // </SectionWrapper>
  );
};

TechnologiesGrid.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      itemimage: PropTypes.object,
    }),
  ).isRequired,
};

export default TechnologiesGrid;
