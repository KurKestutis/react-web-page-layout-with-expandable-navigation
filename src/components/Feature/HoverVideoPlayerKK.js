import HoverVideoPlayer from "react-hover-video-player";

function HoverVideoPlayerKK(props) {
  return (
    <HoverVideoPlayer
      style={{
        // Make the image expand to cover the video's dimensions
        width: "100%",
        maxWidth: "600px",
        height: "100%",
      }}
      videoSrc={props.video}
      pausedOverlay={
        <img
          src={props.imgSrcForHover}
          alt="project screenshot"
          style={{
            // Make the image expand to cover the video's dimensions
            width: "100%",
            maxWidth: "600px",
            height: "100%",
            objectFit: "cover",
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
}

export default HoverVideoPlayerKK;
