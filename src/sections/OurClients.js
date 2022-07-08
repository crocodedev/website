import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import OurClientsImageWrapper from "@/components/OurClients/OurClientsImageWrapper";
import ImageStatic from "@/components/Image";
import OurClientsContent from "@/components/OurClients/OurClientsContent";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";

const dataPage = {
  title: "Our clients",
  sliders: [
    {
      id: "1",
      slider: [
        { src: "uploads/our-clients.svg", id: "1" },
        { src: "uploads/our-clients.svg", id: "2" },
        { src: "uploads/our-clients.svg", id: "3" },
        { src: "uploads/our-clients.svg", id: "4" },
        { src: "uploads/our-clients.svg", id: "5" },
        { src: "uploads/our-clients.svg", id: "6" },
        { src: "uploads/our-clients.svg", id: "7" },
        { src: "uploads/our-clients.svg", id: "8" },
        { src: "uploads/our-clients.svg", id: "9" },
        { src: "uploads/our-clients.svg", id: "10" },
        { src: "uploads/our-clients.svg", id: "11" },
        { src: "uploads/our-clients.svg", id: "12" },
        { src: "uploads/our-clients.svg", id: "13" },
        { src: "uploads/our-clients.svg", id: "14" },
        { src: "uploads/our-clients.svg", id: "15" },
        { src: "uploads/our-clients.svg", id: "16" },
      ],
    },
    {
      id: "2",
      slider: [
        { src: "uploads/our-clients.svg", id: "1" },
        { src: "uploads/our-clients.svg", id: "2" },
        { src: "uploads/our-clients.svg", id: "3" },
        { src: "uploads/our-clients.svg", id: "4" },
        { src: "uploads/our-clients.svg", id: "5" },
        { src: "uploads/our-clients.svg", id: "6" },
        { src: "uploads/our-clients.svg", id: "7" },
        { src: "uploads/our-clients.svg", id: "8" },
        { src: "uploads/our-clients.svg", id: "9" },
        { src: "uploads/our-clients.svg", id: "10" },
        { src: "uploads/our-clients.svg", id: "11" },
        { src: "uploads/our-clients.svg", id: "12" },
        { src: "uploads/our-clients.svg", id: "13" },
        { src: "uploads/our-clients.svg", id: "14" },
        { src: "uploads/our-clients.svg", id: "15" },
        { src: "uploads/our-clients.svg", id: "16" },
      ],
    },
  ],
};

const OurClients = ({ data = dataPage }) => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={data.title} />
    </Container>

    <OurClientsContent>
      {data.sliders.map(({ id, slider }) => (
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          spaceBetween={0}
          breakpoints={{
            992: {
              spaceBetween: 20,
            },
          }}
          key={id}
        >
          {slider.map(({ src, id: sliderId }) => (
            <SwiperSlide key={sliderId}>
              <OurClientsImageWrapper>
                <ImageStatic src={src} />
              </OurClientsImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </OurClientsContent>
  </SectionWrapper>
);

OurClients.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    sliders: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        slider: PropTypes.arrayOf(
          PropTypes.exact({
            src: PropTypes.string,
            id: PropTypes.string,
          }),
        ),
      }),
    ),
  }).isRequired,
};

export default OurClients;
