import { createSlice } from "@reduxjs/toolkit";

export const weatherslice=createSlice({
    name: 'data',
    initialState : {
        value : null
    },
    reducers : {
        add: (state , action)=>{
            state.value = action.payload
        }
    }
})

export const { add } = weatherslice.actions

export default weatherslice.reducer