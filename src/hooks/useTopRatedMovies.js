import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS, TMDB_API } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const topRatedMovieList = await fetch(TMDB_API + "top_rated?page=1", MOVIE_API_OPTIONS);

        const topRatedMovies = await topRatedMovieList.json();
        dispatch(addTopRatedMovies(topRatedMovies.results))
    }

    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;