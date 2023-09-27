import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovieList = async () => {

    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_API_OPTIONS);

    const movies = await response.json();
    dispatch(addNowPlayingMovies(movies.results))

  }

  useEffect(() => {
    getNowPlayingMovieList();
  }, [])
}

export default useNowPlayingMovies;