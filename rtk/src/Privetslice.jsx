import { createSlice } from "@reduxjs/toolkit";

export const Privetslice = createSlice({
    name:'privet',
    initialState : {
        value : false
    },
    reducers : {
        setprivet :(state)=>{
            state.value = true
        },
        getprivet : (state)=>{
            state.value = false
        }
    }
})

export const {setprivet ,getprivet} = Privetslice.actions

export default Privetslice.reducer