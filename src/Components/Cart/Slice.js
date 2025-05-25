import { combineSlices, createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "Items",
    initialState: {
        Item: []
    },


    reducers: {
        addItems: (state, action) => {
            // const elemid = action.payload.asin;

            state.Item.push(action.payload)
        },
        removeItem: (state, action) => {
            state.Item = state.Item.filter((elem) => {
                return elem.asin !== action.payload
            })
        },
        CleanCart: (state, action) => {
            state.Item = []
        }
    }
});

export const { addItems, removeItem, CleanCart } = todoSlice.actions;
export default todoSlice.reducer
