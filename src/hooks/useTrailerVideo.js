import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = ({ movieId }) => {
  const dispatch = useDispatch();
  const getTrailerList = async () => {
    const trailerLists = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      MOVIE_API_OPTIONS
    );

    const trailerList = await trailerLists.json();
    const filteredVideos = trailerList.results.filter(
      (video) => video.type === "Trailer"
    );
    const filteredVideo = filteredVideos.length
      ? filteredVideos[0]
      : trailerList[0];
    dispatch(addTrailerVideo(filteredVideo));
  };

  useEffect(() => {
    getTrailerList();
  }, []);
};

export default useTrailerVideo;
