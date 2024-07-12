import { configureStore } from '@reduxjs/toolkit'
import bagslice from './bagslice';
import log from './Loginslice';

const store=configureStore({
    reducer: {
        bag:bagslice.reducer,
        log:log.reducer,
    }
})

export default store;