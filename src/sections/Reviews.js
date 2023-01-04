import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useTheme } from "@emotion/react";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import ReviewsContent from "@/components/Reviews/ReviewsContent";
import ReviewsButton from "@/components/Reviews/ReviewsButton";
import ReviewsItem from "@/components/Reviews/ReviewsItem";
import ReviewsItemHeading from "@/components/Reviews/ReviewsItemHeading";
import ReviewsItemAuthor from "@/components/Reviews/ReviewsItemAuthor";
import ReviewsItemAuthorImage from "@/components/Reviews/ReviewsItemAuthorImage";
import ReviewsItemRating from "@/components/Reviews/ReviewsItemRating";
import ReviewsItemAuthorContent from "@/components/Reviews/ReviewsItemAuthorContent";
import ReviewsItemContent from "@/components/Reviews/ReviewsItemContent";
import ReviewsSwiperWrapper from "@/components/Reviews/ReviewsSwiperWrapper";
import ReviewsPagination from "@/components/Reviews/ReviewsPagination";

import Text from "@/components/Text";
import Image from "@/components/Image";

const Reviews = ({ title, subtitle, items, baseUrl }) => {
  const theme = useTheme(title, subtitle, items, baseUrl);

  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} />
        <ReviewsContent>
          <ReviewsButton aria-label="left" dir="left" className="reviews__prev-el" />

          <ReviewsSwiperWrapper>
            <Swiper
              pagination={{ el: ".reviews-pagination" }}
              modules={[Pagination, Navigation]}
              navigation={{
                disabledClass: "reviews__disabled",
                nextEl: ".reviews__next-el",
                prevEl: ".reviews__prev-el",
              }}
            >
              {items?.map(
                ({
                  _key,
                  title: itemTitle,
                  subtitle: itemSubtitle,
                  date,
                  rating,
                  text,
                  userPhoto,
                }) => (
                  <SwiperSlide key={_key}>
                    <ReviewsItem>
                      <ReviewsItemHeading>
                        <ReviewsItemAuthor>
                            {userPhoto?.image && <ReviewsItemAuthorImage>
                              <Image {...userPhoto} />
                            </ReviewsItemAuthorImage>}
                          <ReviewsItemAuthorContent>
                            <Text fontWeight="bold" lineHeight="sm">
                              {itemTitle}
                            </Text>
                            <Text color={theme.palette.primary.main} fontSize="captionText">
                              {itemSubtitle}
                            </Text>
                          </ReviewsItemAuthorContent>
                        </ReviewsItemAuthor>
                        <ReviewsItemRating rating={rating} />
                      </ReviewsItemHeading>
                      <ReviewsItemContent>
                        <Text fontSize="captionText" lineHeight="lg">
                          {text}
                        </Text>
                        <Text color={theme.palette.text.disabled} fontSize="captionText">
                          {date}
                        </Text>
                      </ReviewsItemContent>
                    </ReviewsItem>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
            <ReviewsPagination className="reviews-pagination" />
          </ReviewsSwiperWrapper>
          <ReviewsButton aria-label="right" dir="right" className="reviews__next-el" />
        </ReviewsContent>
      </Container>
    </SectionWrapper>
  );
};

Reviews.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      date: PropTypes.string,
      rating: PropTypes.number,
      text: PropTypes.string,
      userPhoto: PropTypes.object,
    }),
  ).isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export default Reviews;
