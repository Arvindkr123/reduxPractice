import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice';
import AuthSlice from './AuthSlice';

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        auth:AuthSlice
    }
})

export default store;