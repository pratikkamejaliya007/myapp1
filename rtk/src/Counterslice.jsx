import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({
    name:"counter",
    initialState : {
        value:0
    },
    reducers : {
        increment : (state) =>{
            state.value += 1
        },
        decrement : (state) =>{
            state.value -= 1
        },
        add : (state,action) =>{
            state.value += action.payload
        }
    }
})

export const {increment,decrement,add}=counterslice.actions

export default counterslice.reducer