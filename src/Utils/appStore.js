import { configureStore } from "@reduxjs/toolkit";
import FavReducer from "./FavSlice";

const appStore = configureStore({
    reducer : {
        fav : FavReducer,
    }
});

export default appStore;