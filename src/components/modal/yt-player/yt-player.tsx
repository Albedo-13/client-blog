import YouTube from "react-youtube";

import { getBuildEnv } from "@/utils/env-mapper";

export function YoutubePlayer() {
  const options = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return <YouTube videoId={getBuildEnv("YOUTUBE_VIDEO_ID")} opts={options} />;
}
