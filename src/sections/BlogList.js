import PropTypes from "prop-types";
import { Link } from "gatsby";
import Breadcrumb from "@/components/Breadcrumb";
import BlogListItem from "@/components/BlogList/BlogListItem";
import SectionHeading from "@/components/SectionHeading";
import BlogListNavigationStack from "@/components/BlogList/BlogListNavigationStack";
import BlogListStack from "@/components/BlogList/BlogListStack";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import Pagination from "@/components/Pagination";
import CtaForm from "./CtaForm";

const BlogList = ({
  slug,
  articles,
  categories,
  articleSeparator,
  breadcrumbs,
  i18n_lang: i18nLang,
  baseUrl,
  pageCount,
}) => {
  const pageUrl = (typeof window !== "undefined" && window.location.pathname.split("/")) || "";
  const currentPage = isNaN(pageUrl[pageUrl.length - 2]) ? 1 : +pageUrl[pageUrl.length - 2];

  return (
    <SectionWrapper>
      <Container>
        {breadcrumbs.length > 0 && (
          <Breadcrumb baseUrl={baseUrl} links={breadcrumbs} color="gray" />
        )}
        <SectionHeading titleTag="h1" title="Blog" />
        <BlogListNavigationStack>
          {categories.map(({ title: categoryTitle, slug: categorySlug, id }) => (
            <Button
              aria-label="Category"
              as={Link}
              active={
                isNaN(pageUrl[pageUrl.length - 2])
                  ? pageUrl[pageUrl.length - 2] === categorySlug.current.split("/").pop()
                  : pageUrl[pageUrl.length - 3] === categorySlug.current.split("/").pop()
              }
              variant="outlined"
              to={categorySlug.current}
              key={id}
            >
              {categoryTitle}
            </Button>
          ))}
        </BlogListNavigationStack>
        <BlogListStack>
          {articles.map(({ id, ...props }) => (
            <BlogListItem key={id} i18nLang={i18nLang} {...props} />
          ))}
        </BlogListStack>
        {/* <BlogListStack>
          {articles.slice(0, Math.floor(articles.length / 2)).map(({ id, ...props }) => (
            <BlogListItem key={id} i18nLang={i18nLang} {...props} />
          ))}
        </BlogListStack>
        <BlogListStack>
          {articles.slice(Math.floor(articles.length / 2)).map(({ id, ...props }) => (
            <BlogListItem key={id} i18nLang={i18nLang} {...props} />
          ))}
        </BlogListStack> */}
        {pageCount > 1 && (
          <Pagination
            link={slug.current}
            currentPage={currentPage}
            pageCount={pageCount}
            isDynamic={false}
          />
        )}
        <CtaForm {...articleSeparator} />
      </Container>
        

    </SectionWrapper>
  );
};

BlogList.propTypes = {
  articles: PropTypes.any.isRequired,
  categories: PropTypes.any.isRequired,
  numberOfPosts: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  articleSeparator: PropTypes.object.isRequired,
  baseUrl: PropTypes.string.isRequired,
  i18n_lang: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  slug: PropTypes.exact({
    current: PropTypes.string,
  }).isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.exact({
      link: PropTypes.object,
    }),
  ).isRequired,
};

export default BlogList;
