import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlie = createSlice({
    name: "search",
    initialState: {
        showSearchPageView: false,
        movieNames: null,
        movieDetails: null
    },
    reducers: {
        toggleSearchPageView: (state, action) => {
            state.showSearchPageView = !state.showSearchPageView;
        },
        setMovieResult: (state, action) => {
            const {movieNames, movieDetails} = action.payload;

            state.movieNames = movieNames;
            state.movieDetails = movieDetails;
        }
    }
})

export const {toggleSearchPageView, setMovieResult} = gptSearchSlie.actions;

export default gptSearchSlie.reducer;