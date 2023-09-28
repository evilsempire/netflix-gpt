import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-12 text-white">
      <div className="w-full text-2xl font-semibold my-2">{title}</div>
      <div className="flex overflow-x-auto">
        {movies.map((movie) => (
          movie.poster_path && <MovieCard className="mx-2" key={movie.id} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
