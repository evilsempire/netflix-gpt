import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {

  useTrailerVideo(movieId);
  const trailerVideo = useSelector(state => state?.movies?.trailerVideo);

  return (
    <div className="">
      <iframe
        className=" w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&si=gu39bNLcy6RHCZbm&amp&hd=1&mute=1;controls=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
