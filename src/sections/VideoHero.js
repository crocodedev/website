import PropTypes from "prop-types";
import Video from "@/components/Video"

const VideoHero = ({src}) => {
  return (
    <Video controls loop muted playsinline autoPlay>
      <source src={src} type="video/mp4"/>
    </Video>
  )
}

VideoHero.propTypes = {
  src: PropTypes.string,
}

VideoHero.defaultProps = {
  src: "",
}

export default VideoHero