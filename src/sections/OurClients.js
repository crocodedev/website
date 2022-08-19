import PropTypes from "prop-types";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "@/components/Link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import OurClientsImageWrapper from "@/components/OurClients/OurClientsImageWrapper";
import Image from "@/components/Image";
import OurClientsContent from "@/components/OurClients/OurClientsContent";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";

const OurClients = ({ title, subtitle, sliders, baseUrl }) => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={title} text={subtitle} />
    </Container>

    <OurClientsContent>
      {sliders?.map(({ _key, clientsList }) => (
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
          key={_key}
        >
          {clientsList?.map(({ _key: itemId, clientPhoto, link }) => (
            <SwiperSlide key={itemId}>
              <OurClientsImageWrapper as={link ? Link : "div"} {...link} baseUrl={baseUrl}>
                <Image {...clientPhoto} />
              </OurClientsImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </OurClientsContent>
  </SectionWrapper>
);

OurClients.propTypes = {
  title: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  sliders: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      clientsList: PropTypes.arrayOf(
        PropTypes.exact({
          _key: PropTypes.string,
          clientPhoto: PropTypes.object,
          link: PropTypes.object,
        }),
      ),
    }),
  ).isRequired,
};

export default OurClients;
