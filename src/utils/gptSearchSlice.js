import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlie = createSlice({
    name: "search",
    initialState: {
        showSearchPageView: false
    },
    reducers: {
        toggleSearchPageView: (state, action) => {
            state.showSearchPageView = !state.showSearchPageView;
        }
    }
})

export const {toggleSearchPageView} = gptSearchSlie.actions;

export default gptSearchSlie.reducer;