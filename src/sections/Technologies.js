import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TechnologiesWrapper from "@/components/Technologies/TechnologiesWrapper";
import TechnologiesStack from "@/components/Technologies/TechnologiesStack";
import TechnologiesStackItem from "@/components/Technologies/TechnologiesStackItem";
import TechnologiesSlide from "@/components/Technologies/TechnologiesSlide";
import TechnologiesSlideStack from "@/components/Technologies/TechnologiesSlideStack";
import TechnologiesSlideStackItem from "@/components/Technologies/TechnologiesSlideStackItem";
import ImageStatic from "@/components/Image";
import TechnologiesSlideText from "@/components/Technologies/TechnologiesSlideText";
import Text from "@/components/Text";

const data = {
  title: "Software Development Technologies",
  categories: [
    {
      id: 1,
      title: "LBS",
    },
    {
      id: 2,
      title: "Front-end",
    },
    {
      id: 3,
      title: "Back-end",
    },
    {
      id: 4,
      title: "Mobile",
    },
    {
      id: 5,
      title: "Cloud",
    },
  ],
  items: [
    {
      cards: [
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
      ],
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ],
};

const Technologies = () => (
  <SectionWrapper>
    <Container>
      <SectionHeading title={data.title} />
      <TechnologiesWrapper>
        <TechnologiesStack>
          {data.categories.map(({ id, title }) => (
            <TechnologiesStackItem key={id}>{title}</TechnologiesStackItem>
          ))}
        </TechnologiesStack>
        {data.items.map(({ cards, text }) => (
          <TechnologiesSlide key={cards}>
            <TechnologiesSlideStack>
              {cards.map(({ src, title }) => (
                <TechnologiesSlideStackItem key={text}>
                  <ImageStatic src={src} />
                  <Text>{title}</Text>
                </TechnologiesSlideStackItem>
              ))}
            </TechnologiesSlideStack>
            <TechnologiesSlideText
              lineHeight="lg"
              fontSize="text"
              fontWeight="regular"
              mobileMultiplier={0.875}
            >
              {text}
            </TechnologiesSlideText>
          </TechnologiesSlide>
        ))}
      </TechnologiesWrapper>
    </Container>
  </SectionWrapper>
);

export default Technologies;
