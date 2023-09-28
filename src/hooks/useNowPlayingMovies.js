import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { MOVIE_API_OPTIONS, TMDB_API } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovieList = async () => {

    const response = await fetch(TMDB_API + 'now_playing?page=1', MOVIE_API_OPTIONS);

    const movies = await response.json();
    dispatch(addNowPlayingMovies(movies.results))

  }

  useEffect(() => {
    getNowPlayingMovieList();
  }, [])
}

export default useNowPlayingMovies;