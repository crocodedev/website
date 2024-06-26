import PropTypes from "prop-types";

import TechnologiesGridGroup from "@/components/TechnologiesGrid/TechnologiesGridGroup";
import TechnologiesGridGroupTitle from "@/components/TechnologiesGrid/TechnologiesGridGroupTitle";
import TechnologiesGridRow from "@/components/TechnologiesGrid/TechnologiesGridRow";
import TechnologyCard from "./TechnologyCard";

const TechnologiesGridColumn = ({slug, title, items }) => {
  return (
    <TechnologiesGridGroup>
      <TechnologiesGridGroupTitle to={slug}>{title}</TechnologiesGridGroupTitle>
      <TechnologiesGridRow>
        {items?.map(({ _key, title: cardLabel, link, technologyImage }) => (
          <TechnologyCard
            variant="transparent"
            key={_key}
            link={link}
            image={technologyImage}
            title={cardLabel}
          />
        ))}
      </TechnologiesGridRow>
    </TechnologiesGridGroup>
  );
};

TechnologiesGridColumn.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      itemimage: PropTypes.object,
    }),
  ).isRequired,
};

export default TechnologiesGridColumn;
