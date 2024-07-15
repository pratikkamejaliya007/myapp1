import { createSlice } from "@reduxjs/toolkit";

export const log=createSlice({
    name:'log',
    initialState : false,
    reducers :{
        login:(state)=>{
            state = true
        }
    }
})

export const {login} = log.actions

export default log