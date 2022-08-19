/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectCreative, Navigation, Pagination } from "swiper";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "@/components/Image";
import Text from "@/components/Text";
import SliderStepsItem from "@/components/SliderSteps/SliderStepsItem";
import SliderStepsItemInfo from "@/components/SliderSteps/SliderStepsItemInfo";
import SliderStepsItemImage from "@/components/SliderSteps/SliderStepsItemImage";
import SliderStepsNavigation from "@/components/SliderSteps/SliderStepsNavigation";
import SliderStepsArrow from "@/components/SliderSteps/SliderStepsArrow";
import SliderStepsPagination from "@/components/SliderSteps/SliderStepsPagination";
import SliderStepsContentWrapper from "@/components/SliderSteps/SliderStepsContentWrapper";
import SliderStepsContent from "@/components/SliderSteps/SliderStepsContent";
import SliderStepsImageWrapper from "@/components/SliderSteps/SliderStepsImageWrapper";
import SliderStepsContainer from "@/components/SliderSteps/SliderStepsContainer";

import "swiper/css/effect-creative";

const SliderSteps = ({ subtitle, title, itemsSteps }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <SectionWrapper>
      <SliderStepsContainer>
        <SectionHeading title={title} text={subtitle} />
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
              {itemsSteps?.map(({ _key, title: itemTitle, text }) => (
                <SwiperSlide key={_key}>
                  <SliderStepsItem>
                    <SliderStepsItemInfo>
                      <Text
                        mobileMultiplier={0.6}
                        fontSize="title3"
                        fontWeight="semiBold"
                        lineHeight="sm"
                      >
                        {itemTitle}
                      </Text>
                      <Text mobileMultiplier={0.875} fontSize="text">
                        {text}
                      </Text>
                    </SliderStepsItemInfo>
                  </SliderStepsItem>
                </SwiperSlide>
              ))}
            </Swiper>

            <SliderStepsNavigation>
              <SliderStepsArrow aria-label="left" dir="left" className="sliderSteps__prev-el" />
              <SliderStepsPagination className="sliderSteps-pagination" />
              <SliderStepsArrow aria-label="right" dir="right" className="sliderSteps__next-el" />
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
              {itemsSteps?.map(({ _key, image }) => (
                <SwiperSlide key={_key}>
                  <SliderStepsItemImage>
                    <Image {...image} />
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
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemsSteps: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.object,
    }),
  ).isRequired,
};

export default SliderSteps;
