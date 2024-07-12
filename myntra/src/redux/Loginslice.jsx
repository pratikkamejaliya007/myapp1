import { createSlice } from "@reduxjs/toolkit";

export const log=createSlice({
    name:'log',
    initialState : null,
    reducers :{
        login:(state,action)=>{
            state = action.payload
        }
    }
})

export const {login} = log.actions

export default log