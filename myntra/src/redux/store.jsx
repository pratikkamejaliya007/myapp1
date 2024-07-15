import { configureStore } from '@reduxjs/toolkit';
import bagslice from './bagslice';
import log from './Loginslice';
// import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        bag: bagslice.reducer,
        log: log.reducer,
    }
});

export default store;
