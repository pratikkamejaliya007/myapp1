import { createSlice } from "@reduxjs/toolkit";

export const privet = createSlice({
	name: 'privet',
	initialState: {
		value : false
	},
	reducers: {
		
		setprivet: (state) => {
			state.value = true
		},
		setpublic: (state) => {
			state.value = false
		}
	
	}
})

export const { setprivet, setpublic } = privet.actions

export default privet.reducer