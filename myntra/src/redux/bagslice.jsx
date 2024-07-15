import { createSlice } from "@reduxjs/toolkit";

export const bagslice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addbag: (state, action) => {
            state.push(action.payload);
        },
        removebag: (state, action) => {
            return state.filter((el) => el.id !== action.payload);
        }
    }
});

export const { addbag, removebag } = bagslice.actions;

export default bagslice;
