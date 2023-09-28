import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS, TMDB_API } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

const usePopulerMovies = () => {
  const dispatch = useDispatch();

  const getPopularMoviesList = async () => {
    const popularMoviesData = await fetch(
      TMDB_API + "popular?page=1",
      MOVIE_API_OPTIONS
    );

    const popularMovies = await popularMoviesData.json();

    dispatch(addPopularMovies(popularMovies.results));
  };

  useEffect(() => {
    getPopularMoviesList();
  }, []);
};

export default usePopulerMovies;
