import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import Breadcrumb from "@/components/Breadcrumb";
import Pagination from "@/components/Pagination";
import Card from "@/components/Card";
import ProjectsStack from "@/components/Projects/ProjectsStack";
import ProjectsNavRowWrapper from "@/components/Projects/ProjectsNavRowWrapper";
import ProjectsNavRow from "@/components/Projects/ProjectsNavRow";
import Text from "@/components/Text";
import ProjectsNavStack from "@/components/Projects/ProjectsNavStack";
import Button from "@/components/Button";
import { Link as GatsbyLink, navigate } from "gatsby";
import CtaForm from "./CtaForm";

const CasesList = ({
  breadcrumbs,
  baseUrl,
  casesItems,
  articleSeparator,
  countryFilter,
  technologyFilter,
  numberOfPosts,
}) => {
  const [activeTechnologyFilters, setActiveTechnologyFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    (typeof window !== "undefined" && +location.search.split("=")[1]) || 1,
  );

  const [showingCasesItems, setShowingCasesItems] = useState(casesItems);
  const pageCount = Math.ceil(showingCasesItems.length / numberOfPosts);

  const handleSetCurrentPage = (page) => {
    navigate(`?page=${page}`);
    setCurrentPage(page);
  };

  const isEven = (num) =>
    Math.round(num / 2) % 2 === 0 ? Math.round(num / 2) : Math.round(num / 2) + 1;

  const handleTechnologyFilter = (el) => {
    if (activeTechnologyFilters.includes(el)) {
      setActiveTechnologyFilters(
        activeTechnologyFilters.filter((item) => {
          return item !== el;
        }),
      );
    } else {
      setActiveTechnologyFilters([...activeTechnologyFilters, el]);
    }
  };

  useEffect(() => {
    setShowingCasesItems(
      activeTechnologyFilters.length === 0
        ? casesItems
        : casesItems.filter((el) =>
            el.technologies.some((item) => activeTechnologyFilters.indexOf(item) !== -1),
          ),
    );
  }, [activeTechnologyFilters, countryFilter, casesItems, setShowingCasesItems]);

  return (
    <SectionWrapper>
      <Container>
        <Breadcrumb baseUrl={baseUrl} links={breadcrumbs} color="gray" />
        <ProjectsNavStack>
          <ProjectsNavRowWrapper>
            <Text>Tech stack:</Text>
            <ProjectsNavRow>
              {technologyFilter.map((el) => (
                <Button
                  key={el}
                  aria-label="Technology"
                  variant="outlined"
                  disablePointerEvents={true}
                  handler={() => handleTechnologyFilter(el)}
                  active={activeTechnologyFilters.includes(el)}
                >
                  {el}
                </Button>
              ))}
            </ProjectsNavRow>
          </ProjectsNavRowWrapper>{" "}
          <ProjectsNavRowWrapper>
            <Text>Country:</Text>
            <ProjectsNavRow>
              {countryFilter.map((el) => (
                <Button
                  aria-label="Country"
                  key={el.id}
                  as={GatsbyLink}
                  to={el.slug.current}
                  variant="outlined"
                  active={typeof window !== "undefined" && location.pathname === el.slug.current}
                >
                  {el.title}
                </Button>
              ))}
            </ProjectsNavRow>
          </ProjectsNavRowWrapper>
        </ProjectsNavStack>
        <ProjectsStack>
          {showingCasesItems
            .slice(numberOfPosts * (currentPage - 1), numberOfPosts * currentPage)
            .slice(0, isEven(numberOfPosts))
            ?.map(({ _key, slug, ...info }) =>
              slug.current ? (
                <GatsbyLink key={_key} to={slug.current}>
                  <Card {...info} />
                </GatsbyLink>
              ) : (
                <Card key={_key} {...info} />
              ),
            )}
        </ProjectsStack>
        <CtaForm {...articleSeparator} />
        <ProjectsStack>
          {showingCasesItems
            .slice(numberOfPosts * (currentPage - 1), numberOfPosts * currentPage)
            .slice(isEven(numberOfPosts))
            ?.map(({ _key, slug, ...info }) =>
              slug.current ? (
                <GatsbyLink key={_key} to={slug.current}>
                  <Card {...info} />
                </GatsbyLink>
              ) : (
                <Card key={_key} {...info} />
              ),
            )}
        </ProjectsStack>
        {pageCount > 1 && (
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            handler={handleSetCurrentPage}
            isDynamic={true}
          />
        )}
      </Container>
    </SectionWrapper>
  );
};

CasesList.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.exact({
      link: PropTypes.object,
    }),
  ).isRequired,
  casesItems: PropTypes.object.isRequired,
  numberOfPosts: PropTypes.number.isRequired,
  technologyFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  pageCount: PropTypes.number.isRequired,
  articleSeparator: PropTypes.exact({
    position: PropTypes.number,
    sectionTitle: PropTypes.string,
    title: PropTypes.string,
    bgColor: PropTypes.string,
    buttonText: PropTypes.string,
    messagePlaceholder: PropTypes.string,
  }).isRequired,
  countryFilter: PropTypes.arrayOf(
    PropTypes.exact({
      slug: PropTypes.exact({
        current: PropTypes.string,
      }).isRequired,
    }),
  ).isRequired,
};

export default CasesList;
