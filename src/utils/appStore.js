import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSearchReducer from "./gptSearchSlice";
import configReducer from "./configSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        search: gptSearchReducer,
        config: configReducer
    }
});

export default store;