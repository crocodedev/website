import PropTypes from "prop-types";
import React from "react";
import useMedia from "@/hooks/use-media";
import Map, { Marker, Popup } from "react-map-gl";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import MapStack from "@/components/Map/MapStack";
import MapStackInfo from "@/components/Map/MapStackInfo";
import MapStackInfoItem from "@/components/Map/MapStackInfoItem";
import Image from "@/components/Image";
import MapStackLink from "@/components/Map/MapStackLink";
import MapMarkerIcon from "@/components/Map/MapMarkerIcon";
import MapWrapper from "@/components/Map/MapWrapper";
import "mapbox-gl/dist/mapbox-gl.css";

const Contacts = ({
  accessToken,
  contactItems,
  popUpText,
  styleLink,
  title,
  subtitle,
  image,
  baseUrl,
}) => {
  const mapCoordinates = useMedia(
    ["(max-width: 768px)", "(max-width: 991px)", "(min-width: 992px)"],

    [
      { mapCords: { longitude: 22.5, latitude: 50, zoom: 4 }, popupOffset: [0, -90] },
      { mapCords: { longitude: 21, latitude: 51, zoom: 6 }, popupOffset: [10, -90] },
      { mapCords: { longitude: 21, latitude: 51, zoom: 6 }, popupOffset: [120, -35] },
    ],

    { longitude: 21, latitude: 51, zoom: 6 },
  );

  const [viewState, setViewState] = React.useState(mapCoordinates);

  React.useEffect(() => {
    setViewState(mapCoordinates);
  }, [mapCoordinates]);
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <MapStack>
          <MapStackInfo>
            {contactItems &&
              contactItems?.map(({ title: infoTitle, contactIcon, _key, itemLink }) => (
                <MapStackInfoItem key={_key}>
                  <Image objectFit="scale-down" {...contactIcon} />
                  <MapStackLink {...itemLink} baseUrl={baseUrl}>
                    {infoTitle}
                  </MapStackLink>
                </MapStackInfoItem>
              ))}
          </MapStackInfo>
          <MapWrapper>
            <Map
              reuseMaps
              {...viewState.mapCords}
              mapStyle={styleLink || "mapbox://styles/mitsuruyano/cl4wd54w2003m16pr1sflxk9x"}
              interactive={false}
              mapboxAccessToken={
                accessToken ||
                "pk.eyJ1IjoibWl0c3VydXlhbm8iLCJhIjoiY2w0c2Y0NTAyMDJhaDNjbXplNXViMDhlYSJ9.tXv1LSmf3LOf25M4ohCx5A"
              }
            >
              <Marker longitude={22} latitude={50.06} anchor="bottom">
                <MapMarkerIcon>
                  <Image {...image} />
                </MapMarkerIcon>
              </Marker>
              <Popup
                longitude={22}
                latitude={50.06}
                anchor="center"
                offset={viewState.popupOffset}
                closeButton={false}
                closeOnClick={false}
              >
                {popUpText}
              </Popup>
            </Map>
          </MapWrapper>
        </MapStack>
      </Container>
    </SectionWrapper>
  );
};

Contacts.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  popUpText: PropTypes.string.isRequired,
  accessToken: PropTypes.string.isRequired,
  styleLink: PropTypes.string.isRequired,
  contactItems: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      itemLink: PropTypes.object,
      contactIcon: PropTypes.object,
      _key: PropTypes.string,
    }),
  ).isRequired,
};

export default Contacts;
