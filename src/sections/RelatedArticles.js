import Container from "@/components/Container";
import Text from "@/components/Text";
import SectionHeading from "@/components/SectionHeading";
import RelatedArticlesStack from "@/components/RelatedArticles/RelatedArticlesStack";
import RelatedArticlesItem from "@/components/RelatedArticles/RelatedArticlesItem";
import RelatedArticlesItemHeading from "@/components/RelatedArticles/RelatedArticlesItemHeading";
import RelatedArticlesItemDescription from "@/components/RelatedArticles/RelatedArticlesItemDescription";
import { useTheme } from "@emotion/react";

const RelatedArticles = () => {
  const theme = useTheme();
  return (
    <section>
      <Container>
        <SectionHeading title="Related articles from our Blog" />
        <RelatedArticlesStack>
          <RelatedArticlesItem>
            <RelatedArticlesItemHeading>
              <Text>Break is an important part of work</Text>
              <Text>12 Apr. 2022</Text>
            </RelatedArticlesItemHeading>
          </RelatedArticlesItem>

          <RelatedArticlesItem>
            <RelatedArticlesItemHeading>
              <Text fontSize="subtitle" fontWeight="bold">
                Break is an important part of work
              </Text>
              <Text fontSize="captionText" color={theme.palette.text.disabled}>
                12 Apr. 2022
              </Text>
            </RelatedArticlesItemHeading>
            <RelatedArticlesItemDescription fontSize="subtitle">
              How much tired eyes sometimes you notice, only after finishing hard work. Business is
              business, but even a ten-minute break will help both the eyes and even the memory.
              Rest with closed eyes has been the most obvious and accessible type of relaxation
              after sleep since ancient times.
            </RelatedArticlesItemDescription>
          </RelatedArticlesItem>
        </RelatedArticlesStack>
      </Container>
    </section>
  );
};

export default RelatedArticles;
