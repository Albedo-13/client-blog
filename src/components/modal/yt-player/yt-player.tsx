import YouTube from "react-youtube";

export function YoutubePlayer() {
  const options = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return <YouTube videoId={process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID} opts={options} />;
}
