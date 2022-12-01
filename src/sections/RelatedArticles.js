import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Container from "@/components/Container";
import Text from "@/components/Text";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import RelatedArticlesStack from "@/components/RelatedArticles/RelatedArticlesStack";
import RelatedArticlesItem from "@/components/RelatedArticles/RelatedArticlesItem";
import RelatedArticlesItemHeading from "@/components/RelatedArticles/RelatedArticlesItemHeading";
import RelatedArticlesItemDescription from "@/components/RelatedArticles/RelatedArticlesItemDescription";
import SectionWrapper from "@/components/SectionWrapper";
import ImageStatic from "@/components/Image";
import RelatedArticlesImageWrapper from "@/components/RelatedArticles/RelatedArticlesImageWrapper";
import RelatedArticlesItemHeadingTitle from "@/components/RelatedArticles/RelatedArticlesItemHeadingTitle";
import { Link } from "gatsby";

const RelatedArticles = ({ title, bgColor, baseUrl, link, items }) => {
  const theme = useTheme();
  return (
    <SectionWrapper bgColor={bgColor}>
      <Container>
        <SectionHeading title={title} />
        <RelatedArticlesStack>
          {items.map(({ title: itemTitle, _key, desc, slug, coverImage, date }) => (
            <RelatedArticlesItem as={Link} to={slug.current} key={_key}>
              <RelatedArticlesImageWrapper>
                <ImageStatic loading="lazy" {...coverImage} />
              </RelatedArticlesImageWrapper>
              <RelatedArticlesItemHeading>
                <RelatedArticlesItemHeadingTitle
                  fontSize="subtitle"
                  fontWeight="bold"
                  itemTitle={itemTitle}
                >
                  {itemTitle}
                </RelatedArticlesItemHeadingTitle>
                <Text fontSize="captionText" color={theme.palette.text.disabled}>
                  {date}
                </Text>
              </RelatedArticlesItemHeading>
              <RelatedArticlesItemDescription fontSize="subtitle" mobileMultiplier={0.7}>
                {desc}
              </RelatedArticlesItemDescription>
            </RelatedArticlesItem>
          ))}
        </RelatedArticlesStack>

        <Button aria-label="Show all articles" link={link} variant="outlined" baseUrl={baseUrl}>
          {link.title}
        </Button>
      </Container>
    </SectionWrapper>
  );
};

RelatedArticles.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default RelatedArticles;
