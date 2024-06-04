import YouTube from "react-youtube";

export function YoutubePlayer() {
  const options = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      mute: 1,
    },
  };

  return <YouTube videoId="fzcQxRr1cSw" opts={options} />;
}
