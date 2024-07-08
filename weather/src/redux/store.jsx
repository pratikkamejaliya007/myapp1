import { configureStore } from '@reduxjs/toolkit';
import weatherreducer from './weatherslice'
import historyreducer from './historyslice'

const store=configureStore({
    reducer :{
        Weather : weatherreducer,
        history : historyreducer
    }
})

export default store