import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="bg-black">
      <div className="-mt-60 relative">
        {movies.nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        )}
        {movies.popularMovies && (
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        )}
        {movies.topRatedMovies && (
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        )}
        {movies.upcomingMovies && (
          <MovieList title={"Up Coming"} movies={movies.upcomingMovies} />
        )}
      </div>
      {/* <MovieList title={"Popular"}/> */}
    </div>
  );
};

export default SecondaryContainer;
