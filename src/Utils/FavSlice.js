import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
    name : "fav",
    initialState: {
        items : [],
    },
    reducers : {
        addItem : (state,action) => {
            state.items.push(action.payload);
        },
        removeItem : (state,action) => {
            state.items = state.items.filter((item) => item.imdbID != action.payload)
        },
        clearList : (state) => {
            state.items.length = 0;
        }
    }
});

export const{addItem,removeItem,clearList} = FavSlice.actions;

export default FavSlice.reducer;