import { configureStore } from '@reduxjs/toolkit';
import bagslice from './bagslice';
import log from './Loginslice';
import couponslice from './couponslice';

const store = configureStore({
    reducer: {
        bag: bagslice.reducer,
        log: log.reducer,
        coupon : couponslice.reducer
    }
});

export default store;
