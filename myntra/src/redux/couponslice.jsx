import { createSlice } from "@reduxjs/toolkit";

export const couponslice = createSlice({
    name: 'coupon',
    initialState: false,
    reducers: {
        getcoupon: () => true, // Directly return true as the new state
    }
});

export const { getcoupon } = couponslice.actions;

export default couponslice;
