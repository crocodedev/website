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
import ImageStatic from "@/components/Image";

const data = {
  title: "What they say about us",
  items: [
    {
      id: "1",
      authorName: "Dean Maslic",
      authorCountry: "Australia",
      authorPhoto: "/uploads/reviews-author.jpg",
      rating: 0.5,
      text: "Very talented Frontend team, fantastic CSS skills, completed all allocated tasks on time. Would highly recommend & looking forward together in the future.",
      date: "2 Sep. 2020",
    },
    {
      id: "2",
      authorName: "Dean Maslic",
      authorCountry: "Australia",
      authorPhoto: "/uploads/reviews-author.jpg",
      rating: 1.5,
      text: "Very talented Frontend team, fantastic CSS skills, completed all allocated tasks on time. Would highly recommend & looking forward together in the future.",
      date: "2 Sep. 2020",
    },
    {
      id: "3",
      authorName: "Dean Maslic",
      authorCountry: "Australia",
      authorPhoto: "/uploads/reviews-author.jpg",
      rating: 2.5,
      text: "Very talented Frontend team, fantastic CSS skills, completed all allocated tasks on time. Would highly recommend & looking forward together in the future.",
      date: "2 Sep. 2020",
    },
    {
      id: "3",
      authorName: "Dean Maslic",
      authorCountry: "Australia",
      authorPhoto: "/uploads/reviews-author.jpg",
      rating: 3.5,
      text: "Very talented Frontend team, fantastic CSS skills, completed all allocated tasks on time. Would highly recommend & looking forward together in the future.",
      date: "2 Sep. 2020",
    },
    {
      id: "3",
      authorName: "Dean Maslic",
      authorCountry: "Australia",
      authorPhoto: "/uploads/reviews-author.jpg",
      rating: 4.5,
      text: "Very talented Frontend team, fantastic CSS skills, completed all allocated tasks on time. Would highly recommend & looking forward together in the future.",
      date: "2 Sep. 2020",
    },
  ],
};

const Reviews = () => {
  const theme = useTheme();

  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={data.title} />
        <ReviewsContent>
          <ReviewsButton dir="left" className="reviews__prev-el" />

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
              {data.items.map(
                ({ id, authorPhoto, authorCountry, authorName, rating, text, date }) => (
                  <SwiperSlide key={id}>
                    <ReviewsItem>
                      <ReviewsItemHeading>
                        <ReviewsItemAuthor>
                          <ReviewsItemAuthorImage>
                            <ImageStatic src={authorPhoto} />
                          </ReviewsItemAuthorImage>
                          <ReviewsItemAuthorContent>
                            <Text fontWeight="bold" lineHeight="sm">
                              {authorName}
                            </Text>
                            <Text color={theme.palette.primary.main} fontSize="captionText">
                              {authorCountry}
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
          <ReviewsButton dir="right" className="reviews__next-el" />
        </ReviewsContent>
      </Container>
    </SectionWrapper>
  );
};

export default Reviews;
