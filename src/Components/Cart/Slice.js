import { combineSlices, createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "Items",
    initialState: {
        Item: []
    },


    reducers: {
        addItems: (state, action) => {
            state.Item.push(action.payload)
        }
    }
});

export const { addItems, removeItems } = todoSlice.actions;
export default todoSlice.reducer
