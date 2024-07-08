import { createSlice } from "@reduxjs/toolkit";

export const history=createSlice({
    name : 'history',
    initialState :[],
    reducers : {
        history_add : (state, action)=>{
            state.push(action.payload)
        }
    }
})

export const {history_add} = history.actions

export default history.reducer