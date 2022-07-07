/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import ImageStatic from "@/components/Image";
import Text from "@/components/Text";
import SliderStepsItem from "@/components/SliderSteps/SliderStepsItem";
import SliderStepsItemInfo from "@/components/SliderSteps/SliderStepsItemInfo";
import SliderStepsItemImage from "@/components/SliderSteps/SliderStepsItemImage";
import SliderStepsNavigation from "@/components/SliderSteps/SliderStepsNavigation";
import SliderStepsArrow from "@/components/SliderSteps/SliderStepsArrow";
import SliderStepsPagination from "@/components/SliderSteps/SliderStepsPagination";
import SliderStepsContentWrapper from "@/components/SliderSteps/SliderStepsContentWrapper";
import SliderStepsContent from "@/components/SliderSteps/SliderStepsContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectCreative, EffectCube, Navigation, Pagination } from "swiper";
import SliderStepsImageWrapper from "@/components/SliderSteps/SliderStepsImageWrapper";
import SliderStepsContainer from "@/components/SliderSteps/SliderStepsContainer";
import { useState } from "react";
import "swiper/css/effect-creative";

const pageData = {
  title: "Developing Process",
  items: [
    {
      id: 1,
      image: "/uploads/slider-steps-item-image.jpg",
      heading: "1 – Interview",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 2,
      image: "/uploads/slider-steps-item-image.jpg",
      heading: "2 – Interview",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 3,
      image: "/uploads/slider-steps-item-image.jpg",
      heading: "3 – Interview",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 4,
      image: "/uploads/slider-steps-item-image.jpg",
      heading: "4 – Interview",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 5,
      image: "/uploads/slider-steps-item-image.jpg",
      heading: "5 – Interview",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ],
};

const SliderSteps = ({ data = pageData }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const { title, items } = data;
  return (
    <SectionWrapper>
      <SliderStepsContainer>
        <SectionHeading title={title} />
        <SliderStepsContentWrapper>
          <SliderStepsContent>
            <Swiper
              grabCursor={true}
              simulateTouch={true}
              speed={800}
              loop={true}
              modules={[Pagination, Navigation, Controller]}
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
              pagination={{ el: ".sliderSteps-pagination" }}
              navigation={{
                disabledClass: "sliderSteps__disabled",
                nextEl: ".sliderSteps__next-el",
                prevEl: ".sliderSteps__prev-el",
              }}
            >
              {items.map(({ id, heading, desc }) => (
                <SwiperSlide key={id}>
                  <SliderStepsItem>
                    <SliderStepsItemInfo>
                      <Text
                        mobileMultiplier={0.6}
                        fontSize="title3"
                        fontWeight="semiBold"
                        lineHeight="sm"
                      >
                        {heading}
                      </Text>
                      <Text mobileMultiplier={0.875} fontSize="text">
                        {desc}
                      </Text>
                    </SliderStepsItemInfo>
                  </SliderStepsItem>
                </SwiperSlide>
              ))}
            </Swiper>

            <SliderStepsNavigation>
              <SliderStepsArrow dir="left" className="sliderSteps__prev-el" />
              <SliderStepsPagination className="sliderSteps-pagination" />
              <SliderStepsArrow dir="right" className="sliderSteps__next-el" />
            </SliderStepsNavigation>
          </SliderStepsContent>

          <SliderStepsImageWrapper>
            <Swiper
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              effect="creative"
              creativeEffect={{
                prev: {
                  translate: ["0%", 0, -1],
                  scale: 0.7,
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              grabCursor={true}
              simulateTouch={true}
              loop={true}
              speed={800}
              modules={[Pagination, Controller, EffectCreative]}
              pagination={{ el: ".sliderSteps-pagination" }}
            >
              {items.map(({ id, image }) => (
                <SwiperSlide key={id}>
                  <SliderStepsItemImage>
                    <ImageStatic src={image} />
                  </SliderStepsItemImage>
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderStepsImageWrapper>
        </SliderStepsContentWrapper>
      </SliderStepsContainer>
    </SectionWrapper>
  );
};

SliderSteps.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    items: PropTypes.exact({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default SliderSteps;
