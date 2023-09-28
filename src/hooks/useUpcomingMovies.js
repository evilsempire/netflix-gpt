import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS, TMDB_API } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector(state => state.upcomingMovies);

    const getUpcomingMovies = async () => {
        const upcomingMovieList = await fetch(TMDB_API + "upcoming?page=1", MOVIE_API_OPTIONS);

        const upcomingMovies = await upcomingMovieList.json();

        dispatch(addUpcomingMovies(upcomingMovies.results));
    }   

    useEffect(() => {
        upcomingMovies && getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;