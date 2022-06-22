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

const data = {
  title: "Related articles from our Blog",
  articles: [
    {
      src: "/uploads/related-articles-article-image-1.jpg",
      heading: "Break is an important part of work",
      date: "12 Apr. 2022",
      text: `How much tired eyes sometimes you notice, only after finishing hard work. 
        Business is business, but even a ten-minute break will help both the eyes and even the memory. 
        Rest with closed eyes has been the most obvious and accessible type of relaxation after sleep since ancient times.`,
    },
    {
      src: "/uploads/related-articles-article-image-2.jpg",
      heading: "A typical day at the office",
      date: "10 Jan. 2022",
      text: `We decided to share a part of our corporate culture, revealing some moments from the life of our office, 
        to tell and show how everything is arranged here.
        It is no secret that IT companies strive to create interesting office spaces for their employees, so that they can feel comfortable, 
        relaxed, find quiet places to solve important tasks or creative space for inspiration and great ideas.`,
    },
  ],
};

const RelatedArticles = () => {
  const theme = useTheme();
  return (
    <SectionWrapper bgColor="paper">
      <Container>
        <SectionHeading title={data.title} />
        <RelatedArticlesStack>
          {data.articles.map(({ src, heading, date, text }) => (
            <RelatedArticlesItem key={heading}>
              <RelatedArticlesImageWrapper>
                <ImageStatic src={src} />
              </RelatedArticlesImageWrapper>
              <RelatedArticlesItemHeading>
                <Text fontSize="subtitle" fontWeight="bold">
                  {heading}
                </Text>
                <Text fontSize="captionText" color={theme.palette.text.disabled}>
                  {date}
                </Text>
              </RelatedArticlesItemHeading>
              <RelatedArticlesItemDescription fontSize="subtitle">
                {text}
              </RelatedArticlesItemDescription>
            </RelatedArticlesItem>
          ))}
        </RelatedArticlesStack>

        <Button variant="outlined">Show more</Button>
      </Container>
    </SectionWrapper>
  );
};

export default RelatedArticles;
