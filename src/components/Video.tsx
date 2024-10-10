"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const Video = () => {
  return (
    <CldVideoPlayer
      width="1620"
      height="1080"
      src="<Public ID>"
      colors={{
        accent: "#ff0000",
        base: "#00ff00",
        text: "#0000ff",
      }}
      fontFace="Source Serif Pro"
    />
  );
};

export default Video;
