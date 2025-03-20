import PropTypes from "prop-types";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import HeroWrapper from "@/components/Hero/HeroWrapper";
// import HeroImage from "@/components/Hero/HeroImage";
// import Image from "@/components/Image";
import HeroContent from "@/components/Hero/HeroContent";
import HeroPortfolioContent from "@/components/Hero/HeroPortfolioContent";
import HeroPortfolioWrapper from "@/components/Hero/HeroPortfolioWrapper";
import HeroParticles from "@/components/Hero/HeroParticles";
import { useEffect, useMemo, useState } from "react";
import Particles, {initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import RichTextComponent from "./RichTextComponent";

const Hero = ({ title, _rawRichTextBlock, imageWithAltText, breadcrumbs, baseUrl, portfolio }) => {

  let portfolioArray = null

  if(portfolio) {
    portfolioArray = Object.keys(portfolio)
    .filter(key => key.startsWith("altTextImage"))
    .map(key => {
      const index = key.replace("altTextImage", "");
      const imageUrl = portfolio[`image${index}`]?.asset?.gatsbyImageData?.images?.fallback?.src;

      if (!imageUrl) return null;

      return {
        img: imageUrl,
        alt: portfolio[key]
      };
    })
    .filter(item => item !== null);
  }

  const [init, setInit] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: -1 
      },
      background: {
        color: {
          value: "#f5f5f5",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#008000",
        },
        links: {
          color: "#7dbe3b",
          distance: 170,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );


  return (
    <HeroWrapper>
      <SectionWrapper as="div" disablePaddings>
        <Container>
          <Breadcrumb baseUrl={baseUrl} color="gray" links={breadcrumbs} />
          <SectionHeading shadow={true} titleTag="h1" title={title} />
          {portfolioArray && (
            <HeroPortfolioWrapper>
              {portfolioArray.map(data => <HeroPortfolioContent src={data.img} alt={data.alt} key={data.img}/>)}
            </HeroPortfolioWrapper>
          )}

          {_rawRichTextBlock && (
            <HeroContent>
              <RichTextComponent data={_rawRichTextBlock} />
            </HeroContent>
          )}
          
        </Container>
      </SectionWrapper>

      {/* <HeroImage style={{display: 'none'}}>
        <Image {...imageWithAltText} />
      </HeroImage> */}
      
      {init && (
        <HeroParticles>
          <Particles
          id="tsparticles"
          options={options}
        />
        </HeroParticles>
      )}
    </HeroWrapper>
  );
};

Hero.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  // color: PropTypes.string,
  // sectionTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired,
  _rawRichTextBlock: PropTypes.array,
  imageWithAltText: PropTypes.object.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  portfolio: PropTypes.object,
};

Hero.defaultProps = {
  // color: "",
  // sectionTitle: "",
  _rawRichTextBlock: [],
  portfolio: {
    altText: PropTypes.string,
    image: PropTypes.object,
  }
};

export default Hero;
