import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopulerMovies from "../hooks/usePopulerMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";
const Browse = () => {
  const showSearchPageView = useSelector(
    (state) => state.search.showSearchPageView
  );

  useNowPlayingMovies();
  usePopulerMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showSearchPageView ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
           - MainContainer
              -video background
              -vidoe title
           - SecondaryContainer
              -movie list * n
              -cards * n
      */}
    </div>
  );
};

export default Browse;
