import HoverVideoPlayer from "react-hover-video-player";

function HoverVideoPlayerKK(props) {
  return (
    <HoverVideoPlayer
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "100%",
        boxShadow: "-3px 0px 22px -15px rgba(0, 0, 0, 0.74)",
      }}
      videoSrc={props.video}
      pausedOverlay={
        <img
          src={props.imgSrcForHover}
          alt="project screenshot"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "100%",
            objectFit: "cover",
            boxShadow: "-3px 0px 22px -15px rgba(0, 0, 0, 0.74)",
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
