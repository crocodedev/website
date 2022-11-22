import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { useTheme } from "@emotion/react";
import BlogListItemContent from "@/components/BlogList/BlogListItemContent";
import BlogListItemContentTop from "@/components/BlogList/BlogListItemContentTop";
import BlogListItemImage from "@/components/BlogList/BlogListItemImage";
import BlogListItemDesc from "@/components/BlogList/BlogListItemDesc";
import Image from "@/components/Image";
import Text from "@/components/Text";
import BlogListItemHeading from "@/components/BlogList/BlogListItemHeading";
import BlogListItemButton from "@/components/BlogList/BlogListItemButton";
import Button from "@/components/Button";
import dateToIntlFormat from "@/helpers/IntlDate";

const Component = styled.article`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;
const BlogListItem = ({
  title: articleTitle,
  date,
  desc,
  buttonTitle,
  coverImage,
  slug,
  i18nLang,
}) => {
  const theme = useTheme();
  return (
    <Component>
      <BlogListItemImage>
        <Image {...coverImage} />
      </BlogListItemImage>
      <BlogListItemContent>
        <BlogListItemContentTop>
          <Text mobileMultiplier={0.6} color={theme.palette.text.disabled} fontSize="subtitle">
            {dateToIntlFormat(date, i18nLang)}
          </Text>
          <BlogListItemHeading
            color={theme.palette.text.primary}
            fontSize="title2"
            mobileMultiplier={0.48}
            lineHeight="xsm"
            fontWeight="bold"
          >
            {articleTitle}
          </BlogListItemHeading>
        </BlogListItemContentTop>
        <BlogListItemDesc
          mobileMultiplier={0.7}
          fontSize="subtitle"
          color={theme.palette.text.primary}
        >
          {desc}
        </BlogListItemDesc>
        <BlogListItemButton>
          <Button as={Link} aria-label="Category" variant="text" to={slug.current}>
            {buttonTitle}
          </Button>
        </BlogListItemButton>
      </BlogListItemContent>
    </Component>
  );
};

BlogListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  coverImage: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  i18nLang: PropTypes.string.isRequired,
};

export default BlogListItem;
