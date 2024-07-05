import { configureStore } from "@reduxjs/toolkit";
import privetreducer from './privetrouter'

const store = configureStore({
	reducer: {
		privet: privetreducer,
	}
})

export default store 