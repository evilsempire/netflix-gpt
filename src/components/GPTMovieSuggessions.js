import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggessions = () => {
  const { movieNames, movieDetails } = useSelector((state) => state.search);

  return (
    movieNames && (
      <div className="bg-black m-1 opacity-90">
        <div className="pt-2">
          {movieNames?.map((movie, index) => {
            return (
              <MovieList
                key={movie}
                title={movie}
                movies={movieDetails[index].results}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default GPTMovieSuggessions;
