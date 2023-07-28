import PropTypes from "prop-types";

import TechnologiesGridGroup from "@/components/TechnologiesGrid/TechnologiesGridGroup";
import TechnologiesGridGroupTitle from "@/components/TechnologiesGrid/TechnologiesGridGroupTitle";
import TechnologiesStackGridRow from "@/components/TechnologiesGrid/TechnologiesStackGridRow";
import TechnologyCard from "./TechnologyCard";

const TechnologiesGridColumn = ({ title, items }) => {
  return (
    <div>asd</div>
    // <TechnologiesGridGroup>
    //   <TechnologiesGridGroupTitle>{title}</TechnologiesGridGroupTitle>
    //   <TechnologiesStackGridRow>
    //     {items?.map(({ _key, title, itemimage }) => (
    //       <TechnologyCard key={_key} image={itemimage} title={itemTitle} />
    //     ))}
    //   </TechnologiesStackGridRow>
    // </TechnologiesGridGroup>
  );
};

TechnologiesGridColumn.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      itemimage: PropTypes.object,
    }),
  ).isRequired,
};

export default TechnologiesGridColumn;
