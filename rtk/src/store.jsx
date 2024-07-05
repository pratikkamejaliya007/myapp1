// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counterslice'
import Privetreducer from './Privetslice';

 const store = configureStore({
  reducer: {
    counter: counterReducer,
    privet : Privetreducer
  },
});

export default store
